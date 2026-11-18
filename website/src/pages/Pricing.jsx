import React from 'react';
import { FaStar, FaCheckCircle } from '../components/IconHelper';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';

export default function Pricing() {
  useMeta({
    title: 'Pricing Plans',
    description:
      'Explore VEXARO Courier Solution pricing plans. We offer Gold, Platinum, and Partial payment options with the lowest charges.'
  });

  const fixedAmounts = { Gold: 25960, Platinum: 36580 };

  const getRazorpayUrl = (amount) => {
    const trimmed = String(amount).trim();
    if (!/^\d+$/.test(trimmed)) return null;
    const num = Number(trimmed);
    return !Number.isFinite(num) || num <= 0
      ? null
      : `https://pages.razorpay.com/pl_T9M4P1xtR0lUnn/view?amount=${num}`;
  };

  const handlePay = (plan) => {
    const targetUrl =
      plan.name === 'Partial Amount'
        ? 'https://rzp.io/rzp/6XcH8YQj'
        : getRazorpayUrl(fixedAmounts[plan.name]);
    if (targetUrl) {
      window.location.assign(targetUrl);
    }
  };

  const plans = [
    {
      name: 'Gold',
      price: 'Rs.25,960',
      gst: '(incl. 18% GST)',
      popular: true,
      features: ['Courier solution', 'Lowest charges'],
      buttonText: 'Pay Now',
      theme: 'border-orange',
      bg: 'bg-orange-50',
      buttonClass: 'gradient-orange text-white'
    },
    {
      name: 'Platinum',
      price: 'Rs.36,580',
      gst: '(incl. 18% GST)',
      popular: false,
      features: ['Courier solution', 'Advanced Tracking', 'Priority Support', 'Lowest charges'],
      buttonText: 'Pay Now',
      theme: 'border-navy',
      bg: 'bg-light-blue',
      buttonClass: 'gradient-navy text-white'
    },
    {
      name: 'Partial Amount',
      price: 'Custom',
      gst: 'Use this method if you want to pay a partial amount.',
      popular: false,
      features: ['Courier solution', 'Branding softcopy', 'Lowest charges'],
      buttonText: 'Pay Now',
      theme: 'border-soft-border',
      bg: 'bg-gray-50',
      buttonClass: 'bg-white text-charcoal border-2 border-soft-border hover:border-charcoal'
    }
  ];

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
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col bg-white rounded-2xl border-2 ${plan.theme} p-8 shadow-soft transition-all duration-300 hover:-translate-y-2`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-orange text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-orange flex items-center gap-1.5">
                      <FaStar size={12} className="text-white" /> Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-4 rounded-xl ${plan.bg} mb-6 text-center`}>
                  <h3 className="text-xl font-bold font-heading text-charcoal mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-black font-heading text-charcoal">
                    {plan.price}
                  </div>
                  <div className="text-xs text-graphite font-medium mt-1">
                    {plan.gst}
                  </div>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                      <span className="text-graphite font-body text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handlePay(plan)}
                  className={`block text-center w-full py-3.5 rounded-btn font-bold font-heading transition-all duration-200 ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
