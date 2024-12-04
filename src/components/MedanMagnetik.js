import React from "react";
import '../styles/Bab.css';
import { Link } from "react-router-dom";

import induksiGambar from '../images/induksi.jpg';
import faradayGambar from '../images/faraday.jpg';
import lorentzGambar from '../images/lorentz.jpg';
import biotSavartGambar from '../images/biot-savart.jpg';
import solenoidGambar from '../images/solenoid.jpg';
import elektromagnetGambar from '../images/elektromagnet.jpg';

function MedanMagnetik() {
    const materiData = [
        {
            nama: "Konsep Dasar Medan Magnetik",
            deskripsi:
                "Medan magnetik adalah daerah di sekitar magnet di mana gaya magnetik dapat dirasakan. Medan ini dihasilkan oleh muatan listrik yang bergerak atau magnet permanen.",
            gambar: induksiGambar,
            path: "/konsep-dasar-medan-magnetik",
        },
        {
            nama: "Hukum Biot-Savart",
            deskripsi:
                "Hukum Biot-Savart menjelaskan hubungan antara arus listrik dan medan magnetik yang dihasilkan. Medan magnetik di sekitar kawat arus dapat dihitung menggunakan hukum ini.",
            gambar: biotSavartGambar,
            path: "/hukum-biot-savart",
        },
        {
            nama: "Hukum Faraday",
            deskripsi:
                "Hukum Faraday menghubungkan perubahan fluks magnetik dengan gaya gerak listrik (ggl) yang diinduksi dalam sebuah rangkaian.",
            gambar: faradayGambar,
            path: "/hukum-faraday",
        },
        {
            nama: "Gaya Lorentz",
            deskripsi:
                "Gaya Lorentz adalah gaya yang dialami oleh muatan listrik yang bergerak dalam medan magnetik. Gaya ini berperan penting dalam banyak fenomena fisika.",
            gambar: lorentzGambar,
            path: "/gaya-lorentz",
        },
        {
            nama: "Medan Magnetik pada Solenoid",
            deskripsi:
                "Solenoid adalah kumparan kawat yang menghasilkan medan magnetik seragam di dalamnya saat dialiri arus listrik. Solenoid banyak digunakan dalam aplikasi elektromagnetik.",
            gambar: solenoidGambar,
            path: "/medan-magnetik-solenoid",
        },
        {
            nama: "Elektromagnet dan Aplikasinya",
            deskripsi:
                "Elektromagnet adalah magnet yang dihasilkan oleh aliran listrik. Elektromagnet digunakan dalam berbagai perangkat seperti motor listrik, relai, dan MRI.",
            gambar: elektromagnetGambar,
            path: "/elektromagnet",
        },
    ];

    return (
        <div className="materi-container">
            <h1 className="materi-title">Medan Magnetik</h1>
            <div className="materi-cards">
                {materiData.map((materi, index) => (
                    <div key={index} className="materi-card">
                        <img src={materi.gambar} alt={materi.nama} className="materi-image" />
                        <Link to={materi.path} className="materi-link">
                            <h2 className="materi-nama">{materi.nama}</h2>
                        </Link>
                        <p className="materi-deskripsi">{materi.deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MedanMagnetik;
