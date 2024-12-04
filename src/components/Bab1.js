import React from "react";
import '../styles/Bab.css';
import gambar1 from '../images/induksi_magnetik.png'; // Gambar pertama
import gambar2 from '../images/hukum_faraday.png'; // Gambar kedua
import gambar3 from '../images/hukum_lenz.png'; // Gambar ketiga
import gambar4 from '../images/fluks_magnetik.png'; // Gambar keempat
import gambar5 from '../images/aplikasi_magnet.png'; // Gambar kelima

function Bab1() {
  const materi = [
    {
      gambar: gambar1,
      judul: "Pengertian Induksi Elektromagnetik",
      deskripsi:
        "Induksi elektromagnetik adalah fenomena di mana perubahan medan magnet di sekitar konduktor menghasilkan arus listrik. Fenomena ini ditemukan oleh Michael Faraday dan menjadi dasar bagi berbagai aplikasi, seperti generator listrik dan transformator."
    },
    {
      gambar: gambar2,
      judul: "Hukum Faraday",
      deskripsi:
        "Hukum Faraday menjelaskan bahwa GGL (gaya gerak listrik) yang diinduksi sebanding dengan laju perubahan fluks magnetik. Rumus:\n" +
        "ε = -dΦ/dt\n" +
        "Dimana:\n" +
        "ε = GGL (volt),\n" +
        "Φ = fluks magnetik (weber),\n" +
        "t = waktu (detik)."
    },
    {
      gambar: gambar3,
      judul: "Hukum Lenz",
      deskripsi:
        "Hukum Lenz menyatakan bahwa arah arus yang diinduksi selalu sedemikian rupa sehingga menghasilkan medan magnet yang menentang perubahan fluks magnetik. Hal ini ditunjukkan oleh tanda negatif dalam hukum Faraday: ε = -dΦ/dt."
    },
    {
      gambar: gambar4,
      judul: "Rumus Fluks Magnetik",
      deskripsi:
        "Fluks magnetik adalah jumlah garis medan magnet yang melewati suatu permukaan. Rumus:\n" +
        "Φ = B * A * cos(θ)\n" +
        "Dimana:\n" +
        "Φ = fluks magnetik (weber),\n" +
        "B = medan magnet (tesla),\n" +
        "A = luas permukaan (m²),\n" +
        "θ = sudut antara medan magnet dan normal permukaan."
    },
    {
      gambar: gambar5,
      judul: "Aplikasi Induksi Elektromagnetik",
      deskripsi:
        "Induksi elektromagnetik digunakan dalam berbagai perangkat, seperti:\n" +
        "- Generator listrik: Mengubah energi mekanik menjadi energi listrik.\n" +
        "- Transformator: Mengubah tegangan listrik dalam sistem AC.\n" +
        "- Motor listrik: Mengubah energi listrik menjadi energi mekanik."
    }
  ];

  return (
    <div className="jurusan-container">
      <h1>Induksi Elektromagnetik</h1>
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

export default Bab1;
