import React from 'react';
import './App.css';
import HeroSection from './components/Hero';
import PoemGenerator from './components/PoemGenerator';
import MotherImpactMap from './components/ImpactMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <PoemGenerator />
      <MotherImpactMap />
      <Footer />
    </div>
  );
}

export default App;