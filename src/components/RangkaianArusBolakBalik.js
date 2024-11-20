import React, { useState } from "react";

function AC() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Hitung reaktansi induktif (X<sub>L</sub>) untuk frekuensi 50 Hz dan induktor 0.1 H.",
      options: ["31.4 Ω", "25.5 Ω", "40.2 Ω", "28.3 Ω"],
      answer: "31.4 Ω",
      solution:
        "X<sub>L</sub> = 2πfL = 2 * π * 50 * 0.1 = 31.4 Ω",
    },

  ];

  const totalQuestions = questions.length;

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers({ ...answers, [questionId]: selectedAnswer });
  };

  const checkAnswers = () => {
    if (Object.keys(answers).length < totalQuestions) {
      alert("Harap jawab semua pertanyaan sebelum mengirimkan.");
      return;
    }
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.answer) correctAnswers++;
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

  return (
    <div className="container mt-4">
      {/* Bagian Teori */}
      <h2>Arus Bolak-Balik (AC)</h2>
      <p>
        Arus bolak-balik (AC) adalah arus listrik yang berubah arah secara
        periodik. Arus ini digunakan dalam jaringan listrik rumah tangga dan
        banyak aplikasi industri karena efisiensinya dalam transmisi daya pada
        jarak jauh. Dalam sistem AC, tegangan dan arus memiliki bentuk
        gelombang sinusoidal yang dinyatakan dengan persamaan:
      </p>
      <p>
        <b>i(t) = I<sub>m</sub> sin(ωt)</b>
      </p>
      <p>Di mana:</p>
      <ul>
        <li>
          <b>i(t):</b> Nilai arus sesaat (ampere)
        </li>
        <li>
          <b>I<sub>m</sub>:</b> Amplitudo arus maksimum (ampere)
        </li>
        <li>
          <b>ω:</b> Kecepatan sudut = 2πf (rad/s), dengan f adalah frekuensi
          (Hz)
        </li>
        <li>
          <b>t:</b> Waktu (s)
        </li>
      </ul>
      <h4>Komponen dalam Rangkaian AC</h4>
      <ul>
        <li>
          <b>Resistor (R):</b> Mengubah energi listrik menjadi panas tanpa
          memengaruhi frekuensi arus.
        </li>
        <li>
          <b>Induktor (L):</b> Menghasilkan reaktansi induktif (X<sub>L</sub>).
        </li>
        <li>
          <b>Kapasitor (C):</b> Menghasilkan reaktansi kapasitif (X<sub>C</sub>).
        </li>
      </ul>
      <h4>Rumus Penting</h4>
      <ul>
        <li>
          Reaktansi Induktif: <b>X<sub>L</sub> = 2πfL</b>
        </li>
        <li>
          Reaktansi Kapasitif: <b>X<sub>C</sub> = 1 / (2πfC)</b>
        </li>
        <li>
          Impedansi: <b>Z = √(R² + (X<sub>L</sub> - X<sub>C</sub>)²)</b>
        </li>
        <li>
          Arus Efektif: <b>I<sub>rms</sub> = V<sub>rms</sub> / Z</b>
        </li>
      </ul>
      <p>
        Pemahaman tentang arus bolak-balik sangat penting dalam aplikasi
        elektronik, motor listrik, dan transmisi daya.
      </p>


      <div className="mt-4">
        <h4>Kuis</h4>
        <h5>Pertanyaan {currentQuestion + 1} dari {totalQuestions}</h5>
        <p>
          <strong dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}></strong>
        </p>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              id={`question-${questions[currentQuestion].id}-option-${index}`}
              name={`question-${questions[currentQuestion].id}`}
              value={option}
              className="form-check-input"
              checked={answers[questions[currentQuestion].id] === option}
              onChange={() => handleAnswerChange(questions[currentQuestion].id, option)}
            />
            <label
              className="form-check-label"
              htmlFor={`question-${questions[currentQuestion].id}-option-${index}`}
            >
              {option}
            </label>
          </div>
        ))}
        <div className="mt-3">
          <button
            className="btn btn-secondary me-2"
            onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
            disabled={currentQuestion === 0}
          >
            Sebelumnya
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1))}
            disabled={currentQuestion === totalQuestions - 1}
          >
            Selanjutnya
          </button>
          {currentQuestion === totalQuestions - 1 && (
            <button className="btn btn-primary mt-3" onClick={checkAnswers}>
              Cek Jawaban
            </button>
          )}
        </div>
        {showResults && (
          <div className="mt-4">
            <h4>Hasil Jawaban</h4>
            {questions.map((question) => {
              const isCorrect = answers[question.id] === question.answer;
              return (
                <div key={question.id} className="mb-3">
                  <p>
                    <strong dangerouslySetInnerHTML={{ __html: question.question }}></strong>
                    <br />
                    Jawaban Anda: <b>{answers[question.id] || "Belum dijawab"}</b>
                    {isCorrect ? (
                      <span className="text-success ms-2">Benar!</span>
                    ) : (
                      <span className="text-danger ms-2">
                        Salah. Jawaban yang benar: <b>{question.answer}</b>
                      </span>
                    )}
                  </p>
                  <p>
                    <b>Penjelasan:</b> <span dangerouslySetInnerHTML={{ __html: question.solution }}></span>
                  </p>
                </div>
              );
            })}
            <h5>Skor Anda: {score} dari {totalQuestions}</h5>
            <button className="btn btn-secondary mt-3" onClick={resetQuiz}>
              Ulangi Kuis
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RangkaianArusBolakBalik;