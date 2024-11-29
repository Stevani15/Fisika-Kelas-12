import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HomePage.css';

// Impor halaman komponen
import HomePage from './components/HomePage';
import MedanMagnetik from './components/MedanMagnetik';
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
<<<<<<< HEAD
      <div className="App">
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
                  <Link className="nav-link" to="/MedanMagnetik">Medan Magnetik</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SumberEnergi">Sumber Energi</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TeknologiDigital">Teknologi Digital</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/FisikaModern">Fisika Modern</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/RangkaianArusBolakBalik">Rangkaian Arus Bolak Balik</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/InduksiElektromagnetik">Induksi Elektromagnetik</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/RangkaianArusSearah">Rangkaian Arus Searah</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/GelombangElektromagnetik">Gelombang Elektromagnetik</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
=======
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bab1" element={<Bab1 />} />
>>>>>>> eb2177420c0a8fc25c11143890216f1671aaa5e9

        {/* Routes untuk halaman */}
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
    </Router>
  );
}

export default App;
