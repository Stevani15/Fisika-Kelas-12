import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Pastikan path ini benar
import Bab1 from './components/Bab1'; // Pastikan path ini benar
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman Bab 1 */}
        <Route path="/bab1" element={<Bab1 />} />
      </Routes>
    </Router>
  );
}

export default App;