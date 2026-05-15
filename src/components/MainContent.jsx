import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import SplitSection from './SplitSection';
import ComparisonSection from './ComparisonSection';
import WaitlistSection from './WaitlistSection';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <HeroSection />
      <FeaturesSection />
      <SplitSection />
      <ComparisonSection />
      <WaitlistSection />
    </main>
  );
};

export default MainContent;
