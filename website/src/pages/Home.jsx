import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navigation,
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  Headphones,
  Radio,
  Globe,
  Cpu,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useMeta } from '../hooks/useMeta';
import StatCounter from '../components/StatCounter';
import ShipmentJourney from '../components/ShipmentJourney';
import TestimonialsSlider from '../components/TestimonialsSlider';
import IconHelper from '../components/IconHelper';
import {
  homeStats,
  aboutFeatures,
  servicesData,
  whyStandApart
} from '../data/siteData';

export default function Home() {
  useMeta({
    title: 'Home',
    description:
      "VEXARO — India's modern courier partner. Express delivery, B2B courier services, e-commerce shipping across 100+ cities."
  });

  return (
    <>
      {/* 1. HERO SECTION */}
      <section
        className="relative flex items-center overflow-hidden bg-white"
        style={{ minHeight: '100vh' }}
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/hero_background.png"
            alt="Courier Background"
            className="w-full h-full object-cover lg:object-contain object-top lg:object-right-bottom opacity-[0.28] lg:opacity-90 pt-0 lg:pt-24"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 lg:hidden" />
        </div>

        {/* Ambient Lighting & Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange opacity-[0.08] blur-[100px]" />
          <div className="absolute right-0 bottom-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-navy opacity-[0.05] blur-[120px]" />
        </div>

        {/* Content Container */}
        <div className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 min-h-screen pt-16 md:pt-24 lg:pt-28 pb-6 md:pb-10">
            <div className="flex-1 max-w-xl lg:max-w-[50%] z-20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navy/10 bg-white/90 backdrop-blur-md shadow-soft mb-4 md:mb-5">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                <span className="text-charcoal font-semibold text-[10px] sm:text-xs uppercase tracking-widest font-heading">
                  India's Premium Courier Partner
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-[4rem] lg:text-[4.5rem] font-black font-heading text-charcoal leading-[1.05] tracking-tighter mb-4 md:mb-6">
                DELIVERING{' '}
                <span className="inline-block text-orange relative">
                  TRUST.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="#E06000"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="block text-navy">CONNECTING</span>
                <span className="block text-charcoal">THE WORLD.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-graphite text-base md:text-lg font-body leading-relaxed mb-5 md:mb-8 max-w-md font-medium">
                VEXARO powers 2,500+ daily shipments across 100+ cities — combining technology,
                speed, and reliability to build the future of India's courier services.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
                <Link
                  to="/track"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-bold font-heading rounded-full shadow-[0_8px_30px_rgba(26,58,143,0.3)] hover:shadow-[0_8px_30px_rgba(26,58,143,0.5)] hover:-translate-y-1 transition-all duration-300 text-base"
                >
                  <Navigation size={20} className="-rotate-45" /> Track Shipment
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-charcoal border-2 border-soft-border font-bold font-heading rounded-full hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 text-base group"
                >
                  Get a Quote{' '}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-charcoal text-[11px] font-bold tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-0.5 h-8 rounded-full bg-charcoal/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-charcoal rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. STATS TICKER ROW */}
      <section className="py-16 bg-white border-y border-soft-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {homeStats.map((stat, idx) => (
              <StatCounter
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT VEXARO SECTION */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy/20 rounded-full mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-navy" />
                <span className="text-navy text-xs font-medium font-heading uppercase tracking-wider">
                  About VEXARO
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-5 leading-tight">
                Redefining Courier Services for
                <br />
                <span className="gradient-text-navy">Modern India</span>
              </h2>
              <p className="text-graphite font-body leading-relaxed mb-5">
                VEXARO is a technology-driven courier company headquartered in Vijay Nagar,
                Indore. We deliver with precision, transparency, and genuine care across every pin
                code we serve.
              </p>
              <p className="text-graphite font-body leading-relaxed mb-8">
                From individual parcels to enterprise supply chains, our platform brings real-time
                visibility, seamless integrations, and a 98% delivery success rate that businesses
                across India rely on every day.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold font-heading hover:gap-3 transition-all duration-200"
              >
                Learn our story <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right 4 Feature Cards with Images */}
            <div className="grid grid-cols-2 gap-4">
              {aboutFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-soft-border rounded-card card-hover group overflow-hidden flex flex-col"
                >
                  {item.image && (
                    <div className="w-full aspect-[1708/920] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col">
                    <div
                      className={`w-10 h-10 rounded-lg bg-navy-50 border border-navy/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
                        item.image ? '-mt-10 shadow-md relative z-10 bg-white' : ''
                      }`}
                    >
                      <IconHelper name={item.icon} size={20} className="text-navy" />
                    </div>
                    <h4 className="font-semibold font-heading text-charcoal text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-graphite text-xs font-body leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLETE COURIER SOLUTIONS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange/20 rounded-full mb-4">
              <span className="text-orange text-xs font-medium font-heading uppercase tracking-wider">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3">
              Complete Courier Solutions
            </h2>
            <p className="text-graphite font-body max-w-xl mx-auto">
              From express courier to enterprise freight — every shipping need, one trusted partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.slice(0, 8).map((srv, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Link
                  key={srv.id}
                  to="/services"
                  className="bg-white border border-soft-border p-6 rounded-card card-hover cursor-pointer group flex flex-col block"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300 ${
                      isEven
                        ? 'bg-orange-50 border border-orange/20 group-hover:gradient-orange'
                        : 'bg-navy-50 border border-navy/20 group-hover:gradient-navy'
                    }`}
                  >
                    <IconHelper
                      name={srv.icon}
                      size={20}
                      className={`transition-colors duration-300 ${
                        isEven
                          ? 'text-orange group-hover:text-white'
                          : 'text-navy group-hover:text-white'
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold font-heading text-charcoal mb-2 text-sm">
                    {srv.title}
                  </h3>
                  <p className="text-graphite text-xs font-body leading-relaxed line-clamp-2 mb-3 flex-1">
                    {srv.description}
                  </p>
                  <div
                    className={`text-xs font-medium font-heading ${
                      isEven ? 'text-orange' : 'text-navy'
                    }`}
                  >
                    {srv.timeline}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY VEXARO STANDS APART */}
      <section className="section-padding bg-light-blue">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-soft-border rounded-full mb-4 shadow-card">
              <span className="text-navy text-xs font-medium font-heading uppercase tracking-wider">
                Our Edge
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3">
              Why VEXARO Stands Apart
            </h2>
            <p className="text-graphite font-body max-w-xl mx-auto">
              We don't just deliver parcels — we deliver confidence, speed, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyStandApart.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-card border border-soft-border hover:border-navy/30 card-hover group overflow-hidden flex flex-col"
              >
                {item.image && (
                  <div className="w-full aspect-[1708/920] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      item.color === 'orange'
                        ? 'bg-orange-50 border border-orange/15 group-hover:gradient-orange'
                        : 'bg-navy-50 border border-navy/15 group-hover:gradient-navy'
                    } ${item.image ? '-mt-11 shadow-lg relative z-10 bg-white' : ''}`}
                  >
                    <IconHelper
                      name={item.icon}
                      size={20}
                      className={`transition-colors duration-300 ${
                        item.color === 'orange'
                          ? 'text-orange group-hover:text-white'
                          : 'text-navy group-hover:text-white'
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold font-heading text-charcoal mb-2">{item.title}</h3>
                  <p className="text-graphite text-sm font-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS (SHIPMENT'S JOURNEY) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-50 border border-navy/20 rounded-full mb-4">
              <span className="text-navy text-xs font-medium font-heading uppercase tracking-wider">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3">
              Your Shipment's Journey
            </h2>
          </div>
          <ShipmentJourney isInView={true} />
        </div>
      </section>

      {/* 7. CLIENT STORIES / TESTIMONIALS */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange/20 rounded-full mb-4">
              <span className="text-orange text-xs font-medium font-heading uppercase tracking-wider">
                Client Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal">
              Trusted by India's Best Brands
            </h2>
          </div>
          <TestimonialsSlider />
        </div>
      </section>

      {/* 8. READY TO SHIP SMARTER? (CTA BANNER) */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg,#1A3A8F 0%,#0F2566 48%,#1A3A8F 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:38px_38px]" />
        <div
          aria-hidden="true"
          className="absolute left-0 top-10 h-px w-72 bg-gradient-to-r from-transparent via-orange to-transparent animate-shimmer"
        />
        <div
          aria-hidden="true"
          className="absolute -right-28 -bottom-28 w-72 h-72 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute left-[8%] top-16 h-16 w-16 rounded-full border border-orange/40 shadow-[0_0_50px_rgba(224,96,0,0.35)]"
        />

        <div className="container-custom relative text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full mb-5">
              <Sparkles className="text-orange" size={11} />
              <span className="text-white/75 text-xs font-medium font-heading uppercase tracking-wider">
                Courier Services That Move With You
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
              Ready to Ship Smarter?
            </h2>
            <p className="text-white/70 font-body text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Join 300+ businesses that trust VEXARO. Get a custom quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 gradient-orange text-white font-semibold font-heading rounded-btn shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Get a Free Quote <ArrowRight size={14} />
              </Link>
              <Link
                to="/track"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold font-heading rounded-btn hover:border-orange hover:text-orange transition-all duration-200"
              >
                <Navigation size={14} className="-rotate-45" /> Track Shipment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAST HELP STRIP */}
      <section className="py-12 bg-white border-t border-soft-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-charcoal mb-1">
                Questions? We're here.
              </h3>
              <p className="text-graphite font-body text-sm">
                Reach out anytime — our team responds within 2 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-navy font-semibold font-heading hover:gap-3 transition-all duration-200 whitespace-nowrap text-sm"
            >
              Reach Us <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
