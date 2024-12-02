import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArusBolakBalik from './components/RangkaianArusBolakBalik'; 
import HomePage from './components/HomePage';



function App() {
  return (
    <Router>
        <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<HomePage />} />

        <Route path="/RangkaianArusBolakBalik" element={<RangkaianArusBolakBalik />} />
      </Routes>
    </Router>
  );
}

export default App;
