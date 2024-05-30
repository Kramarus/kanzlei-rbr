import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import Contact from './components/CallToAction';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
