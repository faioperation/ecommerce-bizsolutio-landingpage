import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <a href="#home" className="logo-group" style={{ textDecoration: 'none' }} onClick={closeMenu}>
            <div className="v-logo-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 20L20 4" stroke="url(#v-gradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="v-gradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5"/>
                    <stop offset="1" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="brand-name">VANGO</span>
            <div className="live-badge">
              <span className="pulse-dot"></span>
              LIVE
            </div>
        </a>

        <nav className="desktop-nav">
          <a href="#home" className="active">Home</a>
          <a href="#sellers">For Sellers</a>
          <a href="#customers">For Customers</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About Us</a>
        </nav>

        <div className="header-actions">
          <a href="#waitlist" className="join-btn">Join Waitlist &rarr;</a>
          <button className="mobile-menu-btn" aria-label="Menu" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#sellers" onClick={closeMenu}>For Sellers</a>
          <a href="#customers" onClick={closeMenu}>For Customers</a>
          <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#waitlist" className="mobile-join-btn" onClick={closeMenu}>Join Waitlist</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
