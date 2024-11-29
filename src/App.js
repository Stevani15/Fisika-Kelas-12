import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import Bab1 from './components/Bab1'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bab1" element={<Bab1 />} />
        <Route path="/bab2" element={<Bab2 />} />

      </Routes>
    </Router>
  );
}

export default App;