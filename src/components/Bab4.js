import React from "react";
import '../styles/Bab4.css';


function TeknologiDigital() {
  const binaryToDecimal = (binary) => parseInt(binary, 2);
  const decimalToBinary = (decimal) => (decimal >>> 0).toString(2);

  return (
    <div className="container">
      <h1 className="title">Teori Teknologi Digital</h1>

      {/* Teori Section */}
      <section className="content">
        <h2>Teori</h2>
        <p>
          Teknologi Digital adalah teknologi yang memanfaatkan data dalam bentuk digital, yaitu angka
          biner (0 dan 1). Teknologi ini adalah dasar dari komputer modern, perangkat lunak,
          komunikasi digital, dan internet. Data biner merepresentasikan semua jenis informasi,
          termasuk teks, gambar, suara, dan video.
        </p>
        <p>
          Dalam teknologi digital, sistem menggunakan logika Boolean yang memiliki dua nilai utama:
          **True (1)** dan **False (0)**. Teknologi digital memungkinkan pengolahan data dengan
          kecepatan dan efisiensi tinggi.
        </p>
      </section>

      {/* Rumus Section */}
      <section className="content">
        <h2>Rumus</h2>
        <p>
          1. <strong>Konversi Biner ke Desimal:</strong>
        </p>
        <p>
          <strong>
            Desimal = &Sigma; (digit × 2<sup>posisi</sup>)
          </strong>
        </p>
        <p>
          2. <strong>Konversi Desimal ke Biner:</strong>
        </p>
        <p>
          <strong>
            Biner = Desimal &divide; 2 (ulang hingga hasil pembagian = 0, baca hasil dari bawah ke atas)
          </strong>
        </p>
      </section>

      {/* Example Section */}
      <section className="content">
        <h2>Contoh:</h2>
        <p>1. Biner **1011** ke Desimal:</p>
        <ul>
          <li>1 × 2<sup>3</sup> = 8</li>
          <li>0 × 2<sup>2</sup> = 0</li>
          <li>1 × 2<sup>1</sup> = 2</li>
          <li>1 × 2<sup>0</sup> = 1</li>
        </ul>
        <p>
          Total: 8 + 0 + 2 + 1 = <strong>11</strong>
        </p>

        <p>2. Desimal **11** ke Biner:</p>
        <ul>
          <li>11 ÷ 2 = 5 (sisa 1)</li>
          <li>5 ÷ 2 = 2 (sisa 1)</li>
          <li>2 ÷ 2 = 1 (sisa 0)</li>
          <li>1 ÷ 2 = 0 (sisa 1)</li>
        </ul>
        <p>Baca dari bawah ke atas: <strong>1011</strong></p>
      </section>

      {/* Implementasi Rumus */}
      <section className="content">
        <h2>Implementasi Rumus</h2>
        <p>Masukkan angka untuk konversi:</p>
        <input type="text" placeholder="Masukkan angka biner atau desimal" id="numberInput" />
        <div className="button-group">
          <button
            onClick={() => {
              const number = document.getElementById("numberInput").value;
              const result = binaryToDecimal(number);
              alert(`Hasil konversi ke Desimal: ${result}`);
            }}
          >
            Konversi ke Desimal
          </button>
          <button
            onClick={() => {
              const number = parseInt(document.getElementById("numberInput").value);
              const result = decimalToBinary(number);
              alert(`Hasil konversi ke Biner: ${result}`);
            }}
          >
            Konversi ke Biner
          </button>
        </div>
      </section>
    </div>
  );
}

export default TeknologiDigital;
