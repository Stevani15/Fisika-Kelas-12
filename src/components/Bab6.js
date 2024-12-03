import React, { useState } from "react";


const ArusBolakBalik = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="title">Arus Bolak-Balik (AC)</h1>
        <p className="description">
          Arus bolak-balik (AC) adalah arus listrik yang arah dan besarannya berubah secara periodik terhadap waktu.
          Sistem ini digunakan dalam sebagian besar aplikasi listrik modern karena fleksibilitas dan efisiensinya.
        </p>

        {/* Pengenalan */}
        <div className="section">
          <div
            className={`section-title ${activeSection === "introduction" ? "active" : ""}`}
            onClick={() => handleSectionClick("introduction")}
          >
            Pengenalan
          </div>
          {activeSection === "introduction" && (
            <div className="section-content">
              <p>
                Listrik arus bolak-balik ditemukan oleh Nikola Tesla dan menjadi dasar sistem distribusi listrik
                modern. Dibandingkan dengan arus searah (DC), arus AC lebih mudah ditransmisikan dan dapat digunakan
                untuk keperluan yang lebih luas.
              </p>
              <p>
                Karakteristik utama arus AC meliputi:
              </p>
              <ul>
                <li>
                  Perubahan arah secara periodik: Arus AC berubah dari positif ke negatif dalam pola gelombang sinusoidal.
                </li>
                <li>
                  Efisiensi tinggi: Dengan penggunaan transformator, arus AC dapat diubah menjadi tegangan yang lebih
                  tinggi atau lebih rendah untuk berbagai keperluan.
                </li>
                <li>
                  Universal: Arus AC digunakan di rumah, industri, dan transportasi.
                </li>
              </ul>
              <div className="image-container">
                <img
                  src="https://ik.trn.asia/uploads/2023/06/1686916662274.jpeg"
                  alt="Nikola Tesla"
                  className="image"
                />
                <p className="image-caption">Nikola Tesla, Penemu Arus Bolak-Balik</p>
              </div>
            </div>
          )}
        </div>

    
        <div className="section">
          <div
            className={`section-title ${activeSection === "sinusoidal" ? "active" : ""}`}
            onClick={() => handleSectionClick("sinusoidal")}
          >
            Gelombang Sinusoidal
          </div>
          {activeSection === "sinusoidal" && (
            <div className="section-content">
              <p>
                Gelombang sinusoidal adalah bentuk gelombang standar arus AC. Setiap gelombang terdiri dari siklus
                lengkap, yang meliputi bagian positif dan negatif.
              </p>
              <p>
                Persamaan matematisnya adalah:
              </p>
              <pre>
                i(t) = I<sub>maks</sub> sin(ωt)
              </pre>
              <p>Di mana:</p>
              <ul>
                <li>
                  i(t): Arus sesaat (Ampere)
                </li>
                <li>
                  I<sub>maks</sub>: Amplitudo arus (Ampere)
                </li>
                <li>
                  ω: Kecepatan sudut, dengan ω = 2πf
                </li>
                <li>
                  t: Waktu (detik)
                </li>
              </ul>
              <p>
                Kecepatan sudut berkaitan dengan frekuensi dan menggambarkan kecepatan perubahan arus dalam satu
                siklus.
              </p>
              <div className="image-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT714-OEul2EgZZRvKwfgeXgY9oJSscIImmkA&s"
                  alt="Gelombang Sinusoidal"
                  className="image"
                />
                <p className="image-caption">Ilustrasi Gelombang Sinusoidal</p>
              </div>
            </div>
          )}
        </div>

        <div className="section">
          <div
            className={`section-title ${activeSection === "rms" ? "active" : ""}`}
            onClick={() => handleSectionClick("rms")}
          >
            RMS (Root Mean Square)
          </div>
          {activeSection === "rms" && (
            <div className="section-content">
              <p>
                RMS (Root Mean Square) adalah nilai rata-rata kuadrat dari arus atau tegangan bolak-balik. Nilai ini
                menggambarkan energi yang dihasilkan oleh arus AC sebanding dengan arus DC.
              </p>
              <p>
                Rumus RMS untuk arus:
              </p>
              <pre>
                I<sub>rms</sub> = I<sub>maks</sub> / √2
              </pre>
              <p>
                Rumus RMS untuk tegangan:
              </p>
              <pre>
                V<sub>rms</sub> = V<sub>maks</sub> / √2
              </pre>
              <p>
                Contohnya, jika tegangan puncak (V<sub>maks</sub>) adalah 311 V, maka tegangan RMS adalah sekitar 220
                V, yang merupakan tegangan standar di rumah tangga.
              </p>
              <div className="image-container">
                <img
                  src="https://i.ytimg.com/vi/sJ97AKhmN5E/sddefault.jpg"
                  alt="RMS Calculation"
                  className="image"
                />
                <p className="image-caption">Rumus Perhitungan RMS</p>
              </div>
            </div>
          )}
        </div>

    
        <div className="section">
          <div
            className={`section-title ${activeSection === "advantages" ? "active" : ""}`}
            onClick={() => handleSectionClick("advantages")}
          >
            Keunggulan dan Penerapan Arus Bolak-Balik
          </div>
          {activeSection === "advantages" && (
            <div className="section-content">
              <p>Arus bolak-balik memiliki berbagai keunggulan:</p>
              <ul>
                <li>
                  Efisiensi Tinggi : AC dapat ditransmisikan dengan tegangan tinggi, mengurangi kerugian daya pada
                  kabel.
                </li>
                <li>
                  Kemudahan Konversi : Transformator memungkinkan perubahan tegangan sesuai kebutuhan.
                </li>
                <li>
                  Skalabilitas : Digunakan dalam rumah tangga, industri, dan transportasi.
                </li>
              </ul>
              <p>Penerapan arus AC meliputi:</p>
              <ul>
                <li>
                  Rumah Tangga : Peralatan listrik seperti lampu, televisi, dan kipas angin.
                </li>
                <li>
                  Industri : Mesin-mesin besar dan generator.
                </li>
                <li>
                  Transportasi : Kereta listrik dan jalur transmisi jarak jauh.
                </li>
              </ul>
              <div className="image-container">
                <img
                  src="https://0701.static.prezi.com/preview/v2/k6bcfk2f2vmvhcasiaymhcqgud6jc3sachvcdoaizecfr3dnitcq_3_0.png"
                  alt="Penerapan Arus AC"
                  className="image"
                />
                <p className="image-caption">Beragam Penerapan AC</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArusBolakBalik;
