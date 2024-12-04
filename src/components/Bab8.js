import React from "react";
import '../styles/Bab.css';
import gelombangImage from '../images/gelombang_elektromagnetik.png';
import SpektrumGelombangElektromagnetik from '../images/SpektrumGelombangElektromagnetik.png';

function Bab8() {
  const materiData = [
    {
      nama: "Pengertian Gelombang Elektromagnetik",
      deskripsi:
        "Gelombang elektromagnetik adalah gelombang yang dapat merambat tanpa memerlukan medium perantara. Gelombang ini terdiri dari medan listrik dan medan magnet yang saling tegak lurus dan berosilasi. Energi elektromagnetik merambat dalam bentuk gelombang dengan karakteristik seperti panjang gelombang, amplitudo, frekuensi, dan kecepatan.",
      gambar: gelombangImage,
      path: "/gelombang-elektromagnetik/pengertian"
    },
    {
      nama: "Spektrum Gelombang Elektromagnetik",
      deskripsi:
        "Spektrum gelombang elektromagnetik terbagi menjadi beberapa jenis berdasarkan panjang gelombang dan frekuensi. Urutannya dari panjang gelombang terbesar (frekuensi terkecil) hingga terkecil (frekuensi terbesar) adalah sebagai berikut:",
      gambar: SpektrumGelombangElektromagnetik,
      subMateri: [
        {
          nama: "Gelombang Radio",
          deskripsi: "Digunakan untuk transmisi sinyal pada jarak jauh, seperti radio dan televisi."
        },
        {
          nama: "Gelombang Mikro",
          deskripsi: "Digunakan dalam oven microwave dan komunikasi satelit. Ketika diserap oleh benda, akan menyebabkan pemanasan."
        },
        {
          nama: "Sinar Inframerah",
          deskripsi: "Tidak terlihat oleh mata manusia, tetapi dapat dirasakan sebagai panas. Digunakan dalam remote control dan pemanas."
        },
        {
          nama: "Cahaya Tampak",
          deskripsi: "Spektrum cahaya yang dapat dilihat oleh mata manusia."
        },
        {
          nama: "Sinar Ultraviolet",
          deskripsi: "Dapat menyebabkan kulit terbakar. Sumber utama adalah matahari."
        },
        {
          nama: "Sinar X",
          deskripsi: "Digunakan dalam bidang medis untuk mengambil gambar tulang."
        },
        {
          nama: "Sinar Gamma",
          deskripsi: "Memiliki frekuensi tertinggi dan daya tembus terbesar. Dihasilkan oleh proses radioaktif."
        }
      ]
    },
  ];

  return (
    <div className="jurusan-container">
      <h1>Materi Gelombang Elektromagnetik</h1>
      <div className="materi-container">
        {materiData.map((materi, index) => (
          <div key={index} className="materi-card">
            <div className="image-container">
              <img src={materi.gambar} alt={materi.nama} className="materi-image" />
            </div>
            <div className="text-container">
              <h2>{materi.nama}</h2>
              <p>{materi.deskripsi}</p>
              {materi.subMateri && (
                <ul>
                  {materi.subMateri.map((subMateri, subIndex) => (
                    <li key={subIndex}>{subMateri.nama}: {subMateri.deskripsi}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bab8;
