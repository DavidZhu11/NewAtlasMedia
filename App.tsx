import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AuthorityBar from './components/AuthorityBar';
import CaseStudies from './components/CaseStudies';
import AboutUs from './components/AboutUs';
import Mechanism from './components/Mechanism';
import Partnership from './components/Partnership';
import InvestmentPitch from './components/InvestmentPitch';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Mechanism />
        <Partnership />
        <AboutUs />
        <AuthorityBar />
        <InvestmentPitch />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;