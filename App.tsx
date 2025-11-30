import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Gallery from './components/Gallery';
import Calculator from './components/Calculator';
import Classes from './components/Classes';
import AboutMe from './components/AboutMe';
import WhyHire from './components/WhyHire';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <AboutMe />
        <Solutions />
        <Gallery />
        <Calculator />
        <Classes />
        <WhyHire />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;