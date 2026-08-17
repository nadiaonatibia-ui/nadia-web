import { useEffect, useRef } from 'react';

export function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.display = 'none';
      return;
    }

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      el.style.display = 'none';
      return;
    }

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      el.style.opacity = '1';

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(() => {
          el.style.transform = `translate(${posRef.current.x - 200}px, ${posRef.current.y - 200}px)`;
          frameRef.current = null;
        });
      }
    };

    const onLeave = () => {
      el.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="spotlight-cursor"
      aria-hidden="true"
    />
  );
}
