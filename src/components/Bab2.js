import React from "react";
import '../styles/Bab.css';
import { Link } from "react-router-dom";
import medanMagnetikImage from '../images/medan_magnetik.png'; // Gambar medan magnetik

function Bab2() {
    const materiData = [
      {
        nama: "Medan Magnet",
        deskripsi:
          "Medan magnet adalah wilayah di sekitar magnet yang memengaruhi benda dengan sifat-sifat magnetik. Medan ini terbentuk ketika muatan bergerak dan memberikan gaya pada muatan bergerak lainnya.",
        gambar: medanMagnetikImage,
        rumus: [
          "B = μ₀ * n * I", // Rumus medan magnet pada solenoida
          "B = F / (q * v * sin(θ))", // Rumus medan magnet Tesla
          "B = (μ₀ * N * I) / (2π * r)", // Rumus medan magnet pada toroida
        ],
        sifat: [
          "Medan magnet dapat menarik benda-benda yang memiliki sifat-sifat magnetik, seperti logam.",
          "Setiap magnet memiliki dua kutub, yaitu kutub utara dan kutub selatan, yang selalu berpasangan.",
          "Garis medan magnet selalu mengarah dari kutub utara menuju kutub selatan.",
          "Medan magnet membentuk pola lingkaran di sekitar magnet, yang semakin kuat mendekati kutub.",
          "Medan magnet menjadi lebih lemah seiring jaraknya dari sumber magnet.",
          "Medan magnet dapat menginduksi arus listrik dalam benda konduktor yang bergerak melintasi medan tersebut."
        ],
        path: "/images/medan_magnetik.jpg",
      },
    ];

    return (
        <div className="jurusan-container">
            <h1>Materi Medan Magnetik</h1>
            <div className="jurusan-cards">
            {materiData.map((materi, index) => (
                <div key={index} className="jurusan-card">
                    <img src={materi.gambar} alt={materi.nama} className="jurusan-image" />
                    <Link to={materi.path}>
                        <h2>{materi.nama}</h2>
                    </Link>
                    <p>{materi.deskripsi}</p>
                    <div>
                        <h3>Sifat-Sifat Medan Magnet:</h3>
                        <ul>
                            {materi.sifat.map((sifat, i) => (
                                <li key={i}>{sifat}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Rumus-Rumus Medan Magnet:</h3>
                        <ul>
                            {materi.rumus.map((rumus, i) => (
                                <li key={i}>{rumus}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Bab2;
