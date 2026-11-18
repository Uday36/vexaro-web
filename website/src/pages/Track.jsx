import React, { useState } from 'react';
import { FaSearch, FaCheckCircle, FaMapMarkerAlt } from '../components/IconHelper';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';
import { trackingDatabase, statusBadges } from '../data/siteData';

export default function Track() {
  useMeta({
    title: 'Track Shipment',
    description:
      'Track your VEXARO shipment live. Enter your AWB number for real-time status.'
  });

  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const demoPresets = ['VX2024001', 'VX2024002', 'VX2024003'];

  const handleTrack = (awbToTrack) => {
    const raw = (awbToTrack || query).trim().toUpperCase();
    if (!raw) {
      setError('Please enter a tracking number.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    setTimeout(() => {
      const match = trackingDatabase[raw];
      if (match) {
        setResult(match);
      } else {
        setError('Tracking number not found. Try: VX2024001, VX2024002, or VX2024003');
      }
      setLoading(false);
    }, 800);
  };

  const handleDemo = (awb) => {
    setQuery(awb);
    setError('');
    handleTrack(awb);
  };

  return (
    <>
      <PageHeader
        title="Track Your Shipment"
        subtitle="Enter your AWB number to get real-time status on your delivery."
        breadcrumb="Track Shipment"
      />

      <section className="section-padding bg-white flex-1" style={{ minHeight: '60vh' }}>
        <div className="container-custom max-w-2xl">
          {/* Tracking Input Card */}
          <div className="bg-light-blue border border-soft-border rounded-card p-6 mb-7 shadow-sm">
            <label className="block text-sm font-semibold font-heading text-charcoal mb-2">
              AWB / Tracking Number
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                placeholder="e.g. VX2024001"
                className="flex-1 px-4 py-3 border border-soft-border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white"
              />
              <button
                onClick={() => handleTrack()}
                disabled={loading}
                className="px-6 py-3 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy-sm hover:shadow-navy hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <FaSearch size={13} />
                )}
                <span>Track</span>
              </button>
            </div>

            {/* Demo numbers */}
            <div className="flex flex-wrap gap-2 mt-3 items-center">
              <span className="text-xs text-graphite/60 font-body">Try demo:</span>
              {demoPresets.map((demo) => (
                <button
                  key={demo}
                  onClick={() => handleDemo(demo)}
                  className="text-xs text-navy font-semibold font-heading hover:text-orange transition-colors px-2 py-0.5 rounded bg-white border border-soft-border"
                >
                  {demo}
                </button>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-card px-5 py-4 text-sm font-body mb-6">
              {error}
            </div>
          )}

          {/* Results Box */}
          {result && (
            <div className="space-y-6">
              {/* Status Header Card */}
              <div className="bg-white border border-soft-border rounded-card p-6 shadow-card">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-soft-border/60">
                  <div>
                    <span className="text-xs text-graphite/60 font-body uppercase tracking-wider block mb-1">
                      AWB Number
                    </span>
                    <span className="text-xl font-bold font-heading text-charcoal">
                      {result.awb}
                    </span>
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-heading font-semibold ${
                      statusBadges[result.status]?.bg || 'bg-light-blue text-navy'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        statusBadges[result.status]?.dot || 'bg-navy'
                      } animate-pulse`}
                    />
                    {result.status}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div>
                    <div className="text-graphite/60 text-xs font-body mb-1">Origin</div>
                    <div className="text-charcoal font-semibold text-sm font-body">
                      {result.origin}
                    </div>
                  </div>
                  <div>
                    <div className="text-graphite/60 text-xs font-body mb-1">Destination</div>
                    <div className="text-charcoal font-semibold text-sm font-body">
                      {result.destination}
                    </div>
                  </div>
                  <div>
                    <div className="text-graphite/60 text-xs font-body mb-1">Service</div>
                    <div className="text-charcoal font-semibold text-sm font-body">
                      {result.service}
                    </div>
                  </div>
                  <div>
                    <div className="text-graphite/60 text-xs font-body mb-1">Weight</div>
                    <div className="text-charcoal font-semibold text-sm font-body">
                      {result.weight}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-soft-border/60 flex items-center justify-between text-xs font-body">
                  <span className="text-graphite">Estimated Timeline:</span>
                  <span className="font-semibold text-navy">{result.estimatedDelivery}</span>
                </div>
              </div>

              {/* Step Timeline */}
              <div className="bg-white border border-soft-border rounded-card p-6 shadow-sm">
                <h3 className="font-bold font-heading text-charcoal mb-6">
                  Shipment Timeline
                </h3>
                <div>
                  {result.timeline.map((step, idx) => (
                    <div key={idx} className="flex gap-4 relative">
                      {/* Vertical line connecting nodes */}
                      {idx < result.timeline.length - 1 && (
                        <div
                          className={`absolute left-4 top-8 w-0.5 h-7 ${
                            step.done ? 'bg-navy/30' : 'bg-soft-border'
                          }`}
                        />
                      )}

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 mt-0.5 ${
                          step.done ? 'gradient-orange shadow-orange-sm' : 'bg-cream border-2 border-soft-border'
                        }`}
                      >
                        {step.done ? (
                          <FaCheckCircle size={12} className="text-white" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-graphite/20" />
                        )}
                      </div>

                      <div className="pb-6 flex-1">
                        <div
                          className={`font-semibold font-heading text-sm ${
                            step.done ? 'text-charcoal' : 'text-graphite/40'
                          }`}
                        >
                          {step.step}
                        </div>
                        {step.done ? (
                          <>
                            <div className="text-graphite text-xs font-body">{step.date}</div>
                            {step.location && (
                              <div className="text-graphite/60 text-xs font-body flex items-center gap-1 mt-0.5">
                                <FaMapMarkerAlt size={9} className="text-orange" />
                                {step.location}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="text-graphite/35 text-xs font-body">Pending</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
