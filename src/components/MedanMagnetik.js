// src/components/PhysicsMagneticField.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './SumberEnergi';
import './MedanMagnetik';
import './GelombangElektromagnetik';
import './InduksiElektromagnetik';
import './RangkaianArusBolakBalik'
import './RangkaianArusSearah';
import './TeknologiDigital';
import './FisikaModern';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function PhysicsMagneticField() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container className="mt-5 p-4" style={{ backgroundColor: '#f4f4f9', borderRadius: '8px' }}>
      <h2 className="text-center mb-4 font-weight-bold" style={{ color: '#2c3e50' }}>Medan Magnet</h2>
      <p className="lead text-center" style={{ fontStyle: 'italic', color: '#555' }}>
        "Menjelajahi Keajaiban Medan Magnet dalam Fisika"
      </p>

      {/* Foto terkait Medan Magnet */}
      <div className="text-center mb-4">
        <Card style={{ width: '80%', maxWidth: '600px', margin: '0 auto' }}>
          <Card.Img
            variant="top"
            src="/images/medan.png"  // Mengakses gambar di folder public/images
            alt="Medan Magnet"
            style={{
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Card>
      </div>

      {/* Button untuk Menampilkan / Menyembunyikan Informasi */}
      <div className="text-center mb-3">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setShowMore(!showMore)}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          {showMore ? 'Show Less' : 'Learn More'}
        </Button>
      </div>

      {/* Menampilkan Informasi Tambahan */}
      {showMore && (
        <div className="mt-4" style={{ animation: 'fadeIn 0.5s ease-in-out', color: '#333', fontSize: '18px', lineHeight: '1.8' }}>
          <h4>Pengertian Medan Magnet</h4>
          <p>
            Medan magnet adalah wilayah di sekitar benda bermagnet yang mempengaruhi benda lain yang bersifat magnetik. Medan magnet ini dapat digambarkan dengan garis-garis gaya magnet yang menunjukkan arah gaya magnet pada titik-titik tertentu.
          </p>
          
          <h4>Rumus-Rumus Medan Magnet</h4>
          <p>
            Beberapa rumus yang berkaitan dengan medan magnet adalah:
          </p>
          
          <ul>
            <li>
              <strong>Medan Magnet di sekitar kawat lurus berarus:</strong>  
              <br />
              <em> B = μ₀ I / (2πr) </em>
              <br />
              Keterangan: 
              <ul>
                <li> B = Induksi medan magnet (Tesla)</li>
                <li> μ₀ = Permeabilitas vakum (4π × 10⁻⁷ Tm/A)</li>
                <li> I = Arus listrik yang mengalir (Ampere)</li>
                <li> r = Jarak dari kawat (meter)</li>
              </ul>
            </li>

            <li>
              <strong>Medan Magnet pada Solenoid:</strong>  
              <br />
              <em> B = μ₀ n I </em>
              <br />
              Keterangan: 
              <ul>
                <li> B = Induksi medan magnet (Tesla)</li>
                <li> μ₀ = Permeabilitas vakum</li>
                <li> n = Jumlah lilitan per satuan panjang (lilitan/meter)</li>
                <li> I = Arus listrik yang mengalir (Ampere)</li>
              </ul>
            </li>

            <li>
              <strong>Gaya Lorentz pada muatan yang bergerak:</strong>  
              <br />
              <em> F = q (v × B) </em>
              <br />
              Keterangan: 
              <ul>
                <li> F = Gaya Lorentz (Newton)</li>
                <li> q = Muatan listrik (Coulomb)</li>
                <li> v = Kecepatan partikel bermuatan (m/s)</li>
                <li> B = Medan magnet (Tesla)</li>
              </ul>
            </li>
          </ul>

          <h4>Contoh Penerapan Medan Magnet</h4>
          <p>
            Medan magnet dapat digunakan dalam berbagai aplikasi seperti:
            <ul>
              <li>Pembangkitan listrik (generator)</li>
              <li>Peralatan medis (MRI)</li>
              <li>Magnet permanen pada motor listrik</li>
              <li>Penggunaan dalam teknologi penginderaan (sensor)</li>
            </ul>
          </p>

          {/* Contoh Soal dan Pembahasan */}
          <h4>Contoh Soal: Gaya Lorentz pada Muatan yang Bergerak</h4>
          <p>
            Sebuah partikel bermuatan positif dengan muatan <em>q = 3 μC</em> (mikro Coulomb) bergerak dengan kecepatan <em>v = 5 × 10<sup>5</sup> m/s</em> pada sudut 90° terhadap arah medan magnet. Medan magnet yang ada di sekitar partikel tersebut memiliki induksi <em>B = 0,2 T</em>. Hitunglah besar gaya Lorentz yang bekerja pada partikel tersebut!
          </p>

          <h5>Penyelesaian:</h5>
          <ul>
            <li>
              Diketahui:
              <ul>
                <li> q = 3 μC = 3 × 10⁻⁶ C</li>
                <li> v = 5 × 10⁵ m/s</li>
                <li> B = 0,2 T</li>
                <li> θ = 90° (sudut antara arah kecepatan dan medan magnet)</li>
              </ul>
            </li>
            <li>
              Rumus yang digunakan adalah:
              <br />
              <em> F = q v B sin(θ) </em>
              <br />
              Karena θ = 90°, maka sin(90°) = 1.
            </li>
            <li>
              Maka, besar gaya Lorentz adalah:
              <br />
              <em> F = (3 × 10⁻⁶ C) × (5 × 10⁵ m/s) × (0,2 T) × 1 </em>
              <br />
              <em> F = 3 × 10⁻⁶ × 5 × 10⁵ × 0,2 </em>
              <br />
              <em> F = 0,3 N </em>
            </li>
            <li>
              Jadi, besar gaya Lorentz yang bekerja pada partikel tersebut adalah <strong>0,3 N</strong>.
            </li>
          </ul>
        </div>
      )}
    </Container>
    

  );
}

export default PhysicsMagneticField;
