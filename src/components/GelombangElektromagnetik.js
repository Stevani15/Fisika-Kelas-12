import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GelombangElektromagnetik = () => {
  // State untuk kuis
  const [quizAnswer, setQuizAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  // Fungsi untuk menangani jawaban kuis
  const handleQuizSubmit = () => {
    if (quizAnswer === 'A') {
      setFeedback('Jawaban Anda benar!🥳👏🏻.');
    } else {
      setFeedback('Jawaban Anda salah. Coba lagi!');
    }
  };

  return (
    <div className="container mt-8">
      <h1 className="text-center mb-5">A. Gelombang Elektromagnetik</h1>

      {/* Gambar dengan ukuran diperkecil */}
      <div className="text-center">
        <img 
          src="https://i.pinimg.com/736x/be/d9/32/bed932de71394a17a2ac11895067e855.jpg" 
          alt="Gelombang Elektromagnetik" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>

      <p>
        Gelombang elektromagnetik adalah gelombang yang dihasilkan oleh osilasi medan listrik dan medan magnet yang saling tegak lurus, 
        serta merambat tanpa memerlukan medium. Gelombang ini memiliki kecepatan yang sama dengan kecepatan cahaya, yaitu sekitar 
        <strong>300.000 km/s</strong> di vakum. Penemu teori dasar gelombang elektromagnetik adalah <strong>James Clerk Maxwell</strong>.
      </p>
      <p>
        Gelombang elektromagnetik terdiri dari spektrum yang mencakup berbagai jenis gelombang, seperti cahaya tampak, gelombang radio, 
        gelombang mikro, inframerah, ultraviolet, sinar-X, dan sinar gamma. Setiap jenis gelombang memiliki panjang gelombang dan 
        frekuensi yang berbeda.
      </p>

      <h1 className="text-center mb-4">B. Sifat Gelombang Elektromagnetik</h1>
      <p>
        Berikut adalah beberapa sifat penting dari gelombang elektromagnetik:
      </p>
      <ul>
        <li>
          Tidak membutuhkan medium untuk merambat, sehingga dapat merambat di ruang hampa.
        </li>
        <li>
          Medan listrik dan medan magnetnya saling tegak lurus, dan keduanya tegak lurus terhadap arah rambatan gelombang.
        </li>
        <li>
          Memiliki kecepatan konstan di vakum, yaitu 3 × 10<sup>8</sup> m/s.
        </li>
        <li>
          Bersifat transversal, artinya osilasi medan listrik dan medan magnetnya tegak lurus terhadap arah rambatan.
        </li>
      </ul>
      <div className="text-center">
        <img 
          src="https://i.pinimg.com/736x/a2/e1/f3/a2e1f3ff4c892ae2006fb086d8e91bf5.jpg" 
          alt="Sifat Gelombang Elektromagnetik" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>

      <h1 className="text-center mb-5">C. Spektrum Gelombang Elektromagnetik</h1>
      <p>
        Spektrum gelombang elektromagnetik mencakup berbagai jenis gelombang dengan panjang gelombang dan frekuensi yang berbeda. 
        Berikut adalah spektrum gelombang elektromagnetik dari panjang gelombang terpanjang hingga terpendek:
      </p>
      <ul>
        <li><strong>Gelombang Radio:</strong> Digunakan untuk komunikasi radio dan televisi.</li>
        <li><strong>Gelombang Mikro:</strong> Digunakan dalam radar dan oven microwave.</li>
        <li><strong>Inframerah:</strong> Digunakan untuk penginderaan panas dan remote control.</li>
        <li><strong>Cahaya Tampak:</strong> Rentang panjang gelombang yang dapat dilihat oleh mata manusia.</li>
        <li><strong>Ultraviolet:</strong> Digunakan dalam sterilisasi dan pengamatan astronomi.</li>
        <li><strong>Sinar-X:</strong> Digunakan untuk pencitraan medis dan keamanan.</li>
        <li><strong>Sinar Gamma:</strong> Digunakan dalam terapi kanker dan penelitian nuklir.</li>
      </ul>
      <div className="text-center">
        <img 
          src="https://i.pinimg.com/474x/f0/bc/f4/f0bcf4a4c640db3b08e4bc2d22beeb26.jpg"
          alt="Spektrum Gelombang Elektromagnetik" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>

      <h2 className="mt-4">Kuis Interaktif</h2>
      <p>Uji pemahaman Anda dengan menjawab pertanyaan berikut:</p>
      <div className="bg-light p-3 rounded">
        <p>
        Gelombang elektromagnetik dihasilkan oleh?
        </p>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="quiz"
                value="A"
                onChange={(e) => setQuizAnswer(e.target.value)}
              />
              &nbsp; Osilasi medan listrik dan medan magnet
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="quiz"
                value="B"
                onChange={(e) => setQuizAnswer(e.target.value)}
              />
              &nbsp; Perubahan tekanan udara
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="quiz"
                value="C"
                onChange={(e) => setQuizAnswer(e.target.value)}
              />
              &nbsp; Pergerakan partikel dalam fluida
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="quiz"
                value="D"
                onChange={(e) => setQuizAnswer(e.target.value)}
              />
              &nbsp; Getaran molekul udara
            </label>
          </li>
        </ul>
        <button className="btn btn-primary mt-3" onClick={handleQuizSubmit}>
          Submit Jawaban
        </button>
      </div>
      {feedback && (
        <div className={`alert mt-3 ${feedback.includes('benar') ? 'alert-success' : 'alert-danger'}`}>
          {feedback}
        </div>
      )}

      <h1 className="text-center mb-5">D. Aplikasi Gelombang Elektromagnetik</h1>
      <p>Berikut adalah beberapa aplikasi penting dari gelombang elektromagnetik:</p>
      <ul>
        <li><strong>Telekomunikasi:</strong> Gelombang radio digunakan untuk mengirim sinyal radio, televisi, dan telepon.</li>
        <li><strong>Kesehatan:</strong> Sinar-X digunakan untuk pencitraan medis.</li>
        <li><strong>Pemanas:</strong> Gelombang mikro digunakan dalam oven untuk memanaskan makanan.</li>
        <li><strong>Energi:</strong> Sinar matahari (inframerah) digunakan untuk energi surya.</li>
      </ul>
    </div>
  );
};

export default GelombangElektromagnetik;
