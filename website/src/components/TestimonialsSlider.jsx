import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/siteData';

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1152);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Determine slides per view based on width
  const isDesktop = containerWidth >= 1024;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;
  const slidesPerView = isDesktop ? 3 : isTablet ? 2 : 1;
  const gap = 20;
  const slideWidth = (containerWidth - (slidesPerView - 1) * gap) / slidesPerView;
  const maxIndex = testimonials.length - slidesPerView;

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div
      ref={containerRef}
      className="swiper swiper-initialized swiper-horizontal pb-12 swiper-backface-hidden relative overflow-hidden"
    >
      {/* Swiper Wrapper */}
      <div
        className="swiper-wrapper"
        style={{
          display: 'flex',
          transform: `translate3d(-${activeIndex * (slideWidth + gap)}px, 0, 0)`,
          transitionDuration: '500ms',
          transitionProperty: 'transform'
        }}
      >
        {testimonials.map((story) => (
          <div
            key={story.id}
            className="swiper-slide shrink-0"
            style={{
              width: `${slideWidth}px`,
              marginRight: `${gap}px`
            }}
          >
            <div className="bg-white border border-soft-border rounded-card h-full flex flex-col card-hover group overflow-hidden">
              {/* Photo Banner with stars */}
              <div className="relative aspect-[1708/920] overflow-hidden bg-light-blue">
                <img
                  src={story.image}
                  alt={`${story.name}, ${story.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-orange fill-orange drop-shadow" />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <Quote size={18} className="text-navy/20 mb-4" />
                <p className="text-graphite font-body text-sm leading-relaxed flex-1 mb-5">
                  {story.text}
                </p>

                <div className="border-t border-soft-border pt-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold font-heading text-charcoal text-sm">
                      {story.name}
                    </div>
                    <div className="text-graphite/60 text-xs font-body">
                      {story.role}, {story.company}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full gradient-navy flex items-center justify-center text-white font-bold text-xs font-heading">
                    {story.name.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper Pagination Bullets */}
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal flex justify-center items-center gap-2 mt-4">
        {[...Array(maxIndex + 1)].map((_, i) => (
          <span
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{ cursor: 'pointer' }}
            className={`swiper-pagination-bullet ${
              activeIndex === i ? 'swiper-pagination-bullet-active !opacity-100' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}
