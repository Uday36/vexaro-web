import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Truck, ChevronRight } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';
import { legalData } from '../data/siteData';

export default function Legal({ type = 'terms' }) {
  const content = legalData[type] || legalData.resources;

  useMeta({
    title: content.seoTitle,
    description: content.subtitle
  });

  return (
    <>
      <PageHeader
        title={content.title}
        subtitle={content.subtitle}
        breadcrumb={content.breadcrumb}
      />

      <section className="section-padding bg-white flex-1">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            {/* Main Policy / Clause Content */}
            <div className="rounded-card border border-soft-border bg-light-blue p-6 md:p-8">
              <div className="grid gap-4">
                {content.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 rounded-card border border-white/80 bg-white p-4 shadow-card"
                  >
                    <Check
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        idx % 2 === 0 ? 'text-navy' : 'text-orange'
                      }`}
                    />
                    <p className="text-sm leading-relaxed text-graphite font-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Support Box */}
            <aside className="rounded-card border border-soft-border bg-white p-6 shadow-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-navy text-white">
                {type === 'privacy' ? <ShieldCheck size={20} /> : <Truck size={20} />}
              </div>
              <h2 className="font-heading text-xl font-bold text-charcoal mb-2">Need help?</h2>
              <p className="text-sm leading-relaxed text-graphite font-body mb-5">
                Our team can help you choose the right VEXARO service, quote, or shipping workflow.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-navy font-semibold font-heading hover:gap-3 transition-all duration-200 text-sm"
              >
                Reach Us <ChevronRight size={12} />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
