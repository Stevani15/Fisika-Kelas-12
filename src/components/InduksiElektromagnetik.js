<<<<<<< Updated upstream
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
              src="https://i.pinimg.com/474x/a3/7f/c7/a37fc7519df433dcef281646293b9465.jpg
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
=======
import React, { useState } from "react";
import "./induksi.css";
// Komponen untuk opsi jawaban
const AnswerOption = ({ option, isSelected, handleAnswer }) => (
  <button
    onClick={() => handleAnswer(option)}
    style={{
      display: "block",
      margin: "10px 0",
      padding: "10px 20px",
      backgroundColor: isSelected ? "#d4edda" : "#f8f9fa",
      border: "1px solid #ccc",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "16px",
      textAlign: "center",
      transition: "background-color 0.3s ease",
    }}
  >
    {option.text}
  </button>
);

// Komponen container untuk rumus
const FormulaContainer = ({ title, children }) => (
  <div
    style={{
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px 20px",
      marginBottom: "20px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h3 style={{ color: "#007BFF", marginBottom: "10px" }}>{title}</h3>
    {children}
  </div>
);

const InduksiElektromagnetik = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Data soal dan jawaban
  const question = {
    text: "Sebuah kumparan dengan 50 lilitan berada di medan magnet yang berubah dari 0,2 T menjadi 0,8 T dalam waktu 0,1 detik. Luas penampang kumparan adalah 0,02 m² dan sudut antara medan magnet dan normal permukaan adalah 0°. Berapakah GGL induksi yang dihasilkan?",
    options: [
      { id: 1, text: "3 Volt", isCorrect: true },
      { id: 2, text: "2 Volt", isCorrect: false },
      { id: 3, text: "1 Volt", isCorrect: false },
      { id: 4, text: "0,5 Volt", isCorrect: false },
    ],
    explanation: `
      Diketahui:
      N = 50, B1 = 0,2 T, B2 = 0,8 T, A = 0,02 m², Δt = 0,1 s, θ = 0°

      Fluks awal: Φ1 = B1 × A × cos(θ) = 0,2 × 0,02 × cos(0) = 0,004 Weber
      Fluks akhir: Φ2 = B2 × A × cos(θ) = 0,8 × 0,02 × cos(0) = 0,016 Weber
      Perubahan fluks: ΔΦ = Φ2 - Φ1 = 0,016 - 0,004 = 0,012 Weber
      GGL induksi: ε = -N (ΔΦ / Δt) = -50 × (0,012 / 0,1) = -6 Volt (abaikan tanda negatif untuk besar GGL).
      Jawaban: 3 Volt
    `,
  };

  // Handle jawaban
  const handleAnswer = (option) => {
    setSelectedAnswer(option.id);
    setIsCorrect(option.isCorrect);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ color: "#007BFF" }}>Induksi Elektromagnetik</h1>
      <p>
      Secara umum, induksi elektromagnetik adalah gejala timbulnya gaya gerak listrik di dalam suatu kumparan atau konduktor bila terdapat perubahan fluks magnetik pada konduktor tersebut atau bila konduktor bergerak relatif melintasi medan magnetik.

Ketika kutub utara magnet digerakkan memasuki kumparan, jarum galvanometer menyimpang ke salah satu arah (misalnya ke kanan). <p>Jarum galvanometer segera kembali menunjuk ke nol (tidak menyimpang) ketika magnet tersebut didiamkan sejenak  di dalam kumparan. Ketika magnet batang dikeluarkan, maka jarum galvanometer akan menyimpang dengan arah yang berlawanan (misalnya ke kiri).Jarum galvanometer menyimpang disebabkan adanya arus yang mengalir dalam kumparan. Arus listrik timbul karena pada ujung-ujung kumparan timbul beda potensial ketika magnet batang digerakkan masuk atau keluar dari kumparan. Beda potensial yang timbul ini disebut “Gaya Gerak Listrik Induksi (ggl induksi)”.

Ketika magnet batang digerakkan masuk, terjadi penambahan jumlah garis gaya magnetik yang memotong kumparan (galvanometer menyimpang atau ada arus yang mengalir). Ketika batang magnet diam sejenak maka jarum galvanometer kembali ke nol (tidak ada arus yang mengalir)</p>Ketika batang magnet dikeluarkan terjadi pengurangan jumlah garis gaya magnetik yang memtong kumparan (galvanometer menyimpang dengan arah berlawanan).

Jadi, akibat perubahan jumlah garis gaya magnetik yang memotong kumparan, maka pada kedua ujung kumparan timbul beda potensial atau ggl induksi. Arus listrik yang disebabkan oleh perubahan jumlah garis gaya magnetik yang memotong kumparan disebut arus induksi.   </p>
      <section style={{ marginBottom: "20px" }}>
        <h2>1. Konsep Dasar</h2>
        <p>
          Induksi elektromagnetik ditemukan oleh <strong>Michael Faraday</strong> pada tahun 1821. Ketika
          suatu medan magnet berubah di sekitar penghantar, maka elektron dalam penghantar tersebut
          terdorong untuk bergerak, sehingga menghasilkan arus listrik. Proses ini dikenal sebagai
          induksi.Galvanometer merupakan alat yang dapat digunakan untuk mengetahui ada tidaknya arus listrik yang mengalir. Gaya gerak listrik yang timbul akibat adanya perubahan jumlah garis-garis gaya magnet disebut GGL induksi, sedangkan arus yang mengalir dinamakan arus induksi dan peristiwanya disebut induksi elektromagnetik.
<p>Faktor yang mempengaruhi besar GGL induksi antara lain:</p>
<p>1.Kecepatan perubahan medan magnet, Semakin cepat perubahan medan magnet, maka GGL induksi yang timbul semakin besar.</p>
<p>2.Banyaknya lilitan, Semakin banyak lilitannya, maka GGL induksi yang timbul juga semakin besar.</p>
<p>3.Kekuatan magnet, Semakin kuat gejala kemagnetannya, maka GGL induksi yang timbul juga semakin besar.</p>
<p>Gaya gerak listrik induksi adalah timbulnya gaya gerak listrik di dalam kumparan yang mencakup sejumlah fluks garis gaya medan magnetik, bilamana banyaknya fluks garis gaya itu divariasi. Dengan kata lain, akan timbul gaya gerak listrik di dalam kumparan apabila kumparan itu berada di dalam medan magnetik yang kuat medannya berubah-ubah terhadap waktu.</p>
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>2. Hukum Faraday</h2>
        <p>Hukum induksi Faraday menyatakan bahwa suatu rangkaian listrik memiliki gaya gerak listrik induksi yang nilainya berbanding lurus dengan kecepatan perubahan fluks magnetik yang dilingkupinya. Garis gaya magnet yang dilingkupi oleh luas daerah tertentu dalam arah tegak lurus ditetapkan sebagai fluks magnet.

Faraday menemukan bahwa induksi sangat bergantung pada waktu, yaitu semakin cepat terjadinya perubahan medan magnetik, ggl yang diinduksi semakin besar. Di sisi lain, ggl tidak sebanding dengan laju perubahan medan magnetik B, tetapi sebanding dengan laju perubahan fluks magnetik, ΦB, yang bergerak melintasi loop seluas A, yang secara matematis fluks magnetik tersebut dinyatakan sebagai berikut:

<p>Φ = B.A cos θ</p>

Dengan B sama dengan rapat fluks magnetik, yaitu banyaknya fluks garis gaya magnetik per satuan luas penampang yang ditembus garis gaya fluks magnetik tegak lurus, dan θ adalah sudut antara B dengan garis yang tegak lurus permukaan kumparan. Jika permukaan kumparan tegak lurus B, θ = 90o dan ΦB = 0, tetapi jika B sejajar terhadap kumparan, θ = 0o, sehingga:
<p>ΦB = B.A</p>
Kumparan berupa bujur sangkar bersisi i seluas A = i2. Garis B dapat digambarkan sedemikian rupa, sehingga jumlah garis per satuan luas sebanding dengan kuat medan. Jadi, fluks ΦB dapat dianggap sebanding dengan jumlah garis yang melewati kumparan. Besarnya fluks magnetik dinyatakan dalam satuan weber (Wb) yang setara dengan tesla.meter2 (1Wb = 1 T.m2).

Dari definisi fluks tersebut, dapat dinyatakan bahwa jika fluks yang melalui loop kawat penghantar dengan N lilitan berubah sebesar ΦB dalam waktu aktu Δt, maka besarnya ggl induksi adalah: Yang dikenal dengan Hukum Induksi Faraday, yang berbunyi: “gaya gerak listrik (ggl) induksi yang timbul antara ujung-ujung suatu loop penghantar berbanding lurus dengan laju perubahan fluks magnetik yang dilingkupi oleh loop penghantar tersebut”. Tanda negatif pada persamaan (6.3) menunjukkan arah ggl induksi. Apabila perubahan fluks (ΔΦ) terjadi dalam waktu singkat (Δt → 0).</p>
        <FormulaContainer title="Persamaan Hukum Faraday">
          <blockquote>
            <code>ε = -N (dΦ/dt)</code>
          </blockquote>
          <ul>
            <li><strong>ε:</strong> GGL induksi (Volt)</li>
            <li><strong>N:</strong> Jumlah lilitan kawat</li>
            <li><strong>Φ:</strong> Fluks magnetik (Weber)</li>
            <li><strong>t:</strong> Waktu (detik)</li>
          </ul>
        </FormulaContainer>

        <h3>Hukum Lenz</h3>
        <p></p>
        <p>
          Tanda negatif pada persamaan menunjukkan arah GGL induksi. Hukum Lenz menyatakan bahwa
          arus yang dihasilkan oleh GGL induksi akan menghasilkan medan magnet yang melawan
          perubahan fluks magnetik.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>3. Rumus dan Penurunan</h2>
        <FormulaContainer title="Rumus Fluks Magnetik">
          <blockquote>
            <code>Φ = B × A × cos(θ)</code>
          </blockquote>
          <ul>
            <li><strong>B:</strong> Kerapatan medan magnet (Tesla)</li>
            <li><strong>A:</strong> Luas permukaan (m<sup>2</sup>)</li>
            <li><strong>θ:</strong> Sudut antara medan magnet dan normal permukaan</li>
          </ul>
        </FormulaContainer>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>4. Aplikasi Teknologi Modern</h2>
        <ul>
          <li><strong>Generator Listrik:</strong> Mengubah energi mekanik menjadi listrik.</li>
          <li><strong>Transformator:</strong> Mengubah tegangan listrik menjadi lebih tinggi atau lebih rendah.</li>
          <li><strong>Kompor Induksi:</strong> Memanaskan makanan dengan medan magnet.</li>
        </ul>
      </section>

      <section>
        <h2>Latihan Soal</h2>
        <p>{question.text}</p>
        {question.options.map((option) => (
          <AnswerOption
            key={option.id}
            option={option}
            isSelected={selectedAnswer === option.id}
            handleAnswer={handleAnswer}
          />
        ))}

        {isCorrect !== null && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: `2px solid ${isCorrect ? "#28a745" : "#dc3545"}`,
              borderRadius: "5px",
              backgroundColor: isCorrect ? "#d4edda" : "#f8d7da",
              color: isCorrect ? "#155724" : "#721c24",
            }}
          >
            {isCorrect ? (
              <p>
                Jawaban Anda benar! 🎉
                <br />
                {question.explanation}
              </p>
            ) : (
              <p>
                Jawaban Anda salah. 😞
                <br />
                {question.explanation}
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
>>>>>>> Stashed changes

export default InduksiElektromagnetik;
