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
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Physics App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {/* Home Link */}
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                {/* Dropdown Menu */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Materi Fisika
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/MedanMagnetik">
                        Medan Magnetik
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/SumberEnergi">
                        Sumber Energi
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/TeknologiDigital">
                        Teknologi Digital
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/FisikaModern">
                        Fisika Modern
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/RangkaianArusBolakBalik">
                        Rangkaian Arus Bolak Balik
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/InduksiElektromagnetik">
                        Induksi Elektromagnetik
                      </Link>
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MedanMagnetik" element={<MedanMagnetik />} />
          <Route path="/SumberEnergi" element={<SumberEnergi />} />
          <Route path="/TeknologiDigital" element={<TeknologiDigital />} />
          <Route path="/FisikaModern" element={<FisikaModern />} />
          <Route path="/RangkaianArusBolakBalik" element={<RangkaianArusBolakBalik />} />
          <Route path="/InduksiElektromagnetik" element={<InduksiELektromagnetik />} />
          <Route path="/RangkaianArusSearah" element={<RangkaianArusSearah />} />
          <Route path="/GelombangElektromagnetik" element={<GelombangElektromagnetik />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;