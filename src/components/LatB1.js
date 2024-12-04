import React, { useState, useEffect } from "react";
import "../styles/latsol.css";

const LatB1 = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [reviewAnswers, setReviewAnswers] = useState([]);

  const questions = [
    {
      question:
        "Jika arus listrik sebesar 10 A mengalir dalam kawat yang ujung-ujungnya mempunyai beda potensial 10 V, besar muatan yang mengalir pada kawat selama satu menit adalah ...",
      options: ["5 C", "20 C", "120 C", "600 C", "1200 C"],
      correctAnswer: "600 C",
    },
    {
      question:
        "Suatu batang baja memiliki panjang 8 m dan diameter 4 mm. Jika hambatan jenis baja besarnya 1,256 × 10-8 Ω m, besar hambatan baja ...",
      options: [
        "4 x 10'4 Ω",
        "4 x 10'3 Ω",
        "4 x 10'2 Ω",
        "8 x 10'4 Ω",
        "8 x 10'3 Ω",
      ],
      correctAnswer: "8 x 10'3 Ω",
    },
    {
      question:
        "Sinar gamma, sinar inframerah, dan sinar ultraviolet adalah gelombang elektromagnetik. Kecepatan sinar-sinar tersebut yang benar adalah ....",
      options: [
        "Sinar gamma mempunyai kecepatan paling besar",
        "Sinar ultraviolet mempunyai kecepatan paling kecil",
        "Sinar inframerah mempunyai kecepatan paling besar",
        "Sinar ultraviolet mempunyai kecepatan yang besarnya di antara kecepatan",
        "Ketiga sinar mempunyai kecepatan yang sama",
      ],
      correctAnswer: "Ketiga sinar mempunyai kecepatan yang sama",
    },
  ];

  const handleStartQuiz = () => {
    setIsQuizStarted(true);
    setFeedback("");
    setTimer(60);
    setScore(0);
    setReviewAnswers([]);
  };

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    const isCorrect = option === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setFeedback("Jawaban Anda benar");
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedback("Jawaban Anda salah");
    }

    // Simpan jawaban untuk review
    setReviewAnswers((prevReview) => [
      ...prevReview,
      {
        question: questions[currentQuestion].question,
        selectedAnswer: option,
        correctAnswer: questions[currentQuestion].correctAnswer,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setFeedback("");
    } else {
      setIsQuizStarted(false); // Akhiri quiz
    }
  };

  useEffect(() => {
    if (isQuizStarted && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      alert("Waktu habis! Quiz selesai.");
      setIsQuizStarted(false);
    }
  }, [isQuizStarted, timer]);

  return (
    <div className="latb1-container">
      <div className="quiz-container">
        {!isQuizStarted ? (
          <div className="start-screen">
            {reviewAnswers.length === questions.length ? (
              <div className="results-screen">
                <h1>Quiz Completed!</h1>
                <p>Your Score: {score}/{questions.length}</p>
                <h2>Review Answers:</h2>
                <ul>
                  {reviewAnswers.map((review, index) => (
                    <li key={index}>
                      <p><strong>Question {index + 1}:</strong> {review.question}</p>
                      <p>Your Answer: {review.selectedAnswer}</p>
                      <p>Correct Answer: {review.correctAnswer}</p>
                    </li>
                  ))}
                </ul>
                <button onClick={handleStartQuiz}>Restart Quiz</button>
              </div>
            ) : (
              <>
                <h1>Start the Quiz</h1>
                <p>Good luck!</p>
                <p>Time: 60 sec</p>
                <button onClick={handleStartQuiz}>Start</button>
              </>
            )}
          </div>
        ) : (
          <div className="question-screen">
            <h2>
              Question {currentQuestion + 1}/{questions.length}
            </h2>
            <p>{questions[currentQuestion].question}</p>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswer === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                  disabled={!!feedback} // Disable setelah menjawab
                >
                  {option}
                </button>
              ))}
            </div>
            {feedback && (
              <p
                className={`feedback-message ${
                  feedback.includes("benar") ? "correct" : "incorrect"
                }`}
              >
                {feedback}
              </p>
            )}
            <button
              className="next-button"
              onClick={handleNextQuestion}
              disabled={!feedback} // Hanya bisa lanjut jika sudah menjawab
            >
              Next
            </button>
            <p className="timer">Time remaining: {timer}s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatB1;
