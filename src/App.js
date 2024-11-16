import React from 'react';
import './App.css';
import HomePage from './HomePage';
import MedanMagnetik from './components/MedanMagnetik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigasi */}
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

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/MedanMagnetik" element={<MedanMagnetik />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
