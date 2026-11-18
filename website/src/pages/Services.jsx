import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from '../components/IconHelper';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';
import IconHelper from '../components/IconHelper';
import { servicesData } from '../data/siteData';

export default function Services() {
  useMeta({
    title: 'Services',
    description:
      'VEXARO services: Domestic Courier, Express Delivery, Same-Day, B2B Services, Warehousing, E-commerce Shipping across India.'
  });

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="End-to-end courier solutions for every shipping need — from individual parcels to enterprise freight."
        breadcrumb="Services"
      />

      {/* Services Grid Section */}
      <section className="section-padding bg-white flex-1">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-7">
            {servicesData.map((srv, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={srv.id}
                  className="border border-soft-border rounded-card p-7 bg-white card-hover hover:border-navy/25 group flex flex-col justify-between"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-card flex items-center justify-center shrink-0 shadow-card transition-all duration-300 ${
                        isEven
                          ? 'bg-orange-50 border border-orange/20'
                          : 'bg-navy-50 border border-navy/20'
                      }`}
                    >
                      <IconHelper
                        name={srv.icon}
                        size={22}
                        className={isEven ? 'text-orange' : 'text-navy'}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold font-heading text-charcoal text-xl mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-graphite font-body text-sm leading-relaxed mb-4">
                        {srv.description}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {srv.benefits.map((benefit, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 text-sm font-body text-graphite"
                          >
                            <FaCheckCircle
                              size={12}
                              className={`mt-0.5 shrink-0 ${bIdx % 2 === 0 ? 'text-navy' : 'text-orange'
                                }`}
                            />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between pt-4 border-t border-soft-border">
                        <div>
                          <div className="text-xs text-graphite/60 font-body uppercase tracking-wider mb-0.5">
                            Delivery Time
                          </div>
                          <div
                            className={`font-semibold font-heading text-sm ${isEven ? 'text-orange' : 'text-navy'
                              }`}
                          >
                            {srv.timeline}
                          </div>
                        </div>

                        <Link
                          to="/contact"
                          className={`flex items-center gap-1.5 px-4 py-2.5 text-white text-sm font-semibold font-heading rounded-btn hover:-translate-y-0.5 transition-all duration-200 ${isEven
                            ? 'gradient-orange shadow-orange-sm hover:shadow-orange'
                            : 'gradient-navy shadow-navy-sm hover:shadow-navy'
                            }`}
                        >
                          Get a Quote <FaArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="py-16 bg-light-blue border-t border-soft-border">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-heading text-charcoal mb-3">
            Need a Custom Courier Solution?
          </h2>
          <p className="text-graphite font-body mb-7 max-w-lg mx-auto">
            Our enterprise team specialises in tailored courier contracts for high-volume businesses.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Talk to Our Team <FaArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
