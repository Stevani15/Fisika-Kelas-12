import React from "react";
import '../styles/Bab.css';
import gambar1 from '../images/medan_magnetik.png'; // Gambar pertama
import gambar2 from '../images/induksi.jpg'; // Gambar kedua
import gambar3 from '../images/magnet3.jpg'; // Gambar ketiga
import gambar4 from '../images/lorentz.jpg'; // Gambar keempat
import gambar5 from '../images/magnet5.jpg'; // Gambar kelima
import Navbar from "./Navbar"; 


function Bab2() {
  const materi = [
    {
      gambar: gambar1,
      judul: "Pengertian Medan Magnetik",
      deskripsi:
        "Medan magnetik adalah wilayah di sekitar magnet atau arus listrik di mana gaya magnetik dapat dirasakan. Medan magnetik dihasilkan oleh muatan listrik yang bergerak (arus listrik) atau oleh bahan magnetik. Medan ini digambarkan menggunakan garis-garis medan magnet."
    },
    {
      gambar: gambar2,
      judul: "Medan Magnetik di Sekitar Kawat Lurus",
      deskripsi:
        "Rumus: B = (μ₀ * I) / (2 * π * r). Dimana B adalah medan magnetik, μ₀ adalah permeabilitas vakum, I adalah arus listrik, dan r adalah jarak dari kawat."
    },
    {
      gambar: gambar3,
      judul: "Medan Magnetik di Pusat Lingkaran Arus",
      deskripsi:
        "Rumus: B = (μ₀ * I) / (2 * R). Dimana B adalah medan magnetik, μ₀ adalah permeabilitas vakum, I adalah arus listrik, dan R adalah jari-jari lingkaran."
    },
    {
      gambar: gambar4,
      judul: "Gaya Lorentz",
      deskripsi:
        "Rumus: F = q * v * B * sin(θ). Dimana F adalah gaya Lorentz, q adalah muatan listrik, v adalah kecepatan partikel, B adalah medan magnetik, dan θ adalah sudut antara vektor kecepatan dan medan magnet."
    },
    {
      gambar: gambar5,
      judul: "Fluks Magnetik",
      deskripsi:
        "Rumus: Φ = B * A * cos(θ). Dimana Φ adalah fluks magnetik, B adalah medan magnetik, A adalah luas permukaan, dan θ adalah sudut antara medan magnet dan normal permukaan."
    }
  ];

  return (
    <div className="jurusan-container">
      <Navbar />
      <h1>Medan Magnetik</h1>
      {materi.map((item, index) => (
        <div key={index} className="materi-card">
          <div className="image-container">
            <img src={item.gambar} alt={item.judul} className="materi-image" />
          </div>
          <div className="text-container">
            <h2>{item.judul}</h2>
            <p>{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bab2;
