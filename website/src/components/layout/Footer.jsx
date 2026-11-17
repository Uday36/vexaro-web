import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Mail, Phone } from 'lucide-react';
import {
  footerQuickLinks,
  footerServicesLinks,
  footerLegalLinks,
  siteConfig
} from '../../data/siteData';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../common/IconHelper';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-soft-border/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-navy/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Top brand & newsletter row */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 pb-16 border-b border-white/10 items-center">
          <div className="max-w-xl">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/new-logo.png"
                alt="VEXARO Courier Solutions"
                className="h-11 w-auto brightness-0 invert object-contain"
                style={{ maxWidth: '220px' }}
              />
            </Link>
            <p className="text-white/70 text-base leading-relaxed font-body">
              {siteConfig.tagline} — Headquartered in Indore, Madhya Pradesh.
              Delivering with speed, transparency, and trust to 19,000+ pin codes.
            </p>
          </div>

          {/* Quick Newsletter / Action card */}
          <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm">
            <h4 className="text-lg font-bold font-heading mb-2 text-white">
              Stay ahead with VEXARO updates
            </h4>
            <p className="text-sm text-white/60 mb-4 font-body">
              Get logistics insights, service updates, and exclusive B2B shipping rates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your business email"
                className="px-4 py-3 bg-white/10 border border-white/15 rounded-full text-white placeholder-white/40 text-sm flex-1 focus:outline-none focus:border-orange transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange hover:bg-orange/90 text-white font-bold text-sm rounded-full transition-all duration-300 font-heading shadow-orange sm:whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10">
          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-bold font-heading uppercase tracking-widest text-orange mb-5">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white text-sm font-body transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-sm font-bold font-heading uppercase tracking-widest text-orange mb-5">
              Services
            </h5>
            <ul className="space-y-3">
              {footerServicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white text-sm font-body transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-sm font-bold font-heading uppercase tracking-widest text-orange mb-5">
              Legal
            </h5>
            <ul className="space-y-3">
              {footerLegalLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-white text-sm font-body transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-sm font-bold font-heading uppercase tracking-widest text-orange mb-5">
              Get in Touch
            </h5>
            <ul className="space-y-4 text-sm text-white/70 font-body">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 font-body">
          <p>© {currentYear} VEXARO Courier Solutions. All rights reserved.</p>

          {/* Social media pills */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon size={15} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange flex items-center justify-center text-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
