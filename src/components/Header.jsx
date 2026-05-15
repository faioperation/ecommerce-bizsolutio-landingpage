import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-group">
          <div className="v-icon">V</div>
          <span className="brand-name">VANGO</span>
          <div className="live-badge">
            <span className="pulse-dot"></span>
            LIVE
          </div>
        </div>

        <nav className="desktop-nav">
          <a href="#home" className="active">Home</a>
          <a href="#sellers">For Sellers</a>
          <a href="#customers">For Customers</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About Us</a>
        </nav>

        <div className="header-actions">
          <a href="#waitlist" className="join-btn">Join Waitlist &rarr;</a>
          <button className="mobile-menu-btn" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
