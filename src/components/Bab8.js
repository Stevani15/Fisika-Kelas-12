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
      rumus: [
        {
          nama: "Kecepatan Gelombang Elektromagnetik",
          formula: "c = λ * f",
          keterangan: "c = kecepatan cahaya (3 x 10⁸ m/s), λ = panjang gelombang (m), f = frekuensi (Hz)."
        }
      ],
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
          deskripsi: "Digunakan untuk transmisi sinyal pada jarak jauh, seperti radio dan televisi.",
          rumus: "λ ≈ 10⁵ m hingga 1 m, f ≈ 3 kHz hingga 300 GHz."
        },
        {
          nama: "Gelombang Mikro",
          deskripsi: "Digunakan dalam oven microwave dan komunikasi satelit. Ketika diserap oleh benda, akan menyebabkan pemanasan.",
          rumus: "λ ≈ 1 m hingga 1 mm, f ≈ 300 MHz hingga 300 GHz."
        },
        {
          nama: "Sinar Inframerah",
          deskripsi: "Tidak terlihat oleh mata manusia, tetapi dapat dirasakan sebagai panas. Digunakan dalam remote control dan pemanas.",
          rumus: "λ ≈ 1 mm hingga 700 nm, f ≈ 300 GHz hingga 430 THz."
        },
        {
          nama: "Cahaya Tampak",
          deskripsi: "Spektrum cahaya yang dapat dilihat oleh mata manusia.",
          rumus: "λ ≈ 700 nm hingga 400 nm, f ≈ 430 THz hingga 750 THz."
        },
        {
          nama: "Sinar Ultraviolet",
          deskripsi: "Dapat menyebabkan kulit terbakar. Sumber utama adalah matahari.",
          rumus: "λ ≈ 400 nm hingga 10 nm, f ≈ 750 THz hingga 30 PHz."
        },
        {
          nama: "Sinar X",
          deskripsi: "Digunakan dalam bidang medis untuk mengambil gambar tulang.",
          rumus: "λ ≈ 10 nm hingga 0.01 nm, f ≈ 30 PHz hingga 30 EHz."
        },
        {
          nama: "Sinar Gamma",
          deskripsi: "Memiliki frekuensi tertinggi dan daya tembus terbesar. Dihasilkan oleh proses radioaktif.",
          rumus: "λ < 0.01 nm, f > 30 EHz."
        }
      ]
    }
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
              {materi.rumus && (
                <ul>
                  {materi.rumus.map((rumus, rumusIndex) => (
                    <li key={rumusIndex}>
                      <strong>{rumus.nama}:</strong> {rumus.formula} ({rumus.keterangan})
                    </li>
                  ))}
                </ul>
              )}
              {materi.subMateri && (
                <ul>
                  {materi.subMateri.map((subMateri, subIndex) => (
                    <li key={subIndex}>
                      <strong>{subMateri.nama}:</strong> {subMateri.deskripsi}
                      {subMateri.rumus && <p><em>Rumus:</em> {subMateri.rumus}</p>}
                    </li>
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
