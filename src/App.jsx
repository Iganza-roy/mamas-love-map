import React from 'react';
import './App.css';
import Hero from './components/Hero';
import PoemGenerator from './components/PoemGenerator';
import ImpactMap from './components/ImpactMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PoemGenerator />
      <ImpactMap />
      <Footer />
    </div>
  );
}

export default App;