import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Bab1 from './components/Bab1'; 
import HomePage from './components/HomePage';
import Bab2 from './components/Bab2'; 
import Bab3 from './components/Bab3'; 
import Bab4 from './components/Bab4'; 
import Bab5 from './components/Bab5'; 
import Bab6 from './components/Bab6'; 
import Bab7 from './components/Bab7'; 
import Bab8 from './components/Bab8'; 

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
      </Routes>
    </Router>
  );
}

export default App;
