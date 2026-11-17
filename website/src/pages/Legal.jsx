import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Mail, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';
import { legalData, siteConfig } from '../data/siteData';

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
            <div className="rounded-card border border-soft-border bg-light-blue p-6 md:p-8 shadow-sm">
              <div className="grid gap-4">
                {content.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 rounded-card border border-white/80 bg-white p-4 shadow-card items-start"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        idx % 2 === 0 ? 'bg-navy-50 text-navy' : 'bg-orange-50 text-orange'
                      }`}
                    >
                      <Check size={14} />
                    </div>
                    <p className="text-graphite font-body text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Support Box */}
            <div className="rounded-card border border-soft-border bg-white p-6 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-navy font-bold font-heading text-lg">
                <HelpCircle size={20} className="text-orange" />
                <h3>Need help?</h3>
              </div>
              <p className="text-graphite text-xs font-body leading-relaxed">
                Our support team is available to assist with service details, invoicing, and
                corporate agreements.
              </p>
              <div className="h-px bg-soft-border" />
              <div className="space-y-2 text-xs font-body text-graphite">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-orange transition-colors"
                >
                  <Mail size={13} className="text-orange shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 hover:text-orange transition-colors"
                >
                  <Phone size={13} className="text-orange shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
              <Link
                to="/contact"
                className="block text-center w-full py-2.5 gradient-navy text-white text-xs font-semibold font-heading rounded-btn shadow-navy-sm hover:shadow-navy transition-all duration-200 mt-4"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
