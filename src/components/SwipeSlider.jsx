import { useSwipe } from '../hooks/useSwipe';

export function SwipeSlider({ children, showDots = true }) {
  const slides = Array.isArray(children) ? children : [children];
  const n = slides.length;
  const { index, setIndex, dragOffset, dragging, touchProps, onMouseDown } = useSwipe({
    count: n,
    threshold: 64,
  });

  const transition = dragging
    ? 'none'
    : 'transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1)';

  return (
    <div className="swipe-root">
      <div
        className="swipe-viewport"
        role="region"
        aria-label="Слайды памятки"
        {...touchProps}
        onMouseDown={onMouseDown}
      >
        <div
          className="swipe-track"
          style={{
            transform: `translate3d(calc(-${index * 100}% + ${dragOffset}px), 0, 0)`,
            transition,
          }}
        >
          {slides.map((node, i) => (
            <div key={i} className="swipe-slide" aria-hidden={i !== index}>
              {node}
            </div>
          ))}
        </div>
      </div>
      {showDots && n > 0 ? (
        <div className="swipe-dots" role="tablist" aria-label="Слайд">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              className={i === index ? 'swipe-dot is-active' : 'swipe-dot'}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
