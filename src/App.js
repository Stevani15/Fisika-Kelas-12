import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Form } from 'react-router-dom';
import HomePage from './components/HomePage'; // Impor file HomePage
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
        <Routes>
          <Route path="/" element={<HomePage />} />
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
