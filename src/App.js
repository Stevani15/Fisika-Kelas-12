import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
import GayaLorentz from './components/GayaLorentz';
import InduksiMagnetik from './components/InduksiMagnetik';
import GelombangElektromagnetik from './components/GelombangElektromagnetik';
import AplikasiMagnet from './components/AplikasiMagnet';
import Transformator from './components/Transformator';
import InduksiElektromagnetik from './components/InduksiElektromagnetik';
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
                                    <Link className="nav-link" to="/bab7">Bab 7</Link>
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
                    <Route path="/materi/medan-magnetik" element={<MedanMagnetik />} />
                    <Route path="/materi/gaya-lorentz" element={<GayaLorentz />} />
                    <Route path="/materi/induksi-magnetik" element={<InduksiMagnetik />} />
                    <Route path="/materi/gelombang-elektromagnetik" element={<GelombangElektromagnetik />} />
                    <Route path="/materi/aplikasi-magnet" element={<AplikasiMagnet />} />
                    <Route path="/materi/transformator" element={<Transformator />} />
                    <Route path="/materi/InduksiElektromagnetik" element={<InduksiElektromagnetik/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
