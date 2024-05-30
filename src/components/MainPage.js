import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import About from './About';
import CallToAction from './CallToAction';
import Footer from './Footer';
import Header from './Header';

export default function MainPage() {
  return (
    <div>
    <Header />
    <Hero />
    <Services />
    <Features />
    <About />
    <CallToAction />
    <Footer />
    </div>
  )
}
