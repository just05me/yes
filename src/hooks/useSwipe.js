import { useState, useRef, useEffect, useCallback } from 'react';

export function useSwipe({ count, threshold = 60, onIndexChange }) {
  const [index, setIndex] = useState(0);
  const [dragDx, setDragDx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragState = useRef(null);
  const indexRef = useRef(0);
  indexRef.current = index;

  const countRef = useRef(count);
  countRef.current = count;

  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;

  const goTo = useCallback((i) => {
    const c = countRef.current;
    const clamped = Math.max(0, Math.min(c - 1, i));
    setIndex((prev) => {
      if (prev !== clamped) {
        onIndexChangeRef.current?.(clamped);
      }
      return clamped;
    });
  }, []);

  const next = useCallback(() => {
    goTo(indexRef.current + 1);
  }, [goTo]);

  const prev = useCallback(() => {
    goTo(indexRef.current - 1);
  }, [goTo]);

  const clampDx = useCallback((dx) => {
    const idx = indexRef.current;
    const c = countRef.current;
    if (idx <= 0 && dx > 0) return 0;
    if (idx >= c - 1 && dx < 0) return 0;
    return dx;
  }, []);

  const finishDrag = useCallback(
    (finalDxRaw) => {
      const s = dragState.current;
      if (!s) return;
      if (!s.cancelled) {
        const finalDx = clampDx(finalDxRaw);
        if (Math.abs(finalDx) > threshold) {
          const target =
            finalDx < 0 ? indexRef.current + 1 : indexRef.current - 1;
          goTo(target);
        }
      }
      setDragDx(0);
      setIsDragging(false);
      dragState.current = null;
    },
    [clampDx, goTo, threshold]
  );

  const onTouchStart = useCallback((e) => {
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    dragState.current = {
      mode: 'touch',
      startX: touch.clientX,
      startY: touch.clientY,
      trackWidth: rect.width,
      cancelled: false,
      firstMove: true,
    };
    setIsDragging(true);
    setDragDx(0);
  }, []);

  const onTouchMove = useCallback(
    (e) => {
      const s = dragState.current;
      if (!s || s.mode !== 'touch' || s.cancelled) return;
      const touch = e.touches[0];
      const dx = touch.clientX - s.startX;
      const dy = touch.clientY - s.startY;

      if (s.firstMove) {
        s.firstMove = false;
        if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx) * 1.2) {
          s.cancelled = true;
          setIsDragging(false);
          setDragDx(0);
          return;
        }
      }
      setDragDx(clampDx(dx));
    },
    [clampDx]
  );

  const onTouchEnd = useCallback(
    (e) => {
      const s = dragState.current;
      if (!s || s.mode !== 'touch') return;
      const touch =
        (e.changedTouches && e.changedTouches[0]) ||
        (e.touches && e.touches[0]);
      const finalDx = touch ? touch.clientX - s.startX : 0;
      finishDrag(finalDx);
    },
    [finishDrag]
  );

  const onTouchCancel = useCallback(() => {
    const s = dragState.current;
    if (!s || s.mode !== 'touch') return;
    finishDrag(0);
    if (dragState.current) dragState.current.cancelled = true;
  }, [finishDrag]);

  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    dragState.current = {
      mode: 'mouse',
      startX: e.clientX,
      startY: e.clientY,
      trackWidth: rect.width,
      cancelled: false,
      firstMove: false,
    };
    setIsDragging(true);
    setDragDx(0);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const s = dragState.current;
    if (!s || s.mode !== 'mouse') return;

    const handleMouseMove = (e) => {
      const cur = dragState.current;
      if (!cur || cur.cancelled) return;
      const dx = e.clientX - cur.startX;
      setDragDx(clampDx(dx));
    };

    const handleMouseUp = (e) => {
      const cur = dragState.current;
      if (!cur) return;
      const dx = e.clientX - cur.startX;
      finishDrag(dx);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, clampDx, finishDrag]);

  const bind = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onMouseDown,
  };

  return { index, dragDx, isDragging, bind, goTo, next, prev };
}
