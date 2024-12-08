import React, { useState } from "react";
import '../styles/Bab6.css';
import Navbar from "./Navbar"; 

const Bab6 = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? null : section));
  };

  const sections = [
    {
      

      id: "introduction",
      title: "Pengenalan Arus Bolak-Balik (AC)",
      content: (
        <>
          <p>
            Arus bolak-balik (AC) adalah jenis arus listrik yang arah dan besarannya berubah secara periodik terhadap
            waktu. Sistem ini ditemukan oleh Nikola Tesla dan merupakan dasar bagi sistem distribusi listrik modern.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG"
            alt="Nikola Tesla"
            className="section-image"
          />
          <p className="image-caption">Nikola Tesla, penemu sistem arus bolak-balik</p>
        </>
      ),
    },
    {
      id: "sinusoidal",
      title: "Karakteristik Gelombang Sinusoidal",
      content: (
        <>
          <p>
            Gelombang sinusoidal adalah bentuk standar dari arus bolak-balik. Bentuk gelombang ini dicirikan oleh
            amplitudo maksimum dan frekuensi tertentu.
          </p>
          <pre>
            i(t) = I<sub>maks</sub> sin(ωt)
          </pre>
          <img
            src="https://trafoinstrumen.wordpress.com/wp-content/uploads/2015/04/gambar14.jpg"
            alt="Gelombang Sinusoidal"
            className="section-image"
          />
          <p className="image-caption">Ilustrasi gelombang sinusoidal AC</p>
        </>
      ),
    },
    {
      id: "rms",
      title: "Konsep RMS (Root Mean Square)",
      content: (
        <>
          <p>
            RMS adalah nilai efektif dari arus AC, menggambarkan energi yang dihasilkan sebanding dengan arus DC
            konstan. Nilai RMS sangat penting untuk menghitung daya listrik.
          </p>
          <pre>
            I<sub>rms</sub> = I<sub>maks</sub> / √2
          </pre>
          <img
            src="https://i.ytimg.com/vi/sJ97AKhmN5E/sddefault.jpg"
            alt="Grafik RMS"
            className="section-image"
          />
          <p className="image-caption">Ilustrasi RMS dari gelombang sinusoidal</p>
        </>
      ),
    },
    {
      id: "power-factor",
      title: "Faktor Daya (Power Factor)",
      content: (
        <>
          <p>
            Faktor daya adalah rasio antara daya nyata (Watt) dengan daya semu (VA) dalam sistem AC. Faktor ini
            menunjukkan efisiensi penggunaan energi.
          </p>
          <pre>
            PF = P / S
          </pre>
          <img
            src="https://akupintar.id/documents/20143/0/keterangan+cos+psi+%281%29.png/da8038c1-60f5-3720-64dc-2d33626619b6?t=1641955648233"
            alt="Faktor Daya"
            className="section-image"
          />
          <p className="image-caption">Diagram hubungan antara faktor daya dan efisiensi</p>
        </>
      ),
    },
    {
      id: "transformer",
      title: "Transformator dan Penerapan",
      content: (
        <>
          <p>
            Transformator memungkinkan perubahan tegangan listrik untuk distribusi jarak jauh. Teknologi ini sangat
            penting dalam meminimalkan kehilangan daya selama transmisi.
          </p>
          <img
            src="https://asset.kompas.com/crops/dAljimOhkw2syRjaEA1tKsINJmI=/2x38:663x368/780x390/data/photo/2022/02/07/6200cc2e92118.jpg"
            alt="Transformator"
            className="section-image"
          />
          <p className="image-caption">Ilustrasi transformator dalam distribusi listrik</p>
        </>
      ),
    },
  ];

  return (
    <div className="main-container">
      <div className="content-container">
      <Navbar />
        <h1 className="title">Arus Bolak-Balik (AC)</h1>
        <p className="description">
          Arus bolak-balik (AC) adalah arus listrik yang arah dan besarannya berubah secara periodik terhadap waktu.
        </p>
        {sections.map((section) => (
          <div className="section" key={section.id}>
            <div
              className={`section-title ${activeSection === section.id ? "active" : ""}`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.title}
            </div>
            <div className={`section-content ${activeSection === section.id ? "active" : ""}`}>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bab6;

