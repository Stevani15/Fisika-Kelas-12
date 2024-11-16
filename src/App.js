import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Impor file HomePage
import MedanMagnetik from './components/MedanMagnetik'; // Impor halaman Medan Magnetik

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
          <Link 
            to="/" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link 
            to="/MedanMagnetik" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Medan Magnetik
          </Link>
        </nav>

        {/* Routes untuk halaman */}
        <Routes>
          {/* Route untuk Homepage */}
          <Route path="/" element={<HomePage />} />
          {/* Route untuk Halaman Medan Magnetik */}
          <Route path="/MedanMagnetik" element={<MedanMagnetik />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
