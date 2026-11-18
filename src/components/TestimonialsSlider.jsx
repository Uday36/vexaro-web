import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaBuilding } from './IconHelper';
import { testimonials } from '../data/siteData';

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);

  // Auto rotate every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      // swipe left -> next
      setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (diff < -50) {
      // swipe right -> prev
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div
      className="relative pb-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: '20px',
            transform: `translateX(calc(-${activeIndex} * (100% + 20px) / ${slidesPerView}))`
          }}
        >
          {testimonials.map((story) => (
            <div
              key={story.id}
              style={{
                flex: `0 0 calc((100% - ${(slidesPerView - 1) * 20}px) / ${slidesPerView})`
              }}
              className="bg-white border border-soft-border rounded-card flex flex-col card-hover group overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Photo Banner with stars overlay */}
              <div className="relative aspect-[1708/920] overflow-hidden bg-light-blue">
                <img
                  src={story.image}
                  alt={`${story.name}, ${story.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <FaStar key={i} size={12} className="text-orange drop-shadow" />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <FaBuilding size={18} className="text-navy/20 mb-4" />
                <p className="text-graphite font-body text-sm leading-relaxed flex-1 mb-5">
                  {story.text}
                </p>

                <div className="border-t border-soft-border pt-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold font-heading text-charcoal text-sm">
                      {story.name}
                    </div>
                    <div className="text-graphite text-xs font-body">
                      {story.role}
                    </div>
                  </div>
                  <div className="text-right text-xs font-heading font-semibold text-navy">
                    {story.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination bullets */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? 'bg-navy w-6 opacity-100'
                : 'bg-navy/30 hover:bg-navy/50 opacity-40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
