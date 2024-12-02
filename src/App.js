import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArusBolakBalik from './components/RangkaianArusBolakBalik'; 
import HomePage from './components/HomePage';



function App() {
  return (
    <Router>
        <Routes>
    
        <Route path="/" element={<RangkaianArusBolakBalik />} />

        {/* Halaman Bab 1 */}
        <Route path="/bab1" element={<Bab1 />} />
      </Routes>
    </Router>
  );
}

export default App;
