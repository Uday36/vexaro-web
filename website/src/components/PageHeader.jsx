import React from 'react';
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
        className="absolute bottom-8 right-1/4 hidden h-10 w-10 items-center justify-center rounded-full gradient-orange shadow-orange md:flex animate-float"
      >
        <Navigation className="text-white -rotate-45" size={14} />
      </div>

      <div className="container-custom relative">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-sm text-graphite/60 font-body mb-5">
            <Link to="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <span className="text-graphite/30">/</span>
            <span className="text-orange font-medium">{breadcrumb}</span>
          </div>
        )}

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/75 px-3 py-1.5 shadow-card backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-navy">
            VEXARO Network
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-heading text-charcoal mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-graphite font-body text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-6 w-16 h-1 gradient-orange rounded-full origin-left" />
      </div>
    </section>
  );
}
