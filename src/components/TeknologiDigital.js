import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './SumberEnergi';
import './MedanMagnetik';
import './GelombangElektromagnetik';
import './InduksiElektromagnetik';
import './RangkaianArusBolakBalik'
import './RangkaianArusSearah';
import './TeknologiDigital';
import './FisikaModern';

const HomePage = () => {
  const [showSumberEnergi, setShowSumberEnergi] = useState(false);

  const handleSumberEnergiClick = () => {
    setShowSumberEnergi(true);
  };

  return (
    <div className="topics">
    <Link to="/MedanMagnetik" className="topic-card">
            <h3>Medan Magnetik</h3>
            <p>3 Sub Bab Materi</p>
    </Link>

    <Link to="/FisikaModern" className="topic-card">
            <h3>Fisika Modern</h3>
            <p>3 Sub Bab Materi</p>
    </Link>

    <Link to="/InduksiElektromagnetik" className="topic-card">
            <h3>Induksi Elektromagnetik</h3>
            <p>3 Sub Bab Materi</p>
    </Link>
    <Link to="/RangkaianArusBolakBalik" className="topic-card">
            <h3>Rangkaian Arus Bolak-Balik</h3>
            <p>3 Sub Bab Materi</p>
    </Link>
    <Link to="/RangkaianArusSearah" className="topic-card">
            <h3>Rangkaian Arus Bolak-Balik</h3>
            <p>3 Sub Bab Materi</p>
    </Link>
    <Link to="/TeknologiDigital" className="topic-card">
            <h3>Teknologi Digital</h3>
            <p>3 Sub Bab Materi</p>
    </Link>

    <Link to="/GelombangElektromagnetik" className="topic-card">
            <h3>Gelombang Elektromagnetik</h3>
            <p>3 Sub Bab Materi</p>
    </Link>  
    </div>
);
};

export default HomePage;