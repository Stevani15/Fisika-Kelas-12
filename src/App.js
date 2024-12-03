import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import semua halaman
import Bab1 from './components/Bab1';
import HomePage from './components/HomePage';
import Bab2 from './components/Bab2';
import Bab3 from './components/Bab3';
import Bab4 from './components/Bab4';
import Bab5 from './components/Bab5';
import Bab6 from './components/Bab6';
import Bab7 from './components/Bab7';
import Bab8 from './components/Bab8';
import induksimagnetik from './components/induksimagnetik'; // Sesuaikan case file

function App() {
  return (
    <Router>
      <div>
        {/* Navigasi untuk mempermudah berpindah halaman */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
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
                  <Link className="nav-link" to="/induksimagnetik">Induksi Magnetik</Link>
                </li>
                {/* Tambahkan navigasi untuk bab lainnya jika perlu */}
              </ul>
            </div>
          </div>
        </nav>

        {/* Definisi rute */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bab1" element={<Bab1 />} />
          <Route path="/bab2" element={<Bab2 />} />
          <Route path="/bab3" element={<Bab3 />} />
          <Route path="/bab4" element={<Bab4 />} />
          <Route path="/bab5" element={<Bab5 />} />
          <Route path="/bab6" element={<Bab6 />} />
          <Route path="/bab7" element={<Bab7 />} />
          <Route path="/bab8" element={<Bab8 />} />
          <Route path="/induksimagnetik" element={<induksimagnetik />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
