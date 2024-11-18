import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './styles/HomePage';
import AC from "./styles/AC";


function App() {
    return (
        <Router>
        <Routes>
          <Route path="HomePage" element={<HomePage />} />
          <Route path="AC" element={<AC />} />
        </Routes>
      </Router>
    );
}

export default App;
