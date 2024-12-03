import React from "react";
import '../styles/Bab.css';
import gbdsimages from '../images/induksi.jpg'; // Gambar induksi elektromagnetik

function Bab1() {
  return (
    <div className="jurusan-container">
      <h1>Induksi Elektromagnetik</h1>
      <div className="materi-card">
        <div className="image-container">
          <img src={gbdsimages} alt="Induksi Elektromagnetik" className="materi-image" />
        </div>
        <div className="text-container">
          <h2>Pengertian Induksi Elektromagnetik</h2>
          <p>
            Induksi elektromagnetik adalah fenomena fisika di mana sebuah perubahan medan magnet dapat menghasilkan arus listrik dalam konduktor yang berada di sekitar medan magnet tersebut. Fenomena ini ditemukan oleh Michael Faraday dan menjadi dasar bagi banyak teknologi seperti generator listrik dan transformator.
          </p>
          <h3>Rumus Induksi Elektromagnetik</h3>
          <p>
            Rumus untuk induksi elektromagnetik dapat dijelaskan dengan hukum Faraday:
          </p>
          <pre>
            <code>
              ε = -dΦ/dt
            </code>
          </pre>
          <p>
            Dimana:
            <ul>
              <li>ε = Gaya gerak listrik induksi (GGL) dalam volt</li>
              <li>dΦ = Perubahan fluks magnetik dalam weber</li>
              <li>dt = Waktu perubahan fluks magnetik</li>
            </ul>
          </p>
          <p>
            Negatif dalam rumus ini menunjukkan arah gaya gerak listrik yang berlawanan dengan perubahan fluks magnetik, sesuai dengan hukum Lenz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bab1;
