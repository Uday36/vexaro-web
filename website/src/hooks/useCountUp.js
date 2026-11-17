import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp
 * Custom animation hook to smoothly interpolate numbers from 0 to targetVal
 * using requestAnimationFrame and cubic ease-out when the element enters the viewport.
 */
export function useCountUp(targetVal, duration = 2000, isDecimal = false) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      startTime ||= timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(
        isDecimal
          ? parseFloat((eased * targetVal).toFixed(1))
          : Math.floor(eased * targetVal)
      );
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [started, targetVal, duration, isDecimal]);

  return { count, ref };
}

export default useCountUp;
