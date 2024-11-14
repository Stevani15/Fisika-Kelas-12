// src/components/MedanMagnetik.js
import React, { useState } from 'react';
import './MedanMagnetik.css';

const MedanMagnetik = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [currentTopic, setCurrentTopic] = useState(null);

    const handleShowDetails = (topic) => {
        setCurrentTopic(topic);
        setShowDetails(true);
    };

    const topics = [
        { id: 1, title: 'Pengertian Medan Magnet', content: 'Medan magnet adalah daerah di sekitar magnet atau benda yang memiliki sifat magnetik...' },
        { id: 2, title: 'Sifat Medan Magnet', content: 'Sifat medan magnet adalah ...' },
        { id: 3, title: 'Hukum Biot-Savart', content: 'Hukum Biot-Savart menjelaskan ...' },
        { id: 4, title: 'Penerapan Medan Magnet dalam Kehidupan', content: 'Medan magnet digunakan dalam ...' },
    ];

    return (
        <div className="medan-magnetik-container">
            <header className="header">
                <h1>Materi Medan Magnetik Kelas 12</h1>
                <p>Pelajari konsep-konsep dasar tentang medan magnetik dan aplikasinya dalam kehidupan sehari-hari.</p>
            </header>

            {/* Daftar Topik */}
            <section className="topics-section">
                <div className="topics-list">
                    {topics.map((topic) => (
                        <div 
                            key={topic.id} 
                            className="topic-card" 
                            onClick={() => handleShowDetails(topic)}
                        >
                            <h3>{topic.title}</h3>
                            <p>{showDetails && currentTopic?.id === topic.id ? topic.content : 'Klik untuk melihat lebih lanjut'}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tampilan Detail */}
            {showDetails && currentTopic && (
                <div className="topic-details">
                    <div className="details-content">
                        <h2>{currentTopic.title}</h2>
                        <p>{currentTopic.content}</p>
                        <button onClick={() => setShowDetails(false)}>Tutup</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedanMagnetik;
