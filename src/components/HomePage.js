import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './SumberEnergi';
import './MedanMagnetik';
import './GelombangElektromagnetik';
import './InduksiElektromagnetik';
import './RangkaianArusBolakBalik';
import './RangkaianArusSearah';
import './TeknologiDigital';
import './FisikaModern';
import './FAQ';

const kategori = [
    { judul: 'Rangkaian Arus Searah', subBab: 3 },
    // Add more categories as needed
];

function HomePage() {
    const topics = [
        { title: "Rangkaian Arus Searah", subBab: 3, link: "/RangkaianArusSearah" },
        { title: "Gelombang Elektromagnetik", subBab: 3, link: "/GelombangElektromagnetik" },
        { title: "Medan Magnetik", subBab: 3, link: "/MedanMagnetik" },
        { title: "Induksi Elektromagnetik", subBab: 2, link: "/InduksiElektromagnetik" },
        { title: "Rangkaian Arus Bolak-Balik", subBab: 3, link: "/RangkaianArusBolakBalik" },
        { title: "Fisika Modern", subBab: 3, link: "/FisikaModern" },
        { title: "Teknologi Digital", subBab: 3, link: "/TeknologiDigital" },
        { title: "Sumber Energi", subBab: 4, link: "/SumberEnergi" },
    ];

    return (
        <div className="home-container">
            <header className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <nav className="nav">
                    <a href="#home">Beranda</a>
                    <a href="#faq">FAQ</a>
                    <button className="login-button">Login</button>
                </nav>
                <h1>FISIKA</h1>
                <p>12 MIA SMA | 8 Materi</p>
                <button className="review-button">Tulis Ulasan</button>
                <button className="favorite-button">Tambah Ke Favorit</button>
            </header>

            <main className="main-content">
                <section className="subject-card">
                    {/* Subject Info */}
                    <h2 className="subject-title">FISIKA</h2>
                    <p className="subject-info">12 MIA SMA | 8 Materi</p>
                    
                    {/* Actions Section */}
                    <div className="actions">
                        <button className="write-review">Tulis Ulasan</button>
                        <button className="add-favorite">Tambah Ke Favorit</button>
                    </div>

                    {/* Topics List */}
                    <div className="topics">
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
                </section>
            </main>
        </div>
    );
};

export default HomePage;