import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShoppingBag, Briefcase, Cpu, Check, ChevronRight } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';
import { partnerCategories, partnersList } from '../data/siteData';

export default function Partners() {
  useMeta({
    title: 'Partners',
    description:
      "VEXARO's partner ecosystem — courier, e-commerce, and technology partners across India."
  });

  const getCategoryIcon = (iconName, color) => {
    const isOrange = color === 'orange';
    const cls = isOrange ? 'text-orange' : 'text-navy';
    switch (iconName) {
      case 'truck':
        return <Truck size={22} className={cls} />;
      case 'shoppingBag':
        return <ShoppingBag size={22} className={cls} />;
      case 'briefcase':
        return <Briefcase size={22} className={cls} />;
      case 'cpu':
        return <Cpu size={22} className={cls} />;
      default:
        return <Truck size={22} className={cls} />;
    }
  };

  return (
    <>
      <PageHeader
        title="Our Partners"
        subtitle="Building India's most connected courier ecosystem — together with our trusted partners."
        breadcrumb="Partners"
      />

      <section className="section-padding bg-white flex-1">
        <div className="container-custom">
          {/* 1. Partnership Categories */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3">
              Partnership Categories
            </h2>
            <p className="text-graphite font-body max-w-xl mx-auto">
              VEXARO works with a diverse ecosystem of partners to deliver seamless courier services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {partnerCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-soft-border rounded-card p-6 card-hover group text-center transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm ${
                    cat.color === 'orange'
                      ? 'bg-orange-50 border border-orange/15'
                      : 'bg-navy-50 border border-navy/15'
                  }`}
                >
                  {getCategoryIcon(cat.icon, cat.color)}
                </div>
                <h3 className="font-bold font-heading text-charcoal mb-2">{cat.title}</h3>
                <p className="text-graphite text-sm font-body leading-relaxed">{cat.text}</p>
              </div>
            ))}
          </div>

          {/* 2. Trusted By */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-heading text-charcoal mb-2">Trusted By</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {partnersList.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white border border-soft-border rounded-card p-6 card-hover flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 w-full min-h-full break-words"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full flex-1 min-w-0">
                  <div className="font-bold font-heading text-charcoal text-base md:text-lg">
                    {partner.name}
                  </div>
                  <div
                    className={`text-xs md:text-sm font-heading font-medium mb-1 ${
                      idx % 2 === 0 ? 'text-navy' : 'text-orange'
                    }`}
                  >
                    {partner.cat}
                  </div>
                  <p className="text-graphite text-xs md:text-sm font-body leading-relaxed break-words">
                    {partner.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Become a VEXARO Partner (Two-column layout matching live) */}
      <section className="section-padding bg-light-blue border-t border-soft-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-soft-border rounded-full mb-4 shadow-card">
                <span className="text-navy text-xs font-medium font-heading uppercase tracking-wider">
                  Join Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-5">
                Become a<br />
                <span className="gradient-text-navy">VEXARO Partner</span>
              </h2>
              <p className="text-graphite font-body leading-relaxed mb-6">
                Whether you're a last-mile delivery agent, a fleet operator, an e-commerce
                business, or a technology company — there's a partnership model built for you at
                VEXARO.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Attractive revenue sharing model',
                  'Dedicated partner support team',
                  'Real-time dashboard and analytics',
                  'Co-branded marketing support'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-charcoal text-sm font-body"
                  >
                    <Check
                      className={idx % 2 === 0 ? 'text-navy' : 'text-orange'}
                      size={14}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 gradient-orange text-white font-semibold font-heading rounded-btn shadow-orange hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Become a Partner <ChevronRight size={14} />
              </Link>
            </div>

            {/* Right 4 Stat Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '100+', l: 'Cities' },
                { v: '300+', l: 'Clients' },
                { v: '2.5K+', l: 'Daily Shipments' },
                { v: '98%', l: 'Success Rate' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-card p-6 text-center ${
                    idx % 2 === 0 ? 'gradient-navy' : 'gradient-orange'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-white mb-1 break-words">
                    {item.v}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm font-body">{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
