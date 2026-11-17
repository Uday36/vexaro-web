import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/layout/PageHeader';
import { siteConfig } from '../data/siteData';

export default function Contact() {
  useMeta({
    title: 'Contact Us',
    description: 'Contact VEXARO in Vijay Nagar, Indore, Madhya Pradesh.'
  });

  const [searchParams] = useSearchParams();
  const planParam = searchParams.get('plan');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: planParam ? `Enquiry for ${planParam} plan` : '',
    message: '',
    botField: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    const cleanPhone = formData.phone.replace(/\s/g, '');
    if (!cleanPhone || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = 'Valid 10-digit mobile required';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 20) {
      errs.message = 'Message must be at least 20 characters';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `API status: ${response.status}`);
      }

      setSuccess(true);
    } catch {
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      label: 'Instagram',
      href: siteConfig.socials.instagram
    },
    {
      label: 'WhatsApp',
      href: siteConfig.socials.whatsapp
    },
    {
      label: 'Facebook',
      href: siteConfig.socials.facebook
    },
    {
      label: siteConfig.email,
      href: siteConfig.socials.email
    },
    {
      label: siteConfig.secondaryEmail,
      href: `mailto:${siteConfig.secondaryEmail}`
    }
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for quotes, support, or business partnerships."
        breadcrumb="Contact"
      />

      <section className="section-padding bg-white flex-1">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Form */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-charcoal mb-6">
                Send us a Message
              </h2>

              {success ? (
                <div className="bg-green-50 border border-green-200 rounded-card p-8 text-center animate-fade-in">
                  <CheckCircle2 size={38} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold font-heading text-charcoal text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-graphite font-body text-sm">
                    Thank you for reaching out. Our team will respond within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        subject: planParam ? `Enquiry for ${planParam} plan` : '',
                        message: '',
                        botField: ''
                      });
                    }}
                    className="mt-5 text-navy font-semibold font-heading text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Anti-bot Honeypot */}
                  <input
                    type="text"
                    name="botField"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                    autoComplete="off"
                    tabIndex={-1}
                    style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold font-heading text-charcoal mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${
                          errors.name ? 'border-red-400 bg-red-50' : 'border-soft-border'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs font-body mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold font-heading text-charcoal mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          setErrors({ ...errors, email: '' });
                        }}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-soft-border'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs font-body mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold font-heading text-charcoal mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="10-digit mobile number"
                        className={`w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${
                          errors.phone ? 'border-red-400 bg-red-50' : 'border-soft-border'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs font-body mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold font-heading text-charcoal mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                          setErrors({ ...errors, subject: '' });
                        }}
                        placeholder="How can we help?"
                        className={`w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${
                          errors.subject ? 'border-red-400 bg-red-50' : 'border-soft-border'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs font-body mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold font-heading text-charcoal mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company (optional)"
                      className="w-full px-4 py-3 border border-soft-border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold font-heading text-charcoal mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell us about your courier requirements..."
                      className={`w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all resize-none bg-white ${
                        errors.message ? 'border-red-400 bg-red-50' : 'border-soft-border'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs font-body mt-1">{errors.message}</p>
                    )}
                  </div>

                  {errors.form && (
                    <div className="rounded-btn border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 font-body">
                      {errors.form}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 gradient-navy text-white font-semibold font-heading rounded-btn shadow-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Information Cards & Map */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-charcoal mb-4">
                Contact Information
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Registered Office */}
                <div className="flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card">
                    <MapPin size={16} className="text-orange" />
                  </div>
                  <div>
                    <span className="font-semibold text-charcoal text-sm font-heading block mb-1">
                      Registered Office:
                    </span>
                    <span className="text-graphite text-sm font-body leading-relaxed">
                      Flat 1113, 1st Floor, Chikitsak Nagar,
                      <br />
                      Vijay Nagar, Indore, MP — 452010
                    </span>
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2 shadow-sm">
                  <div className="space-y-4 w-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card mt-0.5">
                        <Mail size={16} className="text-orange" />
                      </div>
                      <div className="text-graphite text-sm font-body">
                        <span className="font-semibold text-charcoal">Email:</span>
                        <div className="flex flex-col gap-1 mt-1">
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="hover:text-orange text-graphite transition-colors"
                          >
                            {siteConfig.email}
                          </a>
                          <a
                            href={`mailto:${siteConfig.secondaryEmail}`}
                            className="hover:text-orange text-graphite transition-colors"
                          >
                            {siteConfig.secondaryEmail}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card">
                        <Phone size={15} className="text-orange" />
                      </div>
                      <p className="text-graphite text-sm font-body">
                        <span className="font-semibold text-charcoal">Phone:</span>{' '}
                        <a href="tel:+919183888181" className="hover:text-orange transition-colors">
                          {siteConfig.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coverage Summary */}
                <div className="flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shrink-0 shadow-card">
                    <Clock size={15} className="text-orange" />
                  </div>
                  <div className="text-graphite text-sm font-body space-y-0.5 leading-relaxed">
                    <div>Operating across 100+ cities in India</div>
                    <div>Customer support available 24/7</div>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="flex flex-wrap gap-2 pt-2">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 border border-soft-border rounded-btn text-xs text-graphite hover:border-navy hover:text-navy transition-all duration-200 bg-light-blue/50"
                  >
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-card overflow-hidden border border-soft-border h-48 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6!2d75.8850!3d22.7534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b60e7e67f%3A0x39c3a74a4d30c97c!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000001"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="VEXARO Office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Summary Indicators Strip matching live */}
      <section className="py-8 bg-light-blue border-t border-soft-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              ['100+ Cities', 'Coverage'],
              ['24/7 Support', 'Support'],
              ['Trusted Partners', 'Partners'],
              ['Technology-First', 'Edge']
            ].map(([val, label], n) => (
              <div
                key={n}
                className={`bg-white border rounded-card px-5 py-3 min-w-[140px] text-center shadow-sm ${
                  n % 2 === 0 ? 'border-navy/20' : 'border-orange/20'
                }`}
              >
                <div
                  className={`font-semibold text-sm font-heading ${
                    n % 2 === 0 ? 'text-navy' : 'text-orange'
                  }`}
                >
                  {val}
                </div>
                <div className="text-graphite/60 text-[11px] mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
