import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import Contact from './components/CallToAction';
import { HashRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState } from 'react';



function App() {
  const [page, setPage] = useState('main');

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  }
  
  const renderPage = () => {
    if (page === 'main') {
      scrollToTop();
      return <MainPage />
    } else if (page === 'datenschutz') {
      scrollToTop();
      return <Datenschutz />
    } else if (page === 'impressum') {
      scrollToTop();
      return <Impressum />
    } else if (page === 'contact') {
      scrollToTop();
      return <Contact />
    }
  }
  

  return (
    <div className="App">
      <Header setPage={setPage} />
      {renderPage()}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
