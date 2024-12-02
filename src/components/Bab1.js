import React from "react";
import '../styles/Bab.css';
import { Link } from "react-router-dom";
import gbdsimages from '../images/induksi.jpg';
import gbrsimages from '../images/faraday.jpg';
import stkimages from '../images/pengaruh.jpg';

function Bab1() {
    const jurusanData = [
      {
        nama: "Pengertian Induksi Elektromagnetik",
        deskripsi:
          "Materi tentang geometri bidang datar pada umumnya menjelaskan tentang sebuah jarak, baik jarak antara titik dengan garis maupun antara dua titik",
        gambar: gbdsimages,
        path: "/images/induksi.jpg",
      },
      {
        nama: "Hukum Faraday",
        deskripsi:
          "bangun ruang adalah sebutan untuk bangun-bangun yang berbentuk tiga dimensi atau bangun yang memiliki ruang yang di batasi dengan sisi-sisi nya.",
        gambar: gbrsimages,
        path: "/images/faraday.jpg",
      },
      {
        nama: "Statistika",
        deskripsi:
          "ilmu yang memfokuskan pada cara merancang, menghimpun, menganalisis, menafsirkan, dan menyajikan data. ",
        gambar: stkimages,
        path: "/components/pengaruh.jpg",
      },
    ];

    return (
        <div className="jurusan-container">
            <h1>Materi</h1>
            <div className="jurusan-cards">
            {jurusanData.map((jurusan, index) => (
                <div key={index} className="jurusan-card">
                    <img src={jurusan.gambar} alt={jurusan.nama} className="jurusan-image" />
                    <Link to={jurusan.path}>
                        <h2>{jurusan.nama}</h2>
                    </Link>
                    <p>{jurusan.deskripsi}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Bab1;