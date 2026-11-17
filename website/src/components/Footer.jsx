import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import {
  footerQuickLinks,
  footerServicesLinks,
  footerLegalLinks,
  siteConfig
} from '../data/siteData';

// Custom social SVG icons matching live site
function InstagramIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function WhatsAppIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}

function FacebookIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export default function Footer() {
  const socialLinks = [
    {
      icon: <InstagramIcon size={15} />,
      href: siteConfig.socials.instagram,
      label: 'Instagram'
    },
    {
      icon: <WhatsAppIcon size={15} />,
      href: siteConfig.socials.whatsapp,
      label: 'WhatsApp'
    },
    {
      icon: <FacebookIcon size={15} />,
      href: siteConfig.socials.facebook,
      label: 'Facebook'
    },
    {
      icon: <Mail size={14} />,
      href: siteConfig.socials.email,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-charcoal text-white" style={{ marginTop: 'auto' }}>
      {/* Top 3px gradient line */}
      <div className="w-full h-[3px] gradient-duo" />
      <div className="w-full bg-charcoal" style={{ height: '36px' }} />

      <div className="container-custom pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Socials & Legal CIN */}
          <div>
            <div className="mb-5">
              <img
                src="/new-logo.png"
                alt="VEXARO"
                className="h-12 w-auto object-contain"
                style={{ maxWidth: '200px' }}
              />
            </div>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/45 hover:text-orange hover:border-orange transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-2">
              <br />
              CIN: U53200MP2026PTC084168
              <br />
              <br />
              Registration Number: 084168
              <br />
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold font-heading text-[11px] uppercase tracking-[0.15em] text-orange mb-6 pl-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/50 hover:text-orange text-sm font-body transition-colors duration-200 relative pl-4 group flex items-center"
                  >
                    <ChevronRight
                      size={9}
                      className="absolute left-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-semibold font-heading text-[11px] uppercase tracking-[0.15em] text-orange mb-6 pl-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServicesLinks.map(([name, path]) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-white/50 hover:text-orange text-sm font-body transition-colors duration-200 relative pl-4 group flex items-center"
                  >
                    <ChevronRight
                      size={9}
                      className="absolute left-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange"
                    />
                    {name}
                  </Link>
                </li>
              ))}
              <li className="h-3" aria-hidden="true" />
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-semibold font-heading text-[11px] uppercase tracking-[0.15em] text-orange mb-6 pl-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm font-body text-white/50">
                <MapPin className="text-orange mt-0.5 flex-shrink-0" size={13} />
                <span className="leading-relaxed">
                  <span className="whitespace-nowrap">Flat 1113, 1st Floor, Chikitsak Nagar,</span>
                  <br />
                  Vijay Nagar, Indore, MP — 452010
                </span>
              </li>
              <li>
                <div className="space-y-2 text-sm font-body text-white/50">
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="mailto:info@vexarocouriersolutions.com"
                      className="flex items-center gap-2 hover:text-orange transition-colors"
                    >
                      <Mail className="text-orange flex-shrink-0" size={12} />
                      <span>Email:</span>
                      <span className="text-white/70">info@vexarocouriersolutions.com</span>
                    </a>
                    <a
                      href="mailto:vexarocouriersolution@gmail.com"
                      className="flex items-center gap-2 hover:text-orange transition-colors"
                    >
                      <div className="w-3 flex-shrink-0" />
                      <span className="invisible select-none">Email:</span>
                      <span className="text-white/70">vexarocouriersolution@gmail.com</span>
                    </a>
                  </div>
                  <a
                    href="tel:+919183888181"
                    className="flex items-center gap-2 hover:text-orange transition-colors"
                  >
                    <Phone className="text-orange flex-shrink-0" size={12} />
                    <span>Phone:</span>
                    <span className="text-white/70">+91 - 9183888181</span>
                  </a>
                </div>
              </li>
              {footerLegalLinks.map(([title, path]) => (
                <li key={title}>
                  <Link
                    to={path}
                    className="flex items-start relative pl-4 gap-3 text-sm font-body text-white/50 hover:text-orange transition-colors"
                  >
                    <ChevronRight className="absolute left-0 text-orange mt-1" size={9} />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/75 text-xs font-body">
            © 2026 VEXARO Courier Solution Private Limited. All Rights Reserved.
          </p>
          <p className="text-white/90 text-xs font-body">
            Powered by{' '}
            <a
              href="https://www.codentrixx.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 underline"
            >
              Codentrixx Innovation Solutions Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
