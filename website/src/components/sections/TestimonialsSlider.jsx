import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/siteData';

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

  const offset = activeIndex * (slideWidth + gap);

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-light-blue border border-navy/15 text-xs font-bold font-heading uppercase tracking-widest text-navy mb-4">
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-charcoal tracking-tight mb-4">
            Trusted by <span className="text-orange">2,500+</span> Shippers Daily
          </h2>
          <p className="text-graphite font-body text-base md:text-lg">
            Read real feedback from e-commerce brands, manufacturers, and retail partners across India.
          </p>
        </div>

        {/* Custom Responsive Swiper Container */}
        <div ref={containerRef} className="swiper relative overflow-hidden pb-12">
          <div
            className="swiper-wrapper flex transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(-${offset}px, 0, 0)`,
              gap: `${gap}px`
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="swiper-slide flex-shrink-0"
                style={{ width: `${slideWidth}px` }}
              >
                <div className="h-full bg-white rounded-[24px] p-7 md:p-8 border border-soft-border/60 shadow-soft flex flex-col justify-between hover:shadow-card transition-all duration-300">
                  <div>
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1 text-orange">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <Quote size={28} className="text-navy/20" />
                    </div>

                    <p className="text-charcoal font-body text-base leading-relaxed mb-6 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-soft-border/50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold font-heading text-charcoal">
                        {item.name}
                      </h4>
                      <p className="text-xs text-graphite font-body">
                        {item.role} • <span className="text-navy font-medium">{item.city}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx ? 'w-8 h-2.5 bg-orange' : 'w-2.5 h-2.5 bg-soft-border hover:bg-navy/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
