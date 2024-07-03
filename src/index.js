import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/about';
import Logements from './pages/logements';
import Erreur404 from './pages/erreur404';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);