import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import About from './About';
import CallToAction from './CallToAction';

export default function MainPage() {
  return (
    <div>
    <Hero />
    <Services />
    <Features />
    <About />
    <CallToAction />
    </div>
  )
}
