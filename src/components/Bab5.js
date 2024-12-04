import React, { useState } from "react";
import '../styles/Bab5.css'; // Pastikan path ini sesuai dengan struktur proyek Anda

const Bab5 = () => {
  // React state to manage which section is active
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    console.log('Toggling section:', section); // Debugging
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="title">Fisika Modern</h1>

        {/* Section 1 - Pengertian Fisika Modern */}
        <div className="section">
          <h2 className="section-title" onClick={() => toggleSection("pengertian")}>
            Pengertian Fisika Modern
          </h2>
          <div className={`section-content ${activeSection === "pengertian" ? 'active' : ''}`}>
            <p>
              Fisika modern adalah cabang dari ilmu fisika yang mengembangkan konsep-konsep dasar fisika melalui teori-teori yang muncul di awal abad ke-20, 
              yang secara signifikan berbeda dengan fisika klasik. Beberapa konsep utama dalam fisika modern adalah teori relativitas khusus dan umum oleh Albert Einstein,
              serta teori mekanika kuantum oleh Niels Bohr, Werner Heisenberg, dan Erwin Schrödinger. Fisika modern menekankan pada fenomena-fenomena yang tidak dapat dijelaskan 
              oleh hukum fisika klasik.
            </p>
            <p>
              Salah satu karakteristik utama fisika modern adalah pemahaman bahwa objek mikroskopis, seperti atom dan partikel subatomik, mengikuti hukum yang berbeda dari hukum fisika makroskopis.
              Fisika modern mengubah cara kita memahami alam semesta dan membuka pintu bagi banyak penemuan baru di bidang teknologi.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
              alt="Albert Einstein"
              className="section-image"
            />
            <p className="image-caption">Albert Einstein, Penemu Teori Relativitas</p>
          </div>
        </div>

        {/* Section 2 - Cabang-Cabang Fisika Modern */}
        <div className="section">
          <h2 className="section-title" onClick={() => toggleSection("cabang")}>
            Cabang-Cabang Fisika Modern
          </h2>
          <div className={`section-content ${activeSection === "cabang" ? 'active' : ''}`}>
            <p>
              Fisika modern mencakup banyak cabang ilmu yang memperluas wawasan kita tentang alam semesta. Beberapa cabang utama dalam fisika modern antara lain:
            </p>
            <ul>
              <li><b>Mekanika Kuantum</b>: Mempelajari perilaku partikel pada skala mikroskopis.</li>
              <li><b>Teori Relativitas</b>: Menganalisis ruang, waktu, dan gravitasi pada kecepatan mendekati cahaya dan benda-benda masif.</li>
              <li><b>Fisika Partikel</b>: Mempelajari partikel dasar yang membentuk materi dan gaya yang mempengaruhinya.</li>
              <li><b>Fisika Nuklir</b>: Fokus pada inti atom dan reaksi nuklir yang terjadi di dalamnya.</li>
              <li><b>Fisika Kuantum Optik</b>: Menggabungkan mekanika kuantum dengan fenomena optik, berfokus pada interaksi cahaya dan materi pada tingkat submikroskopis.</li>
            </ul>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Photon-particle-wave.jpg"
              alt="Foton dan Kuantum Energi"
              className="section-image"
            />
            <p className="image-caption">Konsep dualitas cahaya: partikel dan gelombang.</p>
          </div>
        </div>

        {/* Section 3 - Aplikasi Fisika Modern */}
        <div className="section">
          <h2 className="section-title" onClick={() => toggleSection("aplikasi")}>
            Aplikasi Fisika Modern
          </h2>
          <div className={`section-content ${activeSection === "aplikasi" ? 'active' : ''}`}>
            <p>
              Aplikasi fisika modern telah membawa berbagai inovasi dalam bidang teknologi. Beberapa contoh penerapan teori-teori fisika modern adalah:
            </p>
            <ul>
              <li><b>Komputer Kuantum</b>: Menggunakan prinsip mekanika kuantum untuk pemrosesan data yang lebih cepat dan aman.</li>
              <li><b>Energi Nuklir</b>: Digunakan dalam pembangkit listrik tenaga nuklir untuk menghasilkan energi listrik.</li>
              <li><b>Teknologi Satelit</b>: Memanfaatkan teori relativitas untuk perhitungan orbit dan komunikasi jarak jauh.</li>
              <li><b>Elektronik Modern</b>: Perangkat seperti semikonduktor dan transistor yang memungkinkan perkembangan komputer, telekomunikasi, dan perangkat mobile.</li>
            </ul>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Quantum_computer.jpg"
              alt="Komputer Kuantum"
              className="section-image"
            />
            <p className="image-caption">Ilustrasi komputer kuantum yang lebih canggih.</p>
          </div>
        </div>

        {/* Section 4 - Gambar Pendukung */}
        <div className="section">
          <h2 className="section-title" onClick={() => toggleSection("gambar")}>
            Gambar Pendukung
          </h2>
          <div className={`section-content ${activeSection === "gambar" ? 'active' : ''}`}>
            <p>
              Berikut adalah beberapa gambar yang mendukung konsep-konsep dalam fisika modern.
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Quantum_physics_diagram.png"
              alt="Diagram Fisika Kuantum"
              className="section-image"
            />
            <p className="image-caption">Diagram Fisika Kuantum yang menggambarkan prinsip dasar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bab5;
