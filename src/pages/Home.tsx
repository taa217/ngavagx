import React from 'react';
import Hero from '../components/marketing/Hero';
import ModelExplainer from '../components/marketing/ModelExplainer';
import ImpactGrid from '../components/marketing/ImpactGrid';
import CTARibbon from '../components/marketing/CTARibbon';
import HowItWorks from '../components/marketing/HowItWorks';
import Fees from '../components/marketing/Fees';
import FAQ from '../components/marketing/FAQ';
import EarningsCalculator from '../components/marketing/EarningsCalculator';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <EarningsCalculator />
      <HowItWorks />
      <ModelExplainer />
      <Fees />
      <ImpactGrid />
      <FAQ />
      <CTARibbon />
    </div>
  );
};

export default Home;
