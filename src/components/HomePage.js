import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div>
    
      <header className="bg-primary text-white text-center py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://i.pinimg.com/474x/6f/36/92/6f36929926e3b70ff362f01e738dd491.jpg"
              alt="Logo"
              className="logo-img me-3" 
            />
            <h1 className="m-0">Mata pelajaran SMA</h1>
          </div>
        </div>
      </header>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
              <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >
              Materi
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
            <Link to="/Bab1" className="dropdown-item">
           BIOLOGI
            </Link>
            </li>
            <li>
            <Link to="/bab2" className="dropdown-item">
         KIMIA
          </Link>
          </li>
                  <li>
                    <Link to="/bab3" className="dropdown-item">
                    MATEMATIKA
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab4" className="dropdown-item">
                   FISIKA
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab5" className="dropdown-item">
                    EKONOMI
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab6" className="dropdown-item">
                    BAHASA.INGGRIS
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="LatihanSoal">
                  Latihan Soal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="title-container">
        <h1 className="homepage-title">Materi Pelajaran Kelas 12 SMA</h1>
      </div>
    {/* Main Content */}
<main className="main-content">
  <p>Website ini dirancang untuk membantu siswa kelas 12 . Materi yang disajikan mencakup penjelasan teori, contoh aplikasi, dan latihan soal interaktif untuk mendukung proses pembelajaran.</p>

  <div className="topics">
  <div className="topic-card">
      <h2>BIOLOGI</h2>
    </div>
    <div className="topic-card">
    <h2>KIMIA</h2>
    </div>
    <div className="topic-card">
    <h2>MATEMATIKA</h2>
    </div>
    <div className="topic-card">
    <h2>EKONOMI</h2>
    </div>
    <div className="topic-card">
    <h2>FISIKA</h2>
    </div>
    <div className="topic-card">
    <h2>BAHASA.INGGRIS</h2>
    </div>
  </div>
</main>


 {/* Footer */}
 <footer className="footer">
   <p>© 2024 Fisika Interactive | INSTITUT TEKNOLOGI DEL</p>
 </footer>
</div>

  );
};

export default HomePage;
