import React, { useState, useEffect } from 'react';
import logo from '../../assets/vango-logo.png';
import icon from '../../assets/vango-icon.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    document.body.style.overflow = !isMenuOpen
      ? 'hidden'
      : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
          ? 'bg-black/85 backdrop-blur-2xl border-b border-white/5 shadow-2xl py-3 sm:py-4 md:py-5'
          : 'bg-transparent py-4 sm:py-5 md:py-6'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 sm:gap-3 shrink-0"
        >
          <div className="flex items-center">

            <img
              src={icon}
              alt="Vango Icon"
              className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-500"
            />

            <img
              src={logo}
              alt="VANGO Logo"
              className="h-5 sm:h-6 md:h-7 lg:h-9 w-auto object-contain mt-1 sm:mt-2 md:mt-3"
            />
          </div>

          {/* Live Badge */}
          <div className="bg-red-500 border border-red-500/20 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[0.62rem] sm:text-[0.72rem] md:text-[0.82rem] font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.3)]">

            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_#fff]"></span>

            <span>LIVE</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {[
            'Home',
            'For Sellers',
            'For Customers',
            'How It Works',
            'About Us',
          ].map((item) => (
            <a
              key={item}
              href={`#${item
                .toLowerCase()
                .replace(/\s+/g, '-')}`}
              className="text-[0.9rem] xl:text-[1rem] font-bold text-white/60 hover:text-white transition-all duration-300 hover:scale-105"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">

          {/* Waitlist Button */}
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center px-5 md:px-7 lg:px-8 py-2.5 md:py-3.5 rounded-full lg:rounded-xl bg-brand-gradient text-white text-sm md:text-[0.95rem] lg:text-[1rem] font-black shadow-xl shadow-brand-purple/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Join Waitlist

            <span className="ml-2 hidden md:inline">
              &rarr;
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="lg:hidden p-2.5 sm:p-3 text-white bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black z-[90] flex items-center justify-center transition-all duration-500 touch-none ${isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
          }`}
      >

        <nav className="flex flex-col items-center gap-7 sm:gap-8 w-full max-w-sm px-8">

          {[
            'Home',
            'For Sellers',
            'For Customers',
            'How It Works',
            'About Us',
          ].map((item, idx) => (
            <a
              key={item}
              href={`#${item
                .toLowerCase()
                .replace(/\s+/g, '-')}`}
              onClick={closeMenu}
              className={`text-2xl sm:text-3xl md:text-4xl font-black text-white/90 hover:text-white transition-all duration-500 transform ${isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                }`}
              style={{
                transitionDelay: `${idx * 80}ms`,
              }}
            >
              {item}
            </a>
          ))}

          <a
            href="#waitlist"
            onClick={closeMenu}
            className={`mt-8 w-full text-center py-4 sm:py-5 rounded-2xl bg-brand-gradient text-white font-black text-lg sm:text-xl shadow-2xl shadow-brand-purple/30 transition-all duration-700 transform ${isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
              }`}
            style={{
              transitionDelay: '400ms',
            }}
          >
            Join the Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;