import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaDesktop,
  FaCheckCircle,
  FaInstagram,
  FaWhatsapp,
  FaFacebook
} from '../components/IconHelper';
import { useMeta } from '../hooks/useMeta';
import PageHeader from '../components/PageHeader';

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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          botField: formData.botField,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || `Contact API returned ${response.status}`);
      }

      setSuccess(true);
    } catch (err) {
      setErrors({
        form:
          err?.message ||
          'We could not send your message right now. Please try again in a moment or email info@vexarocouriersolutions.com / vexarocouriersolution@gmail.com directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field, label, type = 'text', placeholder = '') => (
    <div>
      <label className="block text-sm font-semibold font-heading text-charcoal mb-1.5">
        {label}
      </label>
      <input
        type={type}
        value={formData[field]}
        onChange={(e) => {
          setFormData({ ...formData, [field]: e.target.value });
          setErrors({ ...errors, [field]: '' });
        }}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-btn font-body text-sm focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/15 transition-all bg-white ${
          errors[field] ? 'border-red-400 bg-red-50' : 'border-soft-border'
        }`}
      />
      {errors[field] && (
        <p className="text-red-500 text-xs font-body mt-1">{errors[field]}</p>
      )}
    </div>
  );

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
                <div className="bg-green-50 border border-green-200 rounded-card p-8 text-center">
                  <FaCheckCircle size={38} className="text-green-500 mx-auto mb-4" />
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
                    {renderField('name', 'Full Name', 'text', 'Your full name')}
                    {renderField('email', 'Email Address', 'email', 'you@company.com')}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField('phone', 'Phone Number', 'tel', '10-digit mobile number')}
                    {renderField('subject', 'Subject', 'text', 'How can we help?')}
                  </div>

                  <div>
                    {renderField('company', 'Company Name', 'text', 'Company (optional)')}
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
                      <p className="text-red-500 text-xs font-body mt-1">
                        {errors.message}
                      </p>
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
                {/* 1. Registered Office */}
                <div className="flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2">
                  <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center flex-shrink-0 shadow-card">
                    <FaMapMarkerAlt size={16} className="text-orange" />
                  </div>
                  <div>
                    <span className="text-graphite text-sm font-body leading-relaxed">
                      Flat 1113, 1st Floor, Chikitsak Nagar,
                      <br />
                      Vijay Nagar, Indore, MP — 452010
                    </span>
                  </div>
                </div>

                {/* 2. Email & Phone */}
                <div className="flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center flex-shrink-0 shadow-card mt-0.5">
                        <FaEnvelope size={16} className="text-orange" />
                      </div>
                      <div className="text-graphite text-sm font-body">
                        <span className="font-semibold text-charcoal">Email:</span>
                        <div className="flex flex-col gap-1 mt-1">
                          <a
                            href="mailto:info@vexarocouriersolutions.com"
                            className="hover:text-orange text-graphite transition-colors"
                          >
                            info@vexarocouriersolutions.com
                          </a>
                          <a
                            href="mailto:vexarocouriersolution@gmail.com"
                            className="hover:text-orange text-graphite transition-colors"
                          >
                            vexarocouriersolution@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center shadow-card">
                        <FaPhoneAlt size={15} className="text-orange" />
                      </div>
                      <p className="text-graphite text-sm font-body">
                        <span className="font-semibold text-charcoal">Phone:</span>{' '}
                        +91-9183888181
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. About */}
                <div className="flex gap-4 p-4 bg-light-blue border border-soft-border rounded-card sm:col-span-2">
                  <div className="w-10 h-10 rounded-lg bg-white border border-soft-border flex items-center justify-center flex-shrink-0 shadow-card">
                    <FaDesktop size={15} className="text-orange" />
                  </div>
                  <div>
                    <div className="text-graphite text-sm font-body space-y-0.5 leading-relaxed">
                      <div>Operating across 100+ cities in India</div>
                      <div>Customer support available 24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  {
                    icon: <FaInstagram size={15} />,
                    href: 'https://www.instagram.com/vexaro_courier1?igsh=c2ZtNmFqZTFqODNi&utm_source=qr',
                    label: 'Instagram'
                  },
                  {
                    icon: <FaWhatsapp size={15} />,
                    href: 'https://wa.me/919183888181',
                    label: 'WhatsApp'
                  },
                  {
                    icon: <FaFacebook size={15} />,
                    href: 'https://www.facebook.com/people/Vexaro-Courier-Solution-Pvt-Ltd/61591609943588/',
                    label: 'Facebook'
                  },
                  {
                    icon: <FaEnvelope size={14} />,
                    href: 'mailto:info@vexarocouriersolutions.com',
                    label: 'info@vexarocouriersolutions.com'
                  },
                  {
                    icon: <FaEnvelope size={14} />,
                    href: 'mailto:vexarocouriersolution@gmail.com',
                    label: 'vexarocouriersolution@gmail.com'
                  }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-soft-border rounded-btn text-sm text-graphite hover:border-navy hover:text-navy transition-all duration-200 bg-light-blue/50"
                  >
                    {item.icon} {item.label}
                  </a>
                ))}
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-card overflow-hidden border border-soft-border h-48">
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

      {/* Bottom Summary Indicators Strip */}
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
                className={`bg-white border rounded-card px-5 py-3 min-w-[140px] text-center ${
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
