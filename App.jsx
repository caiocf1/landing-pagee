import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Hero />
      <Problem />
      <Solutions />
      <Benefits />
      <HowItWorks />
      <TargetAudience />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;
