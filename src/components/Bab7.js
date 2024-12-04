import React from "react";
import '../styles/Bab.css';
import rangkaianArusSearahImage1 from '../images/rangkaian_arus_searah1.png';
import rangkaianArusSearahImage2 from '../images/rangkaian_arus_searah2.png';
import rangkaianArusSearahImage3 from '../images/rangkaian_arus_searah3.png';

function Bab7() {
  const materiData = [
    {
      nama: "Pengertian Rangkaian Arus Searah",
      deskripsi:
        "Rangkaian arus searah (DC) adalah rangkaian listrik di mana arus mengalir dalam satu arah saja. Sumber utama arus searah adalah baterai atau sel surya, dan sering digunakan dalam perangkat elektronik kecil hingga besar.",
      gambar: rangkaianArusSearahImage1,
      path: "/rangkaian-arus-searah/pengertian"
    },
    {
      nama: "Rumus-Rumus pada Rangkaian Arus Searah",
      deskripsi:
        "Dalam rangkaian arus searah, beberapa rumus penting yang sering digunakan adalah sebagai berikut:",
      subMateri: [
        {
          nama: "Hukum Ohm",
          deskripsi: "V = I × R"
        },
        {
          nama: "Daya Listrik",
          deskripsi: "P = V × I"
        },
        {
          nama: "Energi Listrik",
          deskripsi: "W = P × t"
        },
        {
          nama: "Kapasitor dalam Rangkaian Seri",
          deskripsi: "1 / C_total = 1 / C_1 + 1 / C_2 + ... + 1 / C_n"
        },
        {
          nama: "Kapasitor dalam Rangkaian Paralel",
          deskripsi: "C_total = C_1 + C_2 + ... + C_n"
        }
      ],
      gambar: rangkaianArusSearahImage2
    },
    {
      nama: "Contoh Aplikasi Rangkaian Arus Searah",
      deskripsi:
        "Rangkaian arus searah sering digunakan dalam berbagai perangkat, seperti alat elektronik rumah tangga, senter, dan perangkat portabel lainnya. Sumber dayanya biasanya berupa baterai atau sel surya.",
      gambar: rangkaianArusSearahImage3,
      path: "/rangkaian-arus-searah/aplikasi"
    }
  ];

  return (
    <div className="jurusan-container">
      <h1>Materi Rangkaian Arus Searah</h1>
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

export default Bab7;
