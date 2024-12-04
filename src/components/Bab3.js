

import React, { useState } from "react";
import '../styles/Bab3.css';


function Bab3() {
  const [mass, setMass] = useState("");
  const [velocity, setVelocity] = useState("");
  const [height, setHeight] = useState("");
  const [kineticEnergy, setKineticEnergy] = useState(null);
  const [potentialEnergy, setPotentialEnergy] = useState(null);
  const [mechanicalEnergy, setMechanicalEnergy] = useState(null);

  const g = 9.8; // Gravitasi (m/s^2)

  const calculateKineticEnergy = () => {
    const m = parseFloat(mass);
    const v = parseFloat(velocity);
    if (!isNaN(m) && !isNaN(v)) {
      setKineticEnergy(0.5 * m * v * v);
    } else {
      alert("Masukkan nilai yang valid untuk massa dan kecepatan!");
    }
  };

  const calculatePotentialEnergy = () => {
    const m = parseFloat(mass);
    const h = parseFloat(height);
    if (!isNaN(m) && !isNaN(h)) {
      setPotentialEnergy(m * g * h);
    } else {
      alert("Masukkan nilai yang valid untuk massa dan tinggi!");
    }
  };

  const calculateMechanicalEnergy = () => {
    if (kineticEnergy !== null && potentialEnergy !== null) {
      setMechanicalEnergy(kineticEnergy + potentialEnergy);
    } else {
      alert("Hitung energi kinetik dan energi potensial terlebih dahulu!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Sumber Energi dan Energi</h1>

      {/* Teori Sumber Energi */}
      <section className="content">
        <h2>Teori Sumber Energi</h2>
        <p>
          Energi adalah kemampuan untuk melakukan kerja. Dalam kehidupan sehari-hari, energi
          berasal dari berbagai sumber yang dapat diklasifikasikan menjadi dua kategori utama:
          terbarukan dan tidak terbarukan.
        </p>
        <ul>
          <li>
            <strong>Sumber Energi Terbarukan:</strong>
            <ul>
              <li>
                <strong>Energi Surya:</strong> Energi yang berasal dari sinar matahari dan dapat
                digunakan untuk menghasilkan listrik menggunakan panel surya.
              </li>
              <li>
                <strong>Energi Angin:</strong> Energi yang dihasilkan dari angin melalui turbin
                angin.
              </li>
              <li>
                <strong>Energi Air:</strong> Energi yang berasal dari air yang mengalir, seperti
                pada bendungan pembangkit listrik tenaga air.
              </li>
              <li>
                <strong>Biomassa:</strong> Energi yang diperoleh dari bahan organik seperti kayu,
                tanaman, atau limbah hewan.
              </li>
            </ul>
          </li>
          <li>
            <strong>Sumber Energi Tidak Terbarukan:</strong>
            <ul>
              <li>
                <strong>Batu Bara:</strong> Sumber energi fosil yang digunakan untuk pembangkit
                listrik.
              </li>
              <li>
                <strong>Minyak Bumi:</strong> Digunakan sebagai bahan bakar untuk kendaraan dan
                produksi energi.
              </li>
              <li>
                <strong>Gas Alam:</strong> Sumber energi fosil yang bersih dan sering digunakan
                untuk memasak serta pembangkit listrik.
              </li>
            </ul>
          </li>
        </ul>
        <img
          className="section-image"
          src="https://via.placeholder.com/500"
          alt="Ilustrasi Sumber Energi"
        />
        <p className="image-caption">Gambar: Contoh berbagai sumber energi.</p>
      </section>

      {/* Teori Energi */}
      <section className="content">
        <h2>Teori Energi</h2>
        <p>
          Energi dalam fisika dikategorikan menjadi berbagai jenis, di antaranya:
        </p>
        <ul>
          <li>
            <strong>Energi Kinetik:</strong> Energi yang dimiliki oleh benda karena gerakannya.
          </li>
          <li>
            <strong>Energi Potensial:</strong> Energi yang dimiliki oleh benda karena posisinya
            terhadap medan gravitasi.
          </li>
          <li>
            <strong>Energi Mekanik:</strong> Kombinasi dari energi kinetik dan energi potensial
            suatu benda.
          </li>
        </ul>
        <p>
          <strong>Rumus Energi:</strong>
        </p>
        <ul>
          <li>
            <strong>Energi Kinetik:</strong> 
            E<sub>k</sub> = ½ × m × v<sup>2</sup>
          </li>
          <li>
            <strong>Energi Potensial:</strong> 
            E<sub>p</sub> = m × g × h
          </li>
          <li>
            <strong>Energi Mekanik:</strong> 
            E<sub>m</sub> = E<sub>k</sub> + E<sub>p</sub>
          </li>
        </ul>
      </section>

      {/* Kalkulator */}
      <section className="content">
        <h2>Kalkulator Energi</h2>
        <input
          type="number"
          placeholder="Massa (kg)"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
        <input
          type="number"
          placeholder="Kecepatan (m/s)"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tinggi (m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateKineticEnergy}>Hitung Energi Kinetik</button>
        {kineticEnergy !== null && (
          <p className="result">
            Energi Kinetik: <strong>{kineticEnergy.toFixed(2)} Joule</strong>
          </p>
        )}

        <button onClick={calculatePotentialEnergy}>Hitung Energi Potensial</button>
        {potentialEnergy !== null && (
          <p className="result">
            Energi Potensial: <strong>{potentialEnergy.toFixed(2)} Joule</strong>
          </p>
        )}

        <button onClick={calculateMechanicalEnergy}>Hitung Energi Mekanik</button>
        {mechanicalEnergy !== null && (
          <p className="result">
            Energi Mekanik: <strong>{mechanicalEnergy.toFixed(2)} Joule</strong>
          </p>
        )}
      </section>
    </div>
  );
}

export default  Bab3;

