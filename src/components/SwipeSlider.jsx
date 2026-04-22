import React, { useEffect } from 'react';
import { useSwipe } from '../hooks/useSwipe.js';

export default function SwipeSlider({ children }) {
  const slides = React.Children.toArray(children);
  const count = slides.length;

  const { index, dragDx, isDragging, bind, goTo, next, prev } = useSwipe({
    count,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  if (count === 0) {
    return <div className="swipe-root" />;
  }

  const percentPerSlide = 100 / count;
  const trackStyle = {
    width: `${count * 100}vw`,
    transform: `translateX(calc(${-index * percentPerSlide}% + ${dragDx}px))`,
  };

  return (
    <div className="swipe-root">
      <div
        className={`swipe-track${isDragging ? ' is-dragging' : ''}`}
        style={trackStyle}
        {...bind}
      >
        {slides.map((slide, i) => (
          <div className="swipe-slide" key={i}>
            <div className="swipe-slide-inner">{slide}</div>
          </div>
        ))}
      </div>
      <div className="swipe-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`swipe-dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
