import { Link } from 'react-router-dom';
import { Navigation } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-light-blue pt-36 pb-16 relative overflow-hidden border-b border-soft-border">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#1A3A8F_1px,transparent_1px),linear-gradient(to_bottom,#1A3A8F_1px,transparent_1px)] bg-[size:34px_34px]" />

      {/* Animated SVG curved route line */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-32 md:block pointer-events-none">
        <svg viewBox="0 0 1200 160" className="h-full w-full" fill="none">
          <path
            d="M0 118 C170 62 260 144 420 92 C585 38 700 120 850 74 C1010 26 1096 76 1200 42"
            stroke="url(#pageRoute)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="pageRoute" x1="0" x2="1200" y1="118" y2="42">
              <stop stopColor="#1A3A8F" stopOpacity=".15" />
              <stop offset=".5" stopColor="#E06000" stopOpacity=".5" />
              <stop offset="1" stopColor="#2855C8" stopOpacity=".15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating glowing vehicle / indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-7 left-[8%] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-white shadow-[0_0_50px_rgba(224,96,0,0.35)] md:flex pulse-ring"
      >
        <Navigation size={14} className="rotate-45" />
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* Breadcrumb pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-soft-border/50 text-xs font-bold font-heading uppercase tracking-widest text-navy mb-4 shadow-sm">
          <Link to="/" className="text-graphite hover:text-navy transition-colors">
            Home
          </Link>
          <span className="text-graphite/40">/</span>
          <span className="text-orange">{breadcrumb || title}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black font-heading text-charcoal mb-4 tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base md:text-lg text-graphite font-body max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
