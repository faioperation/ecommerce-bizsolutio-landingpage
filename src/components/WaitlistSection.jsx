import React from 'react';
import './WaitlistSection.css';

const WaitlistSection = () => {
  return (
    <section className="waitlist-section reveal-on-scroll" id="waitlist">
      <div className="waitlist-card-container">
        
        {/* Left: Phone Mockup */}
        <div className="waitlist-visual-new">
          <div className="phone-sales-frame">
            <div className="sales-header">
              <span>&lt; Live Sales</span>
            </div>
            <div className="product-item">
              <div className="product-square"></div>
              <div className="product-info">
                <span className="p-name">Wireless Headphones</span>
                <span className="p-price">Just Sold</span>
              </div>
            </div>
            <div className="product-item">
              <div className="product-square"></div>
              <div className="product-info">
                <span className="p-name">Skincare Set</span>
                <span className="p-price">Just Sold</span>
              </div>
            </div>
            <div className="product-item">
              <div className="product-square"></div>
              <div className="product-info">
                <span className="p-name">Sneakers</span>
                <span className="p-price">Just Sold</span>
              </div>
            </div>
            <div className="sales-glow-card">
              <span className="sales-count">+128 Sale</span>
              <span className="sales-time">in the last 10 minutes</span>
              <div className="sales-chart">
                <div className="bar" style={{height: '40%'}}></div>
                <div className="bar" style={{height: '70%'}}></div>
                <div className="bar" style={{height: '50%'}}></div>
                <div className="bar" style={{height: '90%'}}></div>
                <div className="bar" style={{height: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Main Content */}
        <div className="waitlist-content-new">
          <h2 className="waitlist-title-new">
            The Next Era Of Selling <span className="text-gradient">Starts Live.</span>
          </h2>
          <p className="waitlist-desc-new">Be among the first to experience Vango Live.</p>
          
          <div className="input-pill-wrapper">
            <input type="email" placeholder="Enter your email address" className="pill-input" />
            <button className="pill-btn">
              Join the Waitlist <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          <div className="perks-grid-new">
            <div className="perk-item"><span className="check-circle">✓</span> Early Access</div>
            <div className="perk-item"><span className="check-circle">✓</span> Founding Seller Perks</div>
            <div className="perk-item"><span className="check-circle">✓</span> Priority Support</div>
            <div className="perk-item"><span className="check-circle">✓</span> Lower Fees</div>
          </div>
        </div>

        {/* Right: Social & Spots */}
        <div className="waitlist-right-new">
          <div className="social-proof-mini">
            <div className="avatar-circles">
              <img src="https://i.pravatar.cc/40?u=1" alt="user" />
              <img src="https://i.pravatar.cc/40?u=2" alt="user" />
              <img src="https://i.pravatar.cc/40?u=3" alt="user" />
            </div>
            <div className="social-text-mini">
              <strong>2,438+ people</strong>
              <span>are on the waitlist</span>
            </div>
          </div>

          <div className="spots-card-new">
            <span className="spots-label">Founding Seller Spots</span>
            <div className="spots-row">
              <div className="spots-numbers">
                <span className="current">78</span>
                <span className="total">/ 100</span>
              </div>
              <div className="spots-status">
                <span className="status-label">Remaining</span>
                <span className="crown-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WaitlistSection;
