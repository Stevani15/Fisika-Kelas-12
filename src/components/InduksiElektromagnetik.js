import React from 'react';

function InduksiElektromagnetik() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Materi: Induksi Elektromagnetik</h2>

      {/* Definisi */}
      <section className="mb-5">
        <h4>1. Definisi</h4>
        <div className="row align-items-center">
          <div className="col-md-8">
            <p>
              Induksi elektromagnetik adalah proses di mana arus listrik dihasilkan dalam suatu penghantar ketika terjadi perubahan medan magnet di sekitarnya. Fenomena ini ditemukan oleh <strong>Michael Faraday</strong> pada tahun 1831.
            </p>
            <p>
              Fenomena ini sangat penting dalam teknologi modern, terutama dalam pengembangan generator, motor listrik, dan transformator.
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://i.pinimg.com/474x/a3/7f/c7/a37fc7519df433dcef281646293b9465.jpg"
              alt="Michael Faraday"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      {/* Hukum Faraday */}
      <section className="mb-5">
        <h4>2. Hukum Faraday</h4>
        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://i.pinimg.com/474x/e8/cd/4a/e8cd4ae33499d43a6119a9a3c97a2399.jpg"
              alt="Hukum Faraday"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8">
            <p>
              <strong>Hukum Faraday</strong> menyatakan bahwa gaya gerak listrik (emf) yang diinduksi dalam suatu rangkaian berbanding lurus dengan laju perubahan fluks magnetik yang melewati rangkaian tersebut.
            </p>
            <p>Rumusnya adalah:</p>
            <pre className="bg-light p-3 rounded">
              <code>Emf = -N × dΦ/dt</code>
            </pre>
            <p>
              Di mana: <br />
              - <strong>Emf</strong>: gaya gerak listrik (Volt) <br />
              - <strong>Φ</strong>: fluks magnetik (Weber) <br />
              - <strong>t</strong>: waktu (detik) <br />
              - <strong>N</strong>: jumlah lilitan
            </p>
          </div>
        </div>
      </section>

      {/* Fluks Magnetik */}
      <section className="mb-5">
        <h4>3. Fluks Magnetik</h4>
        <p>
          Fluks magnetik adalah jumlah garis medan magnet yang melewati suatu luas permukaan. 
          Besarnya fluks magnetik dapat dihitung dengan rumus:
        </p>
        <pre className="bg-light p-3 rounded">
          <code>Φ = B × A × cos θ</code>
        </pre>
        <p>
          Di mana: <br />
          - <strong>Φ</strong>: fluks magnetik (Weber) <br />
          - <strong>B</strong>: kerapatan medan magnet (Tesla) <br />
          - <strong>A</strong>: luas permukaan (meter persegi) <br />
          - <strong>θ</strong>: sudut antara medan magnet dan normal permukaan
        </p>
        <div className="text-center">
          <img
            src="https://i.pinimg.com/474x/4c/f6/29/4cf629787b9668f1e2d3392cd5ac69ca.jpg"
            alt="Fluks Magnetik"
            className="img-fluid rounded"
          />
        </div>
      </section>

      {/* Hukum Lenz */}
      <section className="mb-5">
        <h4>4. Hukum Lenz</h4>
        <p>
          <strong>Hukum Lenz</strong> menyatakan bahwa arah arus induksi yang dihasilkan oleh emf 
          akan menghasilkan medan magnet yang melawan perubahan medan magnet awal yang menyebabkannya.
        </p>
        <p>
          Ini sesuai dengan hukum kekekalan energi: energi tidak bisa diciptakan atau dihancurkan, tetapi hanya berubah bentuk.
        </p>
      </section>

      {/* Aplikasi */}
      <section className="mb-5">
        <h4>5. Aplikasi Induksi Elektromagnetik</h4>
        <p>Beberapa aplikasi penting dari induksi elektromagnetik adalah:</p>
        <ul>
          <li><strong>Generator:</strong> Mengubah energi mekanik menjadi energi listrik.</li>
          <li><strong>Transformator:</strong> Mengubah tegangan listrik AC menjadi lebih tinggi atau lebih rendah.</li>
          <li><strong>Motor Listrik:</strong> Mengubah energi listrik menjadi energi mekanik.</li>
          <li><strong>Induksi Masak:</strong> Memanaskan panci dengan medan magnet yang diinduksi.</li>
        </ul>
      </section>

      {/* Contoh Soal */}
      <section>
        <h4>6. Contoh Soal</h4>
        <p>
          Sebuah kumparan dengan 50 lilitan berada dalam medan magnet yang berubah dari 0,1 T menjadi 0,5 T dalam waktu 2 detik. 
          Luas tiap lilitan adalah 0,02 m². Hitung emf yang diinduksi!
        </p>
        <p><strong>Penyelesaian:</strong></p>
        <pre className="bg-light p-3 rounded">
          <code>
            Φ1 = B1 × A = 0,1 × 0,02 = 0,002 Wb{'\n'}
            Φ2 = B2 × A = 0,5 × 0,02 = 0,01 Wb{'\n'}
            Emf = -N × (Φ2 - Φ1) / t{'\n'}
                = -50 × (0,01 - 0,002) / 2{'\n'}
                = -50 × 0,008 / 2{'\n'}
                = -0,2 V
          </code>
        </pre>
        <p>Jadi, emf induksi yang dihasilkan adalah <strong>0,2 Volt</strong>.</p>
      </section>
    </div>
  );
}

export default InduksiElektromagnetik;
