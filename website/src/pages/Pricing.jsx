import React from 'react';
import { Check, ShieldCheck, ArrowRight, Zap } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';
import { pricingPlans } from '../data/siteData';

export default function Pricing() {
  useMeta({
    title: 'Pricing Plans',
    description:
      'Explore VEXARO Courier Solution pricing plans. We offer Gold, Platinum, and Partial payment options with the lowest charges.'
  });

  const handlePay = (plan) => {
    if (plan.link) {
      window.location.assign(plan.link);
    }
  };

  return (
    <>
      <PageHeader
        title="Transparent Pricing"
        subtitle="Choose the best courier plan for your enterprise with zero hidden costs."
        breadcrumb="Pricing"
      />

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[400px] bg-[linear-gradient(to_bottom,#1A3A8F05_0%,transparent_100%)] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-heading text-charcoal mb-4 tracking-tight">
              Simple, <span className="text-orange">Predictable</span> Pricing
            </h2>
            <p className="text-graphite font-body text-lg">
              Unlock enterprise-grade courier services at the lowest market charges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative flex flex-col bg-white rounded-2xl border-2 ${plan.theme} p-8 card-hover shadow-card`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 gradient-orange text-white text-xs font-bold font-heading rounded-full shadow-orange uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bold font-heading text-xl text-charcoal mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl md:text-4xl font-black font-heading text-charcoal">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-graphite/70 text-xs font-body">{plan.gst}</p>
                </div>

                <div className="h-px bg-soft-border mb-6" />

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-charcoal font-body">
                      <div className="w-5 h-5 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-navy" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePay(plan)}
                  className={`w-full py-3.5 font-bold font-heading rounded-btn transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Guarantee / Security info strip */}
          <div className="mt-16 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 text-graphite font-body text-xs md:text-sm">
              <ShieldCheck size={18} className="text-orange" />
              <span>
                All transactions processed securely via Razorpay with instant digital invoice.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
