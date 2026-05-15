import React from 'react';
import './SplitSection.css';

const SplitSection = () => {
  const sellerFeatures = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>, title: 'Live Selling Tools', desc: 'Engage, showcase and sell in real time.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/><path d="m13 10 2 2-4 4"/></svg>, title: 'Instant Checkout', desc: 'Viewers can buy without ever leaving the stream.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/><path d="M12 8v4"/><path d="M16 10h-8"/></svg>, title: 'Product Drops', desc: 'Launch limited drops and create urgency.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>, title: 'Vouchers & Offers', desc: 'Boost sales with coupons, bundles and rewards.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>, title: 'Analytics Dashboard', desc: 'Track performance and optimize your results.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, title: 'Fan Clubs', desc: 'Build a loyal community that keeps coming back.' },
  ];

  const customerFeatures = [
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h6"/></svg>, title: 'Live Interaction', desc: 'Ask questions and get real-time answers.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, title: 'Exclusive Deals', desc: 'Live-only offers, flash sales and special vouchers.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>, title: 'Trusted Sellers', desc: 'Verified sellers and quality you can trust.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8z"/></svg>, title: 'Entertainment + Shopping', desc: 'Fun, engaging and worth your time.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, title: 'Easy & Secure', desc: 'One-tap checkout with safe payments.' },
    { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>, title: 'Never Miss Out', desc: 'Follow your favorites and get notified live.' },
  ];

  return (
    <section className="split-section-real reveal-on-scroll">
      <div className="split-container">

        <div id="sellers" className="split-card-side seller-side">
          <div className="badge purple-badge">FOR SELLERS</div>
          <h2 className="side-title">Powerful Tools.<br />More Sales. Real Growth.</h2>
          <p className="side-desc">Everything you need to run, grow and scale your live selling business.</p>

          <div className="features-grid">
            {sellerFeatures.map((f, i) => (
              <div className="grid-item" key={i}>
                <div className="icon-wrapper purple">{f.icon}</div>
                <h4 className="item-title">{f.title}</h4>
                <p className="item-desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <a href="#" className="explore-link purple-link">Explore Seller Benefits &rarr;</a>
        </div>

        <div className="center-vs-logo">
          <div className="v-logo-glowing">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L12 20L20 4" stroke="url(#v-gradient-split)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="v-gradient-split" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div id="customers" className="split-card-side customer-side">
          <div className="badge pink-badge">FOR CUSTOMERS</div>
          <h2 className="side-title">Shopping Finally<br />Feels Exciting.</h2>
          <p className="side-desc">Discover, interact and shop your favorite products in an all-new way.</p>

          <div className="features-grid">
            {customerFeatures.map((f, i) => (
              <div className="grid-item" key={i}>
                <div className="icon-wrapper pink">{f.icon}</div>
                <h4 className="item-title">{f.title}</h4>
                <p className="item-desc">{f.desc}</p>
              </div>
            ))}
          </div>
          <a href="#" className="explore-link pink-link">Explore Customer Benefits &rarr;</a>
        </div>

      </div>
    </section>
  );
};

export default SplitSection;
