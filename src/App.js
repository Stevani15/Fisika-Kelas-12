import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes, Link, Form } from 'react-router-dom';
import HomePage from './components/HomePage'; // Impor file HomePage
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HomePage.css';
import MedanMagnetik from './components/MedanMagnetik'; // Impor halaman Medan Magnetik
=======
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// Impor halaman komponen
import HomePage from './components/HomePage';
import MedanMagnetik from './components/MedanMagnetik';
>>>>>>> Stashed changes
import SumberEnergi from './components/SumberEnergi';
import FisikaModern from './components/FisikaModern';
import GelombangElektromagnetik from './components/GelombangElektromagnetik';
import InduksiElektromagnetik from './components/InduksiElektromagnetik';
import RangkaianArusSearah from './components/RangkaianArusSearah';
import RangkaianArusBolakBalik from './components/RangkaianArusBolakBalik';
import TeknologiDigital from './components/TeknologiDigital';

function App() {
  return (
    <Router>
      <div className="App">
<<<<<<< Updated upstream
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
=======
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Fisika Kelas 12
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/MedanMagnetik">
                    Medan Magnetik
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SumberEnergi">
                    Sumber Energi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TeknologiDigital">
                    Teknologi Digital
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/FisikaModern">
                    Fisika Modern
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/RangkaianArusBolakBalik">
                    Rangkaian Arus Bolak Balik
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/InduksiElektromagnetik">
                    Induksi Elektromagnetik
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/RangkaianArusSearah">
                    Rangkaian Arus Searah
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/GelombangElektromagnetik">
                    Gelombang Elektromagnetik
                  </Link>
                </li>
              </ul>
            </div>
          </div>
>>>>>>> Stashed changes
        </nav>
        </div>
        {/* Routes untuk halaman */}
<<<<<<< Updated upstream
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
=======
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/MedanMagnetik" element={<MedanMagnetik />} />
            <Route path="/SumberEnergi" element={<SumberEnergi />} />
            <Route path="/TeknologiDigital" element={<TeknologiDigital />} />
            <Route path="/FisikaModern" element={<FisikaModern />} />
            <Route path="/RangkaianArusBolakBalik" element={<RangkaianArusBolakBalik />} />
            <Route path="/InduksiElektromagnetik" element={<InduksiElektromagnetik />} />
            <Route path="/GelombangElektromagnetik" element={<GelombangElektromagnetik />} />
            <Route path="/RangkaianArusSearah" element={<RangkaianArusSearah />} />
          </Routes>
        </div>
      </div>
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;
