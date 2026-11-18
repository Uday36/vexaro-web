import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTruck,
  FaShoppingCart,
  FaGlobeAmericas,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight
} from '../components/IconHelper';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';
import { partnerCategories, partnersList } from '../data/siteData';

function Partners() {
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
        return <FaTruck size={22} className={cls} />;
      case 'shoppingBag':
      case 'shoppingCart':
        return <FaShoppingCart size={22} className={cls} />;
      case 'briefcase':
      case 'globe':
        return <FaGlobeAmericas size={22} className={cls} />;
      case 'cpu':
      case 'handshake':
        return <FaHandshake size={22} className={cls} />;
      default:
        return <FaTruck size={22} className={cls} />;
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
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm ${cat.color === 'orange'
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

          {/* 2. Trusted By Grid */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-heading text-charcoal mb-2">Trusted By</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {partnersList.map((partner, idx) => (
              <div
                key={idx}
                className="border border-soft-border rounded-card p-6 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-bold text-lg text-charcoal">
                      {partner.name}
                    </span>
                    <span className="text-[11px] font-heading font-medium px-2.5 py-1 rounded-full bg-light-blue text-navy">
                      {partner.cat}
                    </span>
                  </div>
                  <p className="text-graphite text-sm font-body mb-6">{partner.desc}</p>
                </div>
                <div className="border-t border-soft-border pt-4 flex items-center justify-between">
                  <span className="text-xs text-graphite/60 font-body">Integration Status</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 font-heading">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live & Active
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Become a Partner CTA */}
          <div className="bg-light-blue border border-soft-border rounded-card p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange/20 rounded-full mb-4">
                <span className="text-orange text-xs font-medium font-heading uppercase tracking-wider">
                  Join the Network
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-5">
                Become a<br />
                <span className="gradient-text-navy">VEXARO Partner</span>
              </h2>
              <p className="text-graphite font-body leading-relaxed mb-6">
                Whether you're a last-mile delivery agent, a fleet operator, an e-commerce business,
                or a technology company — there's a partnership model built for you at VEXARO.
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
                    <FaCheckCircle
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
                Become a Partner <FaArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '100+', l: 'Cities' },
                { v: '300+', l: 'Clients' },
                { v: '2.5K+', l: 'Daily Shipments' },
                { v: '98%', l: 'Success Rate' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`rounded-card p-6 text-center ${idx % 2 === 0 ? 'gradient-navy' : 'gradient-orange'
                    }`}
                >
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-white mb-1 break-words">
                    {stat.v}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm font-body">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Partners };
export default Partners;
