import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Logements from './pages/Logements/Logements.jsx';
import Erreur404 from './pages/Erreur404/Erreur404.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);