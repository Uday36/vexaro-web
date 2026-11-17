import React from 'react';
import { Search, Truck, Navigation, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Book',
    text: 'Book online or call. We schedule pickup at your convenience.',
    color: 'navy',
    point: '10%'
  },
  {
    step: '02',
    icon: Truck,
    title: 'Pickup',
    text: 'Agent arrives at your doorstep with secure packaging materials.',
    color: 'orange',
    point: '38%'
  },
  {
    step: '03',
    icon: Navigation,
    title: 'Transit',
    text: 'Real-time GPS tracking and transit updates through our hubs.',
    color: 'navy',
    point: '66%'
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Delivered',
    text: 'Safe delivery with digital proof of delivery and OTP confirmation.',
    color: 'orange',
    point: '94%'
  }
];

export default function ShipmentJourney({ isInView }) {
  return (
    <div className="relative rounded-card border border-soft-border bg-light-blue overflow-hidden p-5 md:p-8 shadow-card">
      {/* Background blueprint grid pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#1A3A8F_1px,transparent_1px),linear-gradient(to_bottom,#1A3A8F_1px,transparent_1px)] bg-[size:34px_34px]" />

      {/* Subtle top laser glow line */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-6 h-px w-40 bg-gradient-to-r from-transparent via-orange/60 to-transparent animate-shimmer"
      />

      {/* 1. Mobile View (Stack with vertical line) */}
      <div className="block md:hidden relative py-2">
        <div className="absolute left-[26px] top-8 bottom-10 w-1 bg-gradient-to-b from-navy via-orange to-navy opacity-20 rounded-full" />
        <div
          className={`absolute left-[26px] top-8 bottom-10 w-1 bg-gradient-to-b from-navy via-orange to-navy rounded-full transition-all duration-1000 ${
            isInView ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
          style={{ transformOrigin: 'top' }}
        />

        <div className="flex flex-col gap-6 relative z-10">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 transition-all duration-500"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-soft-border shadow-md mt-1">
                  <div
                    className={`absolute inset-1.5 rounded-full ${
                      item.color === 'orange' ? 'gradient-orange' : 'gradient-navy'
                    }`}
                  />
                  <Icon className="relative text-white" size={16} />
                  <span className="absolute -top-1 -right-1 rounded-full bg-charcoal px-1.5 py-0.5 text-[9px] font-bold text-white">
                    {item.step}
                  </span>
                </div>

                <div className="bg-white rounded-card border border-soft-border p-4 shadow-sm flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-heading text-base font-bold text-charcoal">
                      {item.title}
                    </h4>
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                        item.color === 'orange'
                          ? 'bg-orange-50 border-orange/20 text-orange'
                          : 'bg-navy-50 border-navy/20 text-navy'
                      }`}
                    >
                      <Icon size={12} />
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-graphite font-body">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Tablet View (Horizontal line + 4 cards) */}
      <div className="hidden md:block lg:hidden">
        <div className="relative h-24 mb-6">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 100" fill="none">
            <path d="M 100 50 L 700 50" stroke="#DDE3F0" strokeWidth="8" strokeLinecap="round" />
            <path
              d="M 100 50 L 700 50"
              stroke="url(#routeGradientTablet)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="routeGradientTablet" x1="100" x2="700" y1="50" y2="50">
                <stop stopColor="#1A3A8F" />
                <stop offset="0.5" stopColor="#E06000" />
                <stop offset="1" stopColor="#2855C8" />
              </linearGradient>
            </defs>
          </svg>

          {[12.5, 37.5, 62.5, 87.5].map((pct, idx) => {
            const item = steps[idx];
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pct}%`, top: '50%' }}
              >
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white border border-soft-border shadow-md">
                  <div
                    className={`absolute inset-1.5 rounded-full ${
                      item.color === 'orange' ? 'gradient-orange' : 'gradient-navy'
                    }`}
                  />
                  <Icon className="relative text-white" size={16} />
                  <span className="absolute -top-1 -right-1 rounded-full bg-charcoal px-1.5 py-0.5 text-[9px] font-bold text-white">
                    {item.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-card border border-white/80 bg-white/90 p-4 shadow-card backdrop-blur-sm flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1"
              >
                <div className="mb-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                      item.color === 'orange'
                        ? 'bg-orange-50 border-orange/20 text-orange'
                        : 'bg-navy-50 border-navy/20 text-navy'
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={14} />
                  </div>
                </div>
                <h4 className="font-heading text-sm font-bold text-charcoal mb-2">
                  {item.title}
                </h4>
                <p className="text-[11px] leading-relaxed text-graphite font-body">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Desktop View (Curved wave route line with moving vehicle + 4 cards) */}
      <div className="hidden lg:block">
        <div className="relative h-56 mb-2">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 250" fill="none">
            <path
              d="M70 150 C210 42 320 224 460 120 C590 24 710 206 900 74"
              stroke="#DDE3F0"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M70 150 C210 42 320 224 460 120 C590 24 710 206 900 74"
              stroke="url(#routeGradientDesktop)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="routeGradientDesktop" x1="70" x2="900" y1="150" y2="74">
                <stop stopColor="#1A3A8F" />
                <stop offset="0.55" stopColor="#E06000" />
                <stop offset="1" stopColor="#2855C8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating delivery vehicle badge along the path */}
          <div
            className="absolute left-[7%] top-[45%] flex h-12 w-12 items-center justify-center rounded-full gradient-orange shadow-orange animate-pulse"
            style={{ animationDuration: '3s' }}
          >
            <Navigation className="text-white -rotate-45" size={17} />
            <span className="absolute inset-0 rounded-full border border-orange/50 animate-ping" />
          </div>

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="absolute -translate-x-1/2"
                style={{
                  left: item.point,
                  top: idx % 2 === 0 ? '58%' : '8%'
                }}
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white border border-soft-border shadow-card hover:scale-105 transition-transform">
                  <div
                    className={`absolute inset-2 rounded-full ${
                      item.color === 'orange' ? 'gradient-orange' : 'gradient-navy'
                    }`}
                  />
                  <Icon className="relative text-white" size={18} />
                  <span className="absolute -right-2 -top-2 rounded-full bg-charcoal px-2 py-1 text-[10px] font-bold text-white">
                    {item.step}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative grid gap-4 grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-card border border-white/80 bg-white/90 p-5 shadow-card backdrop-blur-sm hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                      item.color === 'orange'
                        ? 'bg-orange-50 border-orange/20 text-orange'
                        : 'bg-navy-50 border-navy/20 text-navy'
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={16} />
                  </div>
                  <span
                    className={`font-heading text-xs font-bold ${
                      item.color === 'orange' ? 'text-orange' : 'text-navy'
                    }`}
                  >
                    {item.step}
                  </span>
                </div>
                <h4 className="font-heading text-base font-bold text-charcoal mb-2">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-graphite font-body">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
