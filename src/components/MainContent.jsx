import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      {/* Glow Effects */}
      <div className="bg-glow glow-top-right"></div>
      <div className="bg-glow glow-center-left"></div>

      {/* Hero Section Skeleton */}
      <section className="skeleton-section hero-section">
        <div className="hero-content">
          <div className="skeleton-badge skeleton-glow"></div>
          <div className="skeleton-title large skeleton-glow mt-4"></div>
          <div className="skeleton-title large medium-width skeleton-glow"></div>
          <div className="skeleton-title large short-width skeleton-glow"></div>
          <div className="skeleton-text long skeleton-glow mt-4"></div>
          <div className="skeleton-text medium skeleton-glow"></div>
          <div className="skeleton-button skeleton-glow mt-4"></div>
        </div>
        <div className="hero-visual">
          <div className="skeleton-phone skeleton-glow">
            <div className="skeleton-phone-screen"></div>
          </div>
        </div>
        <div className="coming-soon-glass">
          <h2>Hero Section</h2>
          <p className="gradient-text">Coming Soon</p>
        </div>
      </section>

      {/* Stats/Features Row Skeleton */}
      <section className="skeleton-section features-row">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="feature-item">
            <div className="skeleton-icon skeleton-glow mb-2"></div>
            <div className="skeleton-text medium skeleton-glow"></div>
            <div className="skeleton-text small skeleton-glow"></div>
          </div>
        ))}
        <div className="coming-soon-glass">
          <h2>Platform Benefits</h2>
          <p className="gradient-text">Coming Soon</p>
        </div>
      </section>

      {/* Split Cards Skeleton (Sellers vs Customers) */}
      <section className="skeleton-section split-section">
        <div className="split-card left-card">
          <div className="skeleton-badge small skeleton-glow"></div>
          <div className="skeleton-title skeleton-glow mt-4"></div>
          <div className="skeleton-text long skeleton-glow"></div>
          <div className="skeleton-grid-2 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid-item">
                 <div className="skeleton-icon small skeleton-glow mb-2"></div>
                 <div className="skeleton-text medium skeleton-glow"></div>
                 <div className="skeleton-text small skeleton-glow"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="vs-badge">V</div>

        <div className="split-card right-card">
          <div className="skeleton-badge small skeleton-glow"></div>
          <div className="skeleton-title skeleton-glow mt-4"></div>
          <div className="skeleton-text long skeleton-glow"></div>
          <div className="skeleton-grid-2 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid-item">
                 <div className="skeleton-icon small skeleton-glow mb-2"></div>
                 <div className="skeleton-text medium skeleton-glow"></div>
                 <div className="skeleton-text small skeleton-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="coming-soon-glass">
          <h2>Sellers vs Customers</h2>
          <p className="gradient-text">Coming Soon</p>
        </div>
      </section>

      {/* Comparison Bottom Section Skeleton */}
      <section className="skeleton-section comparison-section">
        <div className="comparison-header">
           <div className="skeleton-title large skeleton-glow"></div>
           <div className="skeleton-title medium-width skeleton-glow"></div>
        </div>
        <div className="comparison-cards mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`comp-card ${i === 3 ? 'highlight' : ''}`}>
               <div className="skeleton-icon skeleton-glow mb-4"></div>
               {[...Array(5)].map((_, j) => (
                 <div key={j} className="skeleton-text skeleton-glow mb-2"></div>
               ))}
            </div>
          ))}
        </div>
        <div className="coming-soon-glass">
          <h2>Industry Comparison</h2>
          <p className="gradient-text">Coming Soon</p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
