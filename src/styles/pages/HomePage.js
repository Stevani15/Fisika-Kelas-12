import React from 'react';
import '../pages/HomePage.js';
import '../styles/Style.css';

const HomePage = () => {
    //daftar kategori materi
    const kategori = [
        { judul: 'Rangkaian Arus Searah', subBab: 3 },
        { judul: 'Medan Magnetik', subBab: 3 },
        { judul: 'Induksi Elektromagnetik', subBab: 2 },
        { judul: 'Gelombang Elektromagnetik', subBab: 3 },
        { judul: 'Rangkaian Arus Bolak-balik', subBab: 3 },
        { judul: 'Fisika Modern', subBab: 3 },
        { judul: 'Teknologi Digital', subBab: 3 },
        { judul: 'Sumber Energi', subBab: 4 },
    ];
    return (
        <div className="home-container">
            <header className="header">
                <h1>FISIKA</h1>
                <p>12 MIA SMA | 8 Materi</p>
                <button className="review-button">Tuliskan Ulasan</button>
                <button className="favorite-button">FAQ</button>
            </header>

            <div className="category-list">
                {kategori.map((item, index) => (
                    <div className="category-card" key={index}>
                        <div className="category-icon">📘</div>
                        <h3>{item.judul}</h3>
                        <p>{item.subBab} Sub Bab Materi</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
