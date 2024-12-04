import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
<<<<<<< HEAD
import HomePage from './components/HomePage';
import Bab1 from './components/Bab1'; 
import Bab2 from './components/Bab2'; 
import Bab3 from './components/Bab3'; 
import Bab4 from './components/Bab4'; 
import Bab5 from './components/Bab5'; 
import Bab6 from './components/Bab6'; 
import Bab7 from './components/Bab7'; 
import Bab8 from './components/Bab8'; 
import LatihanSoal from './components/LatihanSoal';
import LatB1 from './components/LatB1'; 
import LatB2 from './components/LatB2';
import LatB3 from './components/LatB3';
import LatB4 from './components/LatB4';
import LatB5 from './components/LatB5';
import LatB6 from './components/LatB6';
import LatB7 from './components/LatB7';
import LatB8 from './components/LatB8';


function App() {
  return (
    <Router>
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
        <Route path="/latihansoal" element={<LatihanSoal />} />
        <Route path="/LatB1" element={<LatB1 />} />
        <Route path="/LatB2" element={<LatB2 />} />
        <Route path="/LatB3" element={<LatB3 />} />
        <Route path="/LatB4" element={<LatB4 />} />
        <Route path="/LatB5" element={<LatB5 />} />
        <Route path="/LatB6" element={<LatB6 />} />
        <Route path="/LatB7" element={<LatB7 />} />
        <Route path="/LatB8" element={<LatB8 />} />
      </Routes>
    </Router>
  );
=======

// Import halaman-halaman utama
import HomePage from './components/HomePage';
import Bab1 from './components/Bab1';
import Bab2 from './components/Bab2';
import Bab3 from './components/Bab3';
import Bab4 from './components/Bab4';
import Bab5 from './components/Bab5';
import Bab6 from './components/Bab6';
import Bab7 from './components/Bab7';
import Bab8 from './components/Bab8';

// Import halaman materi di Bab 7
import MedanMagnetik from './components/MedanMagnetik';
import InduksiMagnetik from './components/InduksiMagnetik';
import GelombangElektromagnetik from './components/GelombangElektromagnetik';
import InduksiElektromagnetik from './components/InduksiElektromagnetik';
import AplikasiMagnetDalamKehidupan from './components/AplikasiMagnetDalamKehidupan'; // Nama komponen disesuaikan

function App() {
    return (
        <Router>
            <div>
                {/* Navigasi utama */}
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
                                    <Link className="nav-link" to="/bab1">Bab 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bab2">Bab 2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bab3">Bab 3</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bab4">Bab 4</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bab5">Bab 5</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bab6">Bab 6</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bab7">Bab 7</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bab8">Bab 8</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Definisi Rute */}
                <Routes>
                    {/* Rute untuk halaman utama */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/bab1" element={<Bab1 />} />
                    <Route path="/bab2" element={<Bab2 />} />
                    <Route path="/bab3" element={<Bab3 />} />
                    <Route path="/bab4" element={<Bab4 />} />
                    <Route path="/bab5" element={<Bab5 />} />
                    <Route path="/bab6" element={<Bab6 />} />
                    <Route path="/bab7" element={<Bab7 />} />
                    <Route path="/bab8" element={<Bab8 />} />

                    {/* Rute untuk materi di Bab 7 */}
                    <Route path="/materi/medanmagnetik" element={<MedanMagnetik />} />
                    <Route path="/materi/induksimagnetik" element={<InduksiMagnetik />} />
                    <Route path="/materi/gelombangelektromagnetik" element={<GelombangElektromagnetik />} />
                    <Route path="/materi/induksielektromagnetik" element={<InduksiElektromagnetik />} />
                    <Route path="/materi/aplikasimagnetdalamkehidupan" element={<AplikasiMagnetDalamKehidupan />} />
                </Routes>
            </div>
        </Router>
    );
>>>>>>> 89b75b63446f7b519b289e2ede3be886bcdc3e67
}

export default App;
