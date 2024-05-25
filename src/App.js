import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
