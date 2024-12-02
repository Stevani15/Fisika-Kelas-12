import React from "react";
import "../styles/Bab.css";
import { Link } from "react-router-dom";
import digital1 from "../images/digital1.jpg";
import digital2 from "../images/digital2.jpg";
import digital3 from "../images/digital3.jpg";

function Bab8() {
  const teknologiData = [
    {
      nama: "Pengenalan Teknologi Digital",
      deskripsi:
        "Teknologi digital adalah penggunaan perangkat elektronik untuk memproses data dalam bentuk digital. Ini mencakup perangkat keras dan perangkat lunak yang memungkinkan pengolahan dan komunikasi informasi.",
      gambar: digital1,
      path: "/pengenalan-teknologi-digital",
      teori: `Teknologi digital memungkinkan untuk mengubah informasi menjadi bentuk yang lebih mudah diproses, disimpan, dan dikirim melalui jaringan digital. Salah satu rumus dasar dalam pengolahan digital adalah konversi sinyal analog ke digital (ADC) menggunakan rumus: 
      \[ ADC = \frac{V_{\text{input}}}{V_{\text{max}}} \times 1023 \]
      Di mana \( V_{\text{input}} \) adalah nilai sinyal input, dan \( V_{\text{max}} \) adalah tegangan maksimum.`,
    },
    {
      nama: "Pemrosesan Sinyal Digital",
      deskripsi:
        "Pemrosesan sinyal digital (DSP) melibatkan manipulasi sinyal untuk memperbaiki kualitas atau untuk mengambil informasi dari sinyal.",
      gambar: digital2,
      path: "/pemrosesan-sinyal-digital",
      teori: `Salah satu operasi penting dalam pemrosesan sinyal digital adalah transformasi Fourier yang digunakan untuk mengubah sinyal ke domain frekuensi. Rumus transformasi Fourier adalah:
      \[ X(f) = \int_{-\infty}^{\infty} x(t) e^{-j2\pi ft} dt \]
      Di mana \( X(f) \) adalah representasi frekuensi dari sinyal \( x(t) \).`,
    },
    {
      nama: "Komunikasi Digital",
      deskripsi:
        "Komunikasi digital mengacu pada pengiriman informasi dalam bentuk sinyal digital. Ini melibatkan pengkodean, pengiriman, dan dekode informasi.",
      gambar: digital3,
      path: "/komunikasi-digital",
      teori: `Salah satu metode dalam komunikasi digital adalah pengkodean sumber yang digunakan untuk mengubah data asli menjadi format yang lebih efisien. Rumus pengkodean sumber adalah:
      \[ H(X) = - \sum_{i=1}^{n} p(x_i) \log_2 p(x_i) \]
      Di mana \( H(X) \) adalah entropi informasi dari sumber, dan \( p(x_i) \) adalah probabilitas simbol \( x_i \) pada sumber tersebut.`,
    },
  ];

  return (
    <div className="jurusan-container">
      <h1>Materi Teknologi Digital</h1>
      <div className="jurusan-cards">
        {teknologiData.map((teknologi, index) => (
          <div key={index} className="jurusan-card">
            <img src={teknologi.gambar} alt={teknologi.nama} className="jurusan-image" />
            <Link to={teknologi.path}>
              <h2 className="jurusan-title">{teknologi.nama}</h2>
            </Link>
            <p className="jurusan-description">{teknologi.deskripsi}</p>
            <div className="jurusan-teori">
              <p>{teknologi.teori}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bab8;
