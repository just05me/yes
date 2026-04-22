import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_THRESHOLD = 64;
const RUBBER = 0.28;

/**
 * @param {object} p
 * @param {number} p.count
 * @param {number} [p.threshold=64]
 * @param {(i: number) => void} [p.onIndexChange]
 */
export function useSwipe({ count, threshold = DEFAULT_THRESHOLD, onIndexChange }) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const activeRef = useRef(false);
  const indexRef = useRef(0);
  const sliderEl = useRef(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const setIndexClamped = useCallback(
    (next) => {
      const i = Math.max(0, Math.min(count - 1, next));
      setIndex(i);
      onIndexChange?.(i);
    },
    [count, onIndexChange]
  );

  const applyRubber = useCallback((i, rawDelta) => {
    if (i === 0 && rawDelta > 0) return rawDelta * RUBBER;
    if (i === count - 1 && rawDelta < 0) return rawDelta * RUBBER;
    return rawDelta;
  }, [count]);

  const updateDrag = useCallback(
    (clientX) => {
      const i = indexRef.current;
      const d = clientX - startX.current;
      setDragOffset(applyRubber(i, d));
    },
    [applyRubber]
  );

  const endGesture = useCallback(
    (clientX) => {
      if (!activeRef.current) return;
      activeRef.current = false;
      setDragging(false);
      const i = indexRef.current;
      const d = clientX - startX.current;
      if (d < -threshold && i < count - 1) {
        setIndexClamped(i + 1);
      } else if (d > threshold && i > 0) {
        setIndexClamped(i - 1);
      }
      setDragOffset(0);
    },
    [count, setIndexClamped, threshold]
  );

  const onTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    activeRef.current = true;
    setDragging(true);
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (!activeRef.current || e.touches.length !== 1) return;
    updateDrag(e.touches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!e.changedTouches.length) return;
    endGesture(e.changedTouches[0].clientX);
  };

  const onTouchCancel = () => {
    if (!activeRef.current) return;
    activeRef.current = false;
    setDragging(false);
    setDragOffset(0);
  };

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    activeRef.current = true;
    setDragging(true);
    startX.current = e.clientX;
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!activeRef.current) return;
      updateDrag(e.clientX);
    };
    const onUp = (e) => {
      if (!activeRef.current) return;
      endGesture(e.clientX);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [endGesture, updateDrag]);

  return {
    index,
    setIndex: setIndexClamped,
    dragOffset,
    dragging,
    sliderRef: sliderEl,
    touchProps: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTouchCancel,
    },
    onMouseDown,
  };
}
