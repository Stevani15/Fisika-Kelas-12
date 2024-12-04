import React from "react";
import '../styles/Bab.css'; // Pastikan file CSS sudah tersedia
import { Link } from "react-router-dom";
import gelombangImage from '../images/gelombang_elektromagnetik.png'; // Gambar utama

function GelombangElektromagnetik() {
    const materi = {
        nama: "Gelombang Elektromagnetik",
        deskripsi:
            "Gelombang elektromagnetik adalah gelombang yang dihasilkan oleh perpaduan medan listrik dan medan magnet yang saling tegak lurus. Gelombang ini memiliki banyak aplikasi dalam kehidupan sehari-hari, seperti komunikasi, radar, dan teknologi medis.",
        gambar: gelombangImage,
        path: "/materi/gelombang-elektromagnetik",
    };

    return (
        <div className="materi-container">
            <h1 className="text-center">Materi Gelombang Elektromagnetik</h1>
            <div className="materi-card">
                <img src={materi.gambar} alt={materi.nama} className="materi-image" />
                <div className="materi-content">
                    <h2>{materi.nama}</h2>
                    <p>{materi.deskripsi}</p>
                    <Link to={materi.path} className="btn btn-primary">Pelajari Lebih Lanjut</Link>
                </div>
            </div>
        </div>
    );
}

export default GelombangElektromagnetik;
