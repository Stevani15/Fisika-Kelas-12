import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/LatihanSoal.css";

const LatihanSoal = () => {
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
            <h1 className="m-0">PhysicsMadeEasy</h1>
          </div>
          <div>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
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
                    <Link to="/bab1" className="dropdown-item">
                      Bab.1
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab2" className="dropdown-item">
                      Bab.2
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab3" className="dropdown-item">
                      Bab.3
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab4" className="dropdown-item">
                      Bab.4
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab5" className="dropdown-item">
                      Bab.5
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab6" className="dropdown-item">
                      Bab.6
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab7" className="dropdown-item">
                      Bab.7
                    </Link>
                  </li>
                  <li>
                    <Link to="/bab8" className="dropdown-item">
                      Bab.8
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
      <div className="title-container">
        <h1 className="homepage-title">Mari Berlatih Soal Fisika Kelas 12 SMA</h1>
      </div>

     <main className="main-content">
        <p>Kerjakan soal ini untuk mengasah dan mengukur kemampuan kamu!</p>
     </main>



    <main className="main-content">
      <div className="topics">
        <div className="topic-card">
          <h2>Bab 1</h2>
          <h3>Induksi Elektromagnetik</h3>
          <Link to="/LatB1" className="topic-link">Kerjakan Soal</Link>
        </div>
        <div className="topic-card">
          <h2>Bab 2</h2>
          <h3>Medan Magnetik</h3>
          <Link to="/LatB2" className="topic-link">Kerjakan Soal</Link>
        </div>
        <div className="topic-card">
          <h2>Bab 3</h2>
          <h3>Sumber Energi</h3>
          <Link to="/LatB3" className="topic-link">Kerjakan Soal</Link>
        </div>
        <div className="topic-card">
          <h2>Bab 4</h2>
          <h3>Teknologi Digital</h3>
          <Link to="/LatB4" className="topic-link">Kerjakan Soal</Link>
        </div>
        <div className="topic-card">
          <h2>Bab 5</h2>
          <h3>Fisika Modern</h3>
          <Link to="/LatB5" className="topic-link">Kerjakan Soal</Link>
        </div>
        <div className="topic-card">
          <h2>Bab 6</h2>
          <h3>Rangkaian Arus Bolak Balik</h3>
          <Link to="/LatB6" className="topic-link">Kerjakan Soal</Link>
        </div>
        <div className="topic-card">
          <h2>Bab 7</h2>
          <h3>Rangkaian Arus Searah</h3>
          <Link to="/LatB7" className="topic-link">Kerjakan Soal</Link>
        </div>
        <div className="topic-card">
          <h2>Bab 8</h2>
          <h3>Gelombang Elektromagnetik</h3>
          <Link to="/LatB8" className="topic-link">Kerjakan Soal</Link>
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

export default LatihanSoal;
