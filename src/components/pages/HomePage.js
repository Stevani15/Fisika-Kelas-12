import React from 'react';
import './HomePage.css';

function HomePage() {
    const topics = [
        { title: "Rangkaian Arus Searah", subTopics: 3 },
        { title: "Gelombang Elektromagnetik", subTopics: 3 },
        { title: "Medan Magnetik", subTopics: 3 },
        { title: "Induksi Elektromagnetik", subTopics: 2 },
        { title: "Rangkaian Arus Bolak-Balik", subTopics: 3 },
        { title: "Fisika Modern", subTopics: 3 },
        { title: "Teknologi Digital", subTopics: 3 },
        { title: "Sumber Energi", subTopics: 4 },
    ];

    return (
        <div className="homepage">
            <header className="header">
                <img src="/assets/logo.png" alt="Website Logo" className="logo" />
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
                        {topics.map((topic, index) => (
                            <div className="topic-card" key={index}>
                                <h3>{topic.title}</h3>
                                <p>{topic.subTopics} Sub Bab Materi</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomePage;
