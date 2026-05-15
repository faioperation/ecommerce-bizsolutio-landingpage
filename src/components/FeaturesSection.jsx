import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M3 11l6-6 6 6 6-6"/></svg>,
      title: 'Higher Conversions',
      desc: 'Up to 3X more sales compared to other platforms',
      color: '#a855f7'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/><path d="m12 13 1.5 1.5L12 16l-1.5-1.5L12 13Z"/></svg>,
      title: 'Real-Time Sales',
      desc: 'Buyers purchase without leaving the live',
      color: '#ec4899'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>,
      title: 'Stronger Relationships',
      desc: 'Build fan clubs and loyal customer communities',
      color: '#6366f1'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>,
      title: 'Better Retention',
      desc: 'Keep customers coming back for more',
      color: '#10b981'
    },
    {
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 7v6"/><path d="M12 17h.01"/></svg>,
      title: 'More Profit',
      desc: 'Lower fees, more earnings for you',
      color: '#f43f5e'
    }
  ];

  return (
    <section id="how-it-works" className="features-section reveal-on-scroll">
      <div className="features-container">
        {features.map((f, i) => (
          <div className="feature-col" key={i}>
            <div className="feature-icon" style={{ color: f.color }}>
              {f.icon}
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
