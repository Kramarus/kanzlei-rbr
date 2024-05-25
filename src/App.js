import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Datenschutz from './components/Datenschutz';
import Impressum from './components/Impressum';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
