import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage">
            {/* Header */}
            <header className="header">
                <img src="FISIKA.jpg" alt="FISIKA" className="logo" />
                <nav className="nav">
                    <a href="#home">Beranda</a>
                    <a href="#faq">FAQ</a>
                    <button className="login-button">Login</button>
                </nav>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <section className="subject-card">
                    <h2 className="subject-title">FISIKA</h2>
                    <p className="subject-info">12 MIA SMA | 8 Materi</p>
                    
                    {/* Actions Section */}
                    <div className="actions">
                        <button className="write-review">Tulis Ulasan</button>
                        <button className="add-favorite">Tambah Ke Favorit</button>
                    </div>

                    {/* Topics List */}
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
                    <Link to="/SumberEnergi" className="topic-card">
                            <h3>Sumber Energi</h3>
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
                </section>
            </main>
        </div>
    );
}

export default HomePage;
