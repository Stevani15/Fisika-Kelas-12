import React, { useState } from "react";
import "../AC.css";

function RangkaianArusBolakbalik() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers({ ...answers, [questionId]: selectedAnswer });
  };

  const checkAnswers = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Harap jawab semua pertanyaan sebelum mengirimkan.");
      return;
    }
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const questions = [
    {
      id: 1,
      question: "Hitung reaktansi induktif (X<sub>L</sub>) untuk frekuensi 50 Hz dan induktor 0.1 H.",
      options: ["31.4 Ω", "25.5 Ω", "40.2 Ω", "28.3 Ω"],
      answer: "31.4 Ω",
      solution: `Reaktansi induktif dihitung dengan rumus X_L = 2πfL. Di mana f = 50 Hz dan L = 0.1 H. Maka:
      X_L = 2 * π * 50 * 0.1 = 31.4 Ω`
    },
    {
      id: 2,
      question: "Hitung reaktansi kapasitif (X<sub>C</sub>) untuk frekuensi 50 Hz dan kapasitor 100 μF.",
      options: ["31.83 Ω", "35.5 Ω", "27.3 Ω", "30.2 Ω"],
      answer: "31.83 Ω",
      solution: `Reaktansi kapasitif dihitung dengan rumus X_C = 1 / (2πfC). Di mana f = 50 Hz dan C = 100 μF = 100 * 10^-6 F. Maka:
      X_C = 1 / (2 * π * 50 * 100 * 10^-6) = 31.83 Ω`
    },
    {
      id: 3,
      question: "Tentukan impedansi total (Z) rangkaian dengan resistor 50 Ω, reaktansi induktif 31.4 Ω, dan reaktansi kapasitif 31.83 Ω.",
      options: ["50.002 Ω", "52.3 Ω", "47.1 Ω", "55.0 Ω"],
      answer: "50.002 Ω",
      solution: `Impedansi total dihitung dengan rumus Z = √(R² + (X_L - X_C)²). Di mana R = 50 Ω, X_L = 31.4 Ω, dan X_C = 31.83 Ω. Maka:
      Z = √(50² + (31.4 - 31.83)²) = 50.002 Ω`
    },
    {
      id: 4,
      question: "Hitung arus efektif (I<sub>rms</sub>) untuk sumber tegangan 220 V dan impedansi 50.002 Ω.",
      options: ["4.4 A", "5.0 A", "3.8 A", "4.1 A"],
      answer: "4.4 A",
      solution: `Arus efektif dihitung dengan rumus I_rms = V_rms / Z. Di mana V_rms = 220 V dan Z = 50.002 Ω. Maka:
      I_rms = 220 / 50.002 = 4.4 A`
    },
    {
      id: 5,
      question: "Berapa nilai tegangan puncak (V<sub>m</sub>) jika tegangan efektif (V<sub>rms</sub>) adalah 220 V?",
      options: ["311 V", "300 V", "200 V", "320 V"],
      answer: "311 V",
      solution: `Tegangan puncak dihitung dengan rumus V_m = √2 * V_rms. Maka:
      V_m = √2 * 220 = 311 V`
    },
    {
      id: 6,
      question: "Dalam rangkaian AC, faktor daya dinyatakan sebagai rasio apa?",
      options: [
        "Daya nyata terhadap daya semu",
        "Daya semu terhadap daya nyata",
        "Tegangan terhadap arus",
        "Arus terhadap tegangan"
      ],
      answer: "Daya nyata terhadap daya semu",
      solution: `Faktor daya didefinisikan sebagai rasio daya nyata (P) terhadap daya semu (S). Faktor daya = P / S.`
    }
  ];

  const totalQuestions = questions.length;
  const feedbackMessage =
    score === totalQuestions
      ? "Selamat! Anda menjawab semua pertanyaan dengan benar!"
      : score > totalQuestions / 2
      ? "Bagus! Anda sudah memahami sebagian besar materi."
      : "Coba lagi! Pelajari lebih dalam konsepnya.";

  return (    <div>
      <div className="container mt-4">
      <h2>Arus Bolak-Balik (AC)</h2>
<p>
  Arus bolak-balik (AC) adalah arus listrik yang berubah arah secara periodik. 
  Arus ini digunakan dalam jaringan listrik rumah tangga dan banyak aplikasi 
  industri karena efisiensinya dalam transmisi daya pada jarak jauh. 
  Dalam sistem AC, tegangan dan arus memiliki bentuk gelombang sinusoidal yang 
  dinyatakan dengan persamaan:
</p>
<div className="col-md-4 d-flex justify-content-center">
            <img
              src="https://circuitdigest.com/sites/default/files/projectimage_tut/What-is-AC-circuit_0.png"
            alt="AC CIrcuit Diagram
              className="img-fluid rounded
            />
          </div>
<p>
  <b>i(t) = I<sub>m</sub> sin(ωt)</b>
</p>
<p>
  Di mana:
  <ul>
    <li><b>i(t):</b> Nilai arus sesaat (ampere)</li>
    <li><b>I<sub>m</sub>:</b> Amplitudo arus maksimum (ampere)</li>
    <li><b>ω:</b> Kecepatan sudut = 2πf (rad/s), dengan f adalah frekuensi (Hz)</li>
    <li><b>t:</b> Waktu (s)</li>
  </ul>
</p>

<h4>Komponen dalam Rangkaian AC</h4>
<p>
  Rangkaian AC dapat terdiri dari resistor (R), induktor (L), dan kapasitor (C). 
  Setiap komponen memiliki sifat yang berbeda:
</p>
<ul>
  <li>
    <b>Resistor (R):</b> Mengubah energi listrik menjadi panas tanpa memengaruhi 
    frekuensi arus. Arus dan tegangan dalam resistor berada dalam fase yang sama.
  </li>
  <li>
    <b>Induktor (L):</b> Menghasilkan reaktansi induktif (X<sub>L</sub>) yang 
    sebanding dengan frekuensi arus (f). Dalam induktor, arus tertinggal (lagging) terhadap tegangan sebesar 90°.
  </li>
  <li>
    <b>Kapasitor (C):</b> Menghasilkan reaktansi kapasitif (X<sub>C</sub>) yang berbanding terbalik dengan frekuensi. 
    Dalam kapasitor, arus mendahului (leading) tegangan sebesar 90°.
  </li>
</ul>

<h4>Rumus Penting</h4>
<ul>
  <li>
    Reaktansi Induktif:
    <b>X<sub>L</sub> = 2πfL</b>
  </li>
  <li>
    Reaktansi Kapasitif:
    <b>X<sub>C</sub> = 1 / (2πfC)</b>
  </li>
  <li>
    Impedansi (Z) dalam Rangkaian Seri:
    <b>Z = √(R² + (X<sub>L</sub> - X<sub>C</sub>)²)</b>
  </li>
  <li>
    Arus Efektif:
    <b>I<sub>rms</sub> = V<sub>rms</sub> / Z</b>
  </li>
</ul>

<h4>Teori Arus Efektif (I<sub>rms</sub>)</h4>
<p>
  Arus efektif (I<sub>rms</sub>) adalah nilai arus yang menghasilkan daya yang sama seperti arus searah pada 
  beban resistif yang sama. Untuk arus bolak-balik yang berbentuk sinusoidal, arus efektif adalah 
  nilai akar kuadrat rata-rata dari kuadrat arus sesaat, dan dihitung dengan rumus:
</p>
<ul>
  <li><b>I<sub>rms</sub> = I<sub>m</sub> / √2</b></li>
</ul>
<p>
  Nilai I<sub>rms</sub> ini penting untuk menentukan daya yang dapat disuplai oleh sumber AC kepada beban. 
  Pada sistem AC, banyak perhitungan daya yang menggunakan nilai arus efektif, terutama untuk peralatan yang membutuhkan 
  pengukuran daya yang akurat, seperti motor listrik dan alat-alat elektronik.
</p>

<h4>Teori Impedansi dalam Rangkaian AC</h4>
<p>
  Impedansi (Z) adalah ukuran terhadap hambatan total dalam rangkaian AC, yang mencakup efek resistansi (R), 
  reaktansi induktif (X<sub>L</sub>), dan reaktansi kapasitif (X<sub>C</sub>). Impedansi dapat dihitung dengan rumus:
</p>
<ul>
  <li><b>Z = √(R² + (X<sub>L</sub> - X<sub>C</sub>)²)</b></li>
</ul>
<p>
  Impedansi mempengaruhi besar arus yang mengalir dalam rangkaian AC. Semakin besar impedansi, semakin kecil arus yang 
  mengalir. Dalam rangkaian AC, nilai impedansi bergantung pada jenis komponen yang ada (R, L, C) serta frekuensi sumber AC.
  Impedansi berfungsi seperti hambatan pada arus searah, namun untuk arus bolak-balik, impedansi tidak hanya bergantung pada 
  nilai resistansi, tetapi juga pada sifat induktif dan kapasitif rangkaian.
</p>

<p>
  Dalam dunia nyata, penggunaan rangkaian AC mencakup pengaturan motor listrik, 
  pencahayaan rumah tangga, dan peralatan elektronik. Pemahaman tentang arus 
  efektif dan impedansi membantu merancang perangkat yang efisien dan aman.
</p>

<p>
  Salah satu keuntungan besar dari penggunaan arus bolak-balik adalah kemampuannya 
  untuk ditransmisikan melalui jaringan dengan kehilangan daya yang lebih kecil. 
  Hal ini dikarenakan tegangan AC dapat dengan mudah dinaikkan atau diturunkan menggunakan 
  transformator. Proses ini memungkinkan distribusi listrik dari pembangkit hingga ke 
  konsumen dengan efisiensi yang tinggi, mengurangi biaya transmisi.
</p>

<p>
  Arus bolak-balik juga mempermudah penggunaan peralatan elektronik yang memiliki 
  berbagai aplikasi, mulai dari pengoperasian mesin industri hingga perangkat rumah tangga. 
  Salah satu hal yang perlu diperhatikan dalam desain rangkaian AC adalah faktor-faktor 
  yang mempengaruhi kualitas daya listrik, seperti faktor daya (power factor), yang menunjukkan 
  seberapa efisien daya digunakan dalam rangkaian tersebut.
</p>

<p>
  Ketika faktor daya mendekati 1, artinya hampir seluruh daya yang disuplai ke rangkaian 
  digunakan dengan efisien. Sebaliknya, jika faktor daya rendah, sebagian besar daya akan 
  hilang dalam bentuk panas, dan ini dapat menyebabkan pemborosan energi.
</p>

<p><i>Sumber: Buku Fisika SMA Kelas 12, Penerbit Erlangga, Bab Arus Bolak-Balik (AC).</i></p>
        
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">Cara Mengerjakan Soal:</h4>
          <ul>
            <li>Pilih jawaban yang menurut Anda paling tepat untuk setiap soal.</li>
            <li>Setelah memilih jawaban, tekan tombol "Cek Jawaban" untuk mengetahui hasilnya.</li>
            <li>Skor Anda akan dihitung berdasarkan jumlah jawaban yang benar.</li>
            <li>Baca penjelasan di bawah soal untuk memahami konsep lebih lanjut.</li>
          </ul>
        </div>
        <h4>Pertanyaan {currentQuestion + 1} dari {totalQuestions}</h4>
              <p><strong dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}></strong></p>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="form-check">
                  <input
                    type="radio"
                    id={`question-${currentQuestion}-option-${index}`}
                    name={`question-${currentQuestion}`}
                    value={option}
                    className="form-check-input"
                    checked={answers[questions[currentQuestion].id] === option}
                    onChange={() => handleAnswerChange(questions[currentQuestion].id, option)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`question-${currentQuestion}-option-${index}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
              <div className="mt-3">
                <button
                  className="btn btn-secondary me-2"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                >
                  Sebelumnya
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={nextQuestion}
                  disabled={currentQuestion === totalQuestions - 1}
                >
                  Selanjutnya
                </button>
              </div>
              {currentQuestion === totalQuestions - 1 && (
                <button className="btn btn-primary mt-3" onClick={checkAnswers}>
                  Cek Jawaban
                </button>
              )}
            </div>
          
          {showResults && (
            <div>
              <h4>Hasil Jawaban</h4>
              {questions.map((question) => {
                const isCorrect = answers[question.id] === question.answer;
                return (
                  <div key={question.id}>
                    <p>
                      <strong dangerouslySetInnerHTML={{ __html: question.question }}></strong>
                      <br />
                      Jawaban Anda: <strong>{answers[question.id] || "Belum dijawab"}</strong>
                      {isCorrect ? (
                        <span className="text-success ms-2"> Benar!</span>
                      ) : (
                        <span className="text-danger ms-2">
                           Salah. Jawaban yang benar adalah {question.answer}
                        </span>
                      )}
                      <br />
                      <strong>Penjelasan:</strong>
                      <p>{question.solution}</p>
                    </p>
                  </div>
                );
              })}
              <h5>Skor Anda: {score} dari {totalQuestions}</h5>
              <p className="text-primary">{feedbackMessage}</p>
              <button className="btn btn-secondary mt-3" onClick={resetQuiz}>
                Ulangi Kuis
              </button>
            </div>
          )}
        </div>

  );
}

export default RangkaianArusBolakbalik;