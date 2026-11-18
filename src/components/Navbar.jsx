import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from './IconHelper';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'glass-panel shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/new-logo.png"
              alt="VEXARO Courier"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ maxWidth: '220px' }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-[0_4px_16px_rgba(26,58,143,0.04)]">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-[15px] font-semibold font-heading rounded-full transition-all duration-300 relative ${
                    isActive ? 'text-navy' : 'text-charcoal hover:text-navy'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="text-[15px] font-bold text-charcoal hover:text-orange transition-colors font-heading"
            >
              Try for Free
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-charcoal text-white text-[15px] font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-navy transition-all duration-300 font-heading"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-orange transition-colors bg-white/60 backdrop-blur-md rounded-full border border-white/80"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[110] bg-white flex flex-col transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-5 border-b border-soft-border/50">
            <img
              src="/new-logo.png"
              alt="VEXARO"
              className="h-9 w-auto object-contain"
              style={{ maxWidth: '160px' }}
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-charcoal hover:text-navy p-2 bg-gray-50 rounded-full"
              aria-label="Close menu"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 gap-2 bg-cream/50 overflow-y-auto">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-4 text-2xl font-bold font-heading transition-colors ${
                  location.pathname === item.path ? 'text-navy' : 'text-charcoal hover:text-navy'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="px-8 pb-12 pt-6 bg-cream/50">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center py-4 bg-charcoal text-white font-bold text-lg rounded-full shadow-lg font-heading hover:bg-navy transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
