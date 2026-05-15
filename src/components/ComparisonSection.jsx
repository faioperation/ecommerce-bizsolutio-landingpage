import React from 'react';
import './ComparisonSection.css';

const ComparisonSection = () => {
  return (
    <section id="about" className="comparison-section-real reveal-on-scroll">
      <div className="comp-left">
        <span className="usp-label">OUR USP</span>
        <h2 className="comp-title">Not Social Media<br/>With Shopping<br/>Added On.</h2>
        <h3 className="comp-subtitle text-gradient">A Platform Built<br/>Specifically For<br/>Live Commerce.</h3>
      </div>
      
      <div className="comp-right">
        {/* TikTok Live */}
        <div className="comp-card dark-card">
          <div className="card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.909 6.909 0 0 0-1.035-.078 6.322 6.322 0 0 0-6.32 6.32 6.322 6.322 0 0 0 6.32 6.32 6.322 6.322 0 0 0 6.32-6.32V6.697a8.147 8.147 0 0 0 4.773 1.523v-3.41a4.833 4.833 0 0 1-1.035-.124Z"/>
            </svg>
            TikTok Live
          </div>
          <ul className="comp-list cross">
            <li><span>✕</span> Entertainment-first</li>
            <li><span>✕</span> Algorithm dependent</li>
            <li><span>✕</span> Limited seller tools</li>
            <li><span>✕</span> No seller ownership</li>
            <li><span>✕</span> Hard to scale</li>
          </ul>
          <div className="comp-rating red">
            <span className="star active">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>
        
        {/* Instagram Live */}
        <div className="comp-card dark-card">
          <div className="card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram Live
          </div>
          <ul className="comp-list cross">
            <li><span>✕</span> Attention-first</li>
            <li><span>✕</span> Weak commerce tools</li>
            <li><span>✕</span> No real checkout flow</li>
            <li><span>✕</span> No seller ecosystem</li>
            <li><span>✕</span> Hard to grow</li>
          </ul>
          <div className="comp-rating red">
            <span className="star active">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>
        
        {/* Traditional eCommerce */}
        <div className="comp-card dark-card">
          <div className="card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Traditional eCommerce
          </div>
          <ul className="comp-list grey">
            <li><span>○</span> Static and boring</li>
            <li><span>○</span> No real interaction</li>
            <li><span>○</span> Low engagement</li>
            <li><span>○</span> Hard to build trust</li>
            <li><span>○</span> Slow customer journey</li>
          </ul>
          <div className="comp-rating yellow">
            <span className="star active">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
        </div>

        {/* Vango Live */}
        <div className="comp-card highlight-card">
          <div className="card-header vango-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                <path d="M4 4L12 20L20 4" stroke="url(#v-gradient-comp-final)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="v-gradient-comp-final" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5"/>
                    <stop offset="1" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
              </svg>
            Vango Live
          </div>
          <ul className="comp-list check">
            <li><span className="check-icon">✓</span> Commerce-first</li>
            <li><span className="check-icon">✓</span> Tools built for sellers</li>
            <li><span className="check-icon">✓</span> Instant live checkout</li>
            <li><span className="check-icon">✓</span> Own your audience</li>
            <li><span className="check-icon">✓</span> Built to help you scale</li>
          </ul>
          <div className="comp-rating gold">
            <span className="star active">★</span>
            <span className="star active">★</span>
            <span className="star active">★</span>
            <span className="star active">★</span>
            <span className="star active">★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
