import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

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
        <div className="homepage">
            {/* Header */}
            <header className="header">
                <div className="header-container">
                    <img src="FISIKA.jpg" alt="Logo Fisika" className="logo" />
                    <nav className="nav">
                        <a href="#home" className="nav-link">Beranda</a>
                        <a href="#faq" className="nav-link">FAQ</a>
                        <button className="login-button">Login</button>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
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
                        {topics.map((topic, index) => (
                            <div className="topic-card" key={index}>
                                <h3 className="topic-title">{topic.title}</h3>
                                <p className="topic-info">{topic.subBab} Sub Bab Materi</p>
                                <Link to={topic.link} className="topic-link">Buka Materi</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomePage;
