import React from "react";
import '../styles/Bab.css'; // Pastikan file CSS sudah tersedia
import { Link } from "react-router-dom";
import aplikasiMagnetImage from '../images/aplikasi_magnet.png'; // Gambar utama

function AplikasiMagnetDalamKehidupan() {
    const materi = {
        nama: "Aplikasi Magnet dalam Kehidupan",
        deskripsi:
            "Magnet memiliki banyak aplikasi dalam kehidupan sehari-hari, seperti pada kompas, generator listrik, motor, dan MRI di bidang medis. Pelajari lebih dalam bagaimana magnet dimanfaatkan untuk berbagai teknologi modern.",
        gambar: aplikasiMagnetImage,
        path: "/materi/aplikasi-magnet",
    };

    return (
        <div className="materi-container">
            <h1 className="text-center">Materi Aplikasi Magnet dalam Kehidupan</h1>
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

export default AplikasiMagnetDalamKehidupan;