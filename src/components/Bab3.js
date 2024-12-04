import React, { useState } from "react";
import '../styles/Bab3.css';

function SumberEnergi() {
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
      <h1 className="title">Sumber Energi</h1>

      {/* Teori */}
      <section className="content">
        <h2>Teori Sumber Energi</h2>
        <p>
          Energi adalah kemampuan untuk melakukan kerja. Dalam fisika, energi dapat dibagi menjadi
          beberapa jenis seperti energi kinetik, energi potensial, dan energi mekanik.
        </p>
        <p>
          <strong>Jenis Energi:</strong>
        </p>
        <ul>
          <li>
            <strong>Energi Kinetik:</strong> Energi yang dimiliki oleh benda karena geraknya.
          </li>
          <li>
            <strong>Energi Potensial:</strong> Energi yang dimiliki oleh benda karena posisinya.
          </li>
          <li>
            <strong>Energi Mekanik:</strong> Total energi yang dimiliki oleh benda, yaitu gabungan
            antara energi kinetik dan energi potensial.
          </li>
        </ul>
        <img
          className="section-image"
          src="https://via.placeholder.com/500"
          alt="Sumber Energi"
        />
        <p className="image-caption">
          Gambar: Ilustrasi energi kinetik dan energi potensial.
        </p>
      </section>

      {/* Rumus */}
      <section className="content">
        <h2>Rumus Energi</h2>
        <p>
          <strong>Energi Kinetik (E<sub>k</sub>):</strong> 
          <br />
          E<sub>k</sub> = ½ × m × v<sup>2</sup>
        </p>
        <p>
          <strong>Energi Potensial (E<sub>p</sub>):</strong> 
          <br />
          E<sub>p</sub> = m × g × h
        </p>
        <p>
          <strong>Energi Mekanik (E<sub>m</sub>):</strong> 
          <br />
          E<sub>m</sub> = E<sub>k</sub> + E<sub>p</sub>
        </p>
      </section>

      {/* Kalkulator */}
      <section className="content">
        <h2>Kalkulator Energi</h2>

        {/* Input Massa */}
        <input
          type="number"
          placeholder="Massa (kg)"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />

        {/* Input Kecepatan */}
        <input
          type="number"
          placeholder="Kecepatan (m/s)"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
        />

        {/* Input Tinggi */}
        <input
          type="number"
          placeholder="Tinggi (m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        {/* Tombol Energi Kinetik */}
        <button onClick={calculateKineticEnergy}>Hitung Energi Kinetik</button>
        {kineticEnergy !== null && (
          <p className="result">
            Energi Kinetik: <strong>{kineticEnergy.toFixed(2)} Joule</strong>
          </p>
        )}

        {/* Tombol Energi Potensial */}
        <button onClick={calculatePotentialEnergy}>Hitung Energi Potensial</button>
        {potentialEnergy !== null && (
          <p className="result">
            Energi Potensial: <strong>{potentialEnergy.toFixed(2)} Joule</strong>
          </p>
        )}

        {/* Tombol Energi Mekanik */}
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

export default SumberEnergi;
