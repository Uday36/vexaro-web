import React, { useState } from 'react';
import { Search, MapPin, Check, Clock, AlertCircle } from 'lucide-react';
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
                  <Search size={14} />
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

          {/* Error Alert */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-card px-5 py-4 text-sm font-body mb-6 flex items-center gap-2 animate-fade-in">
              <AlertCircle size={16} className="text-red-500 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Result Presentation Card */}
          {result && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-light-blue border border-soft-border rounded-card p-6 shadow-card">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-graphite/60 text-xs font-body mb-1">Tracking Number</div>
                    <div className="text-charcoal font-bold font-heading text-xl">{result.awb}</div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full border text-sm font-semibold font-heading ${
                      statusBadges[result.status]?.bg
                    } ${statusBadges[result.status]?.color}`}
                  >
                    {statusBadges[result.status]?.label}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 pt-5 border-t border-soft-border">
                  <div>
                    <div className="text-graphite/60 text-xs font-body mb-1">Origin</div>
                    <div className="text-charcoal font-semibold text-sm font-body flex items-center gap-1">
                      <MapPin size={12} className="text-navy" /> {result.origin}
                    </div>
                  </div>
                  <div>
                    <div className="text-graphite/60 text-xs font-body mb-1">Destination</div>
                    <div className="text-charcoal font-semibold text-sm font-body flex items-center gap-1">
                      <MapPin size={12} className="text-orange" /> {result.destination}
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
                <h3 className="font-bold font-heading text-charcoal text-base mb-6">
                  Shipment Activity
                </h3>
                <div className="space-y-6">
                  {result.timeline.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 relative">
                      {/* Vertical line connecting nodes */}
                      {idx !== result.timeline.length - 1 && (
                        <div
                          className={`absolute left-3.5 top-7 bottom-0 w-0.5 ${
                            step.done ? 'bg-navy' : 'bg-soft-border'
                          }`}
                        />
                      )}

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 relative z-10 ${
                          step.done ? 'gradient-navy text-white shadow-sm' : 'bg-gray-100 text-gray-400 border border-soft-border'
                        }`}
                      >
                        {step.done ? <Check size={14} /> : <Clock size={12} />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-baseline justify-between flex-wrap">
                          <h4
                            className={`font-heading text-sm font-bold ${
                              step.done ? 'text-charcoal' : 'text-graphite/50'
                            }`}
                          >
                            {step.step}
                          </h4>
                          <span className="text-xs text-graphite/60 font-body">{step.date}</span>
                        </div>
                        {step.location && (
                          <p className="text-xs text-graphite font-body mt-0.5 flex items-center gap-1">
                            <MapPin size={11} className="text-orange" /> {step.location}
                          </p>
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
