import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InduksiElektromagnetik = () => {
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
      <h1 className="text-center mb-5">A.Induksi Elektromagnetik</h1>

      {/* Gambar dengan ukuran diperkecil */}
      <div className="text-center">
        <img 
          src="https://i.pinimg.com/736x/a4/1b/78/a41b78e761c2b0bb8fddc935c640f18a.jpg" 
          alt="Induksi Elektromagnetik" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>

      <p>
      Induksi elektromagnetik adalah gejala timbulnya arus listrik pada penghantar listrik akibat dari adanya perubahan medan magnet di sekeliling penghantar. Konsep induksi elektromagnetik didasarkan dari penemuan Michael Faraday dan Joseph Henry pada 1831. Perubahan medan magnetik menghasilkan beda potensial yang disebut gaya gerak listrik induksi dan arus listrik yang ditimbulkannya disebut arus listrik induksi.
      </p>
    <p>
    Galvanometer merupakan alat yang dapat digunakan untuk mengetahui ada tidaknya arus listrik yang mengalir. Gaya gerak listrik yang timbul akibat adanya perubahan jumlah garis-garis gaya magnet disebut GGL induksi, sedangkan arus yang mengalir dinamakan arus induksi dan peristiwanya disebut induksi elektromagnetik.
    </p>
    <p>
    Faktor yang mempengaruhi besar GGL induksi antara lain:
<li>Kecepatan perubahan medan magnet, Semakin cepat perubahan medan magnet, maka GGL induksi yang timbul semakin besar.</li>
<li>Banyaknya lilitan, Semakin banyak lilitannya, maka GGL induksi yang timbul juga semakin besar.</li>
<li>Kekuatan magnet, Semakin kuat gejala kemagnetannya, maka GGL induksi yang timbul juga semakin besar.</li>
    </p>

    <h1 className="text-center mb-4">B.Konsep Induksi Elektromagnetik</h1>
    <p>
        Gaya Gerak Listrik <strong>(GGL)</strong> adalah timbulnya gaya gerak listrik di dalam kumparan  yang mencakup sejumlah fluks garis gaya medan magnetik,bilamana  banyaknya fluks garis gaya itu divariasi.Dengan kata lain,akan timbul gaya gerak listrik di dalam kumparan
        apabila kumparan itu berada di dalam medan magnetik yang kuat medannya berubah-ubah terhadap waktu.
    </p>
    <div className="text-center">
        <img 
          src="https://i.pinimg.com/736x/d6/df/30/d6df300925abf0dbe0d7cd81e7a47896.jpg" 
          alt="Konsep" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>
      <p>
      Secara umum, induksi elektromagnetik adalah gejala timbulnya gaya gerak listrik di dalam suatu kumparan atau konduktor bila terdapat perubahan fluks magnetik pada konduktor tersebut atau bila konduktor bergerak relatif melintasi medan magnetik.
Ketika kutub utara magnet digerakkan memasuki kumparan, jarum galvanometer menyimpang ke salah satu arah (misalnya ke kanan). Jarum galvanometer segera kembali menunjuk ke nol (tidak menyimpang) ketika magnet tersebut didiamkan sejenak  di dalam kumparan. Ketika magnet batang dikeluarkan, maka jarum galvanometer akan menyimpang dengan arah yang berlawanan (misalnya ke kiri).
      </p>
      <p>
      Jarum galvanometer menyimpang disebabkan adanya arus yang mengalir dalam kumparan. Arus listrik timbul karena pada ujung-ujung kumparan timbul beda potensial ketika magnet batang digerakkan masuk atau keluar dari kumparan. Beda potensial yang timbul ini disebut “Gaya Gerak Listrik Induksi (ggl induksi)”.
Ketika magnet batang digerakkan masuk, terjadi penambahan jumlah garis gaya magnetik yang memotong kumparan (galvanometer menyimpang atau ada arus yang mengalir). Ketika batang magnet diam sejenak maka jarum galvanometer kembali ke nol (tidak ada arus yang mengalir). Ketika batang magnet dikeluarkan terjadi pengurangan jumlah garis gaya magnetik yang memtong kumparan (galvanometer menyimpang dengan arah berlawanan).
Jadi, akibat perubahan jumlah garis gaya magnetik yang memotong kumparan, maka pada kedua ujung kumparan timbul beda potensial atau ggl induksi. Arus listrik yang disebabkan oleh perubahan jumlah garis gaya magnetik yang memotong kumparan disebut arus induksi.
      </p>
      <h1 className="text-center mb-5">C.Hukum Faraday</h1>
      <div className="text-center">
        <img 
          src="https://i.pinimg.com/474x/04/f9/ae/04f9ae181a122beb36094a45e41490f3.jpg"
          alt="Michael Faraday" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>
      <p>
      Hukum induksi Faraday menyatakan bahwa suatu rangkaian listrik memiliki gaya gerak listrik induksi yang nilainya berbanding lurus dengan kecepatan perubahan fluks magnetik yang dilingkupinya. Garis gaya magnet yang dilingkupi oleh luas daerah tertentu dalam arah tegak lurus ditetapkan sebagai fluks magnet.
      Faraday menemukan bahwa induksi sangat bergantung pada waktu, yaitu semakin cepat terjadinya perubahan medan magnetik, ggl yang diinduksi semakin besar. Di sisi lain, ggl tidak sebanding dengan laju perubahan medan magnetik B, tetapi sebanding dengan laju perubahan fluks magnetik, ΦB, yang bergerak melintasi loop seluas A, yang secara matematis fluks magnetik tersebut dinyatakan sebagai berikut:
<li><strong>Φ = B.A cos θ</strong></li>
Dengan B sama dengan rapat fluks magnetik, yaitu banyaknya fluks garis gaya magnetik per satuan luas penampang yang ditembus garis gaya fluks magnetik tegak lurus, dan θ adalah sudut antara B dengan garis yang tegak lurus permukaan kumparan. Jika permukaan kumparan tegak lurus B, θ = 90o dan ΦB = 0, tetapi jika B sejajar terhadap kumparan, θ = 0o, sehingga:
<li><strong>ΦB = B.A</strong></li>
      </p>
      <h2 className="mt-4">Kuis Interaktif</h2>
      <p>Uji pemahaman Anda dengan menjawab pertanyaan berikut:</p>
      <div className="bg-light p-3 rounded">
        <p>
        Timbulnya gaya gerak listrik di dalam kumparan yang mencakup sejumlah fluks garis gaya medan magnetik disebut dengan?
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
              &nbsp; Gerak Gaya Listrik
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
              &nbsp; Besarnya resistansi kumparan
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
              &nbsp; Jarak antara kumparan dan magnet
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
              &nbsp;Medan Magnetik
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

<h1 className="text-center mb-5">D.Aplikasi Induksi Elektromagnetik</h1>
      <p>Berikut adalah beberapa aplikasi penting dari induksi elektromagnetik:</p>
      <ul>
        <li>
          <strong>Generator Listrik:</strong> Mengubah energi mekanik menjadi energi listrik dengan memutar kumparan dalam medan magnet.
        </li>
        <div className="text-center">
        <img 
          src="https://i.pinimg.com/736x/dd/85/57/dd85573ad3d7e39e03be9f8a23aeefc1.jpg"
          alt="Generator" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>
        <li>
          <strong>Transformator:</strong> Meningkatkan atau menurunkan tegangan listrik untuk distribusi dan penggunaan listrik.
        </li>
        <div className="text-center">
        <img 
          src="https://i.pinimg.com/736x/eb/3b/42/eb3b42b4bf3915eac2342eb927a7030c.jpg"
          alt="Transformator" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>
        <li>
          <strong>Motor Listrik:</strong> Mengubah energi listrik menjadi energi mekanik untuk menjalankan mesin.
        </li>
        <div className="text-center">
        <img 
          src="https://i.pinimg.com/474x/af/db/40/afdb40535f78782d7b580e739895c124.jpg"
          alt="MOTOR lISTRIK" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>
        <li>
          <strong>Induksi Kompor:</strong> Menghasilkan panas pada alat masak berbahan logam menggunakan prinsip induksi elektromagnetik.
        </li>
        <div className="text-center">
        <img 
          src="https://i.pinimg.com/736x/4d/4f/fa/4d4ffafb7b975d8277f4893e38745c8f.jpg"
          alt="Induksi Kompor" 
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '50%' }} 
        />
      </div>
      </ul>
    </div>
  );
};

export default InduksiElektromagnetik;
