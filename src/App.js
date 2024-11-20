import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Form } from 'react-router-dom';
import HomePage from './components/HomePage'; // Impor file HomePage
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HomePage.css';
import MedanMagnetik from './components/MedanMagnetik'; // Impor halaman Medan Magnetik
import SumberEnergi from './components/SumberEnergi';
import FisikaModern from './components/FisikaModern';
import GelombangElektromagnetik from './components/GelombangElektromagnetik';
import InduksiELektromagnetik from './components/InduksiElektromagnetik';
import RangkaianArusSearah from './components/RangkaianArusSearah';
import RangkaianArusBolakBalik from './components/RangkaianArusBolakBalik';
import TeknologiDigital from './components/TeknologiDigital';

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
          <Link 
            to="/SumberEnergi" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Sumber Energi
          </Link>
          <Link 
            to="/TeknologiDigital" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Teknologi Digital
          </Link>
          <Link 
            to="/FisikaModern" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Fisika Modern
          </Link>
          <Link 
            to="/RangkaianArusBolakBalik" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Rangkaian Arus Bolak Balik
          </Link>
          <Link 
            to="/InduksiElektromagnetik" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Induksi Elektromagnetik
          </Link>
          <Link 
            to="/RangkaianArusSearah" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Rangkaian Arus Searah
          </Link>
          <Link 
            to="/GelombangElektromagnetik" 
            style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}
          >
            Gelombang Elektromagnetik
          </Link>
        </nav>

        {/* Routes untuk halaman */}
        <Routes>
          {/* Route untuk Homepage */}
          <Route path="/" element={<HomePage />} />
          {/* Route untuk Halaman Medan Magnetik */}
          <Route path="/MedanMagnetik" element={<MedanMagnetik />} />
          <Route path="/SumberEnergi" element={<SumberEnergi />} />
          <Route path="/TeknologiDigital" element={<TeknologiDigital />} />
          <Route path="/FisikaModern" element={<FisikaModern />} />
          <Route path="/RangkaianArusBolakBalik" element={<RangkaianArusBolakBalik />} />
          <Route path="/InduksiElektromagnetik" element={<InduksiELektromagnetik />} />
          <Route path="/GelombangElektromagnetik" element={<GelombangElektromagnetik />} />
          <Route path="/RangkaianArusSearah" element={<RangkaianArusSearah />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
