import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Bab1 from './components/Bab1'; 
import HomePage from './components/HomePage';
import Exercise from './components/Exercise';


function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bab1" element={<Bab1 />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </Router>
  );
}

export default App;
