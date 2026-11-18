import React, { useState, useEffect, useRef } from 'react';
import IconHelper from './IconHelper';

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

export default function StatCounter({ value, suffix, label, decimal, icon, color }) {
  const { count, ref } = useCountUp(value, 2000, decimal);

  return (
    <div ref={ref} className="group">
      <div className="bg-white rounded-card p-6 shadow-card border border-soft-border text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Top colored border stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              color === 'orange'
                ? 'linear-gradient(90deg, #E06000, #FF8C2A)'
                : 'linear-gradient(90deg, #1A3A8F, #2855C8)'
          }}
        />

        {/* Icon Container */}
        <div
          className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
            color === 'orange' ? 'gradient-orange shadow-orange-sm' : 'gradient-navy shadow-navy-sm'
          }`}
        >
          <IconHelper name={icon} size={22} className="text-white" />
        </div>

        {/* Counter Number */}
        <div
          className={`text-4xl font-bold font-heading mb-1 ${
            color === 'orange' ? 'gradient-text-orange' : 'gradient-text-navy'
          }`}
        >
          {decimal ? count.toFixed(1) : count.toLocaleString()}
          {suffix}
        </div>

        {/* Metric Label */}
        <div className="text-graphite text-sm font-body">{label}</div>
      </div>
    </div>
  );
}
