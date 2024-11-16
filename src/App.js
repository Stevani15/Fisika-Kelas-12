// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MedanMagnetik from './components/MedanMagnetik';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>      
          <Link to="/MedanMagnetik" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>MedanMagnetik</Link>
          </nav>
        <Routes>  
          <Route path="/MedanMagnetik" element={<MedanMagnetik />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
