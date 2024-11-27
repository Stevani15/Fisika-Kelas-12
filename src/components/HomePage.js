import React from 'react';
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
import './FAQ';

function HomePage() {
    return (
        <div className="homepage">
            <header className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <nav className="nav">
                    <a href="#home">Beranda</a>
                    <a href="#faq">FAQ</a>
                    <button className="login-button">Login</button>
                </nav>
            </header>
            <main className="main-content">
                <section className="subject-card">
                    <h2>FISIKA</h2>
                    <p>12 MIA SMA | 8 Materi</p>
                    <div className="actions">
                        <button className="write-review">Tulis Ulasan</button>
                        <button className="add-favorite">Tambah Ke Favorit</button>
                    </div>
                    <div className="topics">
                        <div className="topic-card">
                            <h3>Rangkaian Arus Searah</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                        <div className="topic-card">
                            <h3>Gelombang Elektromagnetik</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                        <div className="topic-card">
                            <h3>Medan Magnetik</h3>
                            <Link to="/medanmagnetik"></Link>
                            <p>3 Sub Bab Materi</p>
                        </div>
                        <div className="topic-card">
                            <h3>Induksi Elektromagnetik</h3>
                            <p>2 Sub Bab Materi</p>
                        </div>
                         <div className="topic-card">
                            <h3>Rangkaian Arus Bolak-Balik</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                         <div className="topic-card">
                            <h3>Fisika Modern</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                         <div className="topic-card">
                            <h3>Teknologi Digital</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                         <div className="topic-card">
                            <h3>Sumber Energi</h3>
                            <p>4 Sub Bab Materi</p>
                        </div>
                        
                    </div>
                </section>
            </main>
        </div>
    );
}
const HomePage = () => {
  // Daftar kategori materi 
  const kategori = [
    { judul: 'Rangkaian Arus Searah', subBab: 3 },
    { judul: 'Medan Magnetik', subBab: 3 },
    { judul: 'Induksi Elektromagnetik', subBab: 2 },
    { judul: 'Gelombang Elektromagnetik', subBab: 3 },
    { judul: 'Rangkaian Arus Bolak Balik', subBab: 3 },
    { judul: 'Fisika Modern', subBab: 3 },
    { judul: 'Teknologi Digital', subBab: 3 },
    { judul: 'Sumber Energi', subBab: 4 },
  ];

  return (
    <div className="home-container">
      <header className="header">
        <h1>FISIKA</h1>
        <p>12 MIA SMA | 8 Materi</p>
        <button className="review-button">FAQ</button>
        <button className="favorite-button">Tambah Ke Favorit</button>
      </header>

      <div className="category-list">
        {kategori.map((item, index) => (
        <Link to={`/RangkaianArusSearah`} key={index} className="category-card">
        <div className="category-icon">📘</div>
        <h3>{item.judul}</h3>
        <p>{item.subBab} Sub Bab Materi</p>
      </Link>
      
        ))}
      </div>
    </div>
  );
};

export default HomePage;