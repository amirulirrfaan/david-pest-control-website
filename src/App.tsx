import React from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Coverage } from './components/Coverage';
import { PestTypes } from './components/PestTypes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Process />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Coverage />
        <PestTypes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;