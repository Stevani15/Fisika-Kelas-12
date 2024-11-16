import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi ke halaman lain

function HomePage() {
    const navigate = useNavigate(); // Inisialisasi navigasi React Router

    // Fungsi untuk menangani klik kartu topik
    const handleTopicClick = (topic) => {
        if (topic === "Medan Magnetik") {
            navigate('/medan-magnetik'); // Navigasi ke halaman Medan Magnetik
        }
    };

    return (
        <div className="homepage">
            <header className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <nav className="nav">
                    <a href="#home">Beranda</a>
                    <a href="#blog">Blog</a>
                    <a href="#schools">Sekolah Dan Kampus</a>
                    <a href="#learn">Belajar</a>
                    <a href="#tests">Tes Minat Bakat</a>
                    <a href="#scholarships">Beasiswa</a>
                    <a href="#services">Layanan</a>
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
                        <div
                            className="topic-card"
                            onClick={() => handleTopicClick("Rangkaian Arus Searah")}
                        >
                            <h3>Rangkaian Arus Searah</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                        <div
                            className="topic-card"
                            onClick={() => handleTopicClick("Gelombang Elektromagnetik")}
                        >
                            <h3>Gelombang Elektromagnetik</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                        <div
                            className="topic-card"
                            onClick={() => handleTopicClick("Medan Magnetik")}
                        >
                            <h3>Medan Magnetik</h3>
                            <p>3 Sub Bab Materi</p>
                        </div>
                        <div
                            className="topic-card"
                            onClick={() => handleTopicClick("Induksi Elektromagnetik")}
                        >
                            <h3>Induksi Elektromagnetik</h3>
                            <p>2 Sub Bab Materi</p>
                        </div>
                        {/* Tambahkan topik lain jika diperlukan */}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomePage;
