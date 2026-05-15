import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section reveal-on-scroll" id="home">
      <div className="hero-content">
        <div className="coming-soon-badge">
          <span className="dot"></span>
          COMING SOON
        </div>
        <h1 className="hero-title" style={{ letterSpacing: 'var(--tracking-tighter)' }}>
          Built For<br/>People Who<br/><span className="text-gradient">Sell Live.</span>
        </h1>
        <p className="hero-description">
          Vango Live gives sellers the tools, audience engagement and checkout experience modern live commerce actually needs.
        </p>
        
        <div className="hero-actions">
          <a href="#waitlist" className="join-btn-large">Join the Waitlist <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
          <button className="play-btn">
            <span className="play-icon-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
            </span>
            See How It Works
          </button>
        </div>
        
        <div className="social-proof">
          <div className="avatars">
            <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=1)' }}></div>
            <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=2)' }}></div>
            <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=3)' }}></div>
            <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=4)' }}></div>
            <div className="avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=5)' }}></div>
          </div>
          <div className="social-proof-text">
            <strong>3,248+ sellers already joined</strong>
            <span>Be early. Be successful.</span>
          </div>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hero-glow-bg"></div>
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="phone-mockup">
          <div className="phone-screen">
             <div className="live-header">
                <div className="live-user-info">
                   <div className="user-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=9)' }}></div>
                   <span className="username">stylewithsam <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6" className="verified-badge"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm3.707 9.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 13.086l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/></svg></span>
                </div>
                <div className="live-header-right">
                  <button className="follow-btn">Follow</button>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
             </div>
             
             <div className="live-badge-absolute">
                <span className="live-dot"></span> LIVE <span>12.5k</span>
             </div>

              <div className="floating-notifications">
                <div className="glass-pill notification-pop">
                   <span className="icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></span>
                   <div className="pill-text">
                     <strong>Someone just</strong>
                     <span>purchased</span>
                   </div>
                </div>
                <div className="glass-pill outline-blue notification-pop delay-1">
                   <span className="icon plus"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
                   <div className="pill-text">
                     <strong>New Follower!</strong>
                     <span className="blue">+128</span>
                   </div>
                </div>
                <div className="glass-pill outline-purple notification-pop delay-2">
                   <span className="icon ticket"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg></span>
                   <div className="pill-text">
                     <strong>Voucher Unlocked!</strong>
                     <span className="purple">15% OFF</span>
                   </div>
                </div>
              </div>
             
             <div className="floating-hearts">
               <span className="heart h1">❤️</span>
               <span className="heart h2">💖</span>
               <span className="heart h3">✨</span>
             </div>
             
             <div className="chat-area">
                <div className="chat-msg">
                   <div className="chat-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=11)' }}></div>
                   <div className="msg-content">
                     <strong>Sarah</strong>
                     <span>This is so cute! 😍</span>
                   </div>
                </div>
                <div className="chat-msg">
                   <div className="chat-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=12)' }}></div>
                   <div className="msg-content">
                     <strong>Mike</strong>
                     <span>When is the next drop?</span>
                   </div>
                </div>
                <div className="chat-msg">
                   <div className="chat-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=13)' }}></div>
                   <div className="msg-content">
                     <strong>Jess</strong>
                     <span>Love this color!</span>
                   </div>
                </div>
                <div className="chat-msg">
                   <div className="chat-avatar" style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=14)' }}></div>
                   <div className="msg-content">
                     <strong>Amy</strong>
                     <span>Just bought 2! ✨</span>
                   </div>
                </div>
             </div>

             <div className="bottom-bar">
                <div className="product-card">
                   <div className="product-img"></div>
                   <div className="product-info">
                      <span className="product-title">Quilted Chain Bag</span>
                      <span className="product-price">$89.00</span>
                   </div>
                   <button className="buy-now-btn">Buy Now</button>
                </div>
             </div>
          </div>
        </div>
        
        {/* Floating stat cards outside phone */}
        <div className="floating-stat stat-1">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
           <div className="stat-info">
              <strong>82</strong>
              <span>People watching</span>
           </div>
        </div>
        
        <div className="floating-stat stat-2">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
           <div className="stat-info">
              <strong>57</strong>
              <span>Products sold</span>
           </div>
        </div>

        <div className="floating-stat stat-3 flash-sale">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
           <div className="stat-info">
              <strong>00:29</strong>
              <span>Flash Sale</span>
              <span className="pink">-20% OFF</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
