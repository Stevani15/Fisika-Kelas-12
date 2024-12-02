import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/HomePage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://i.pinimg.com/474x/6f/36/92/6f36929926e3b70ff362f01e738dd491.jpg"
              alt="Logo"
              className="logo-img me-3" 
            />
            <h1 className="m-0">Fisika</h1>
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

      {/* Navbar Section */}
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
                <a className="nav-link" href="#">
                  Pelajaran
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Updates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pendidikan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Promo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-8">
            <div className="p-4 bg-white shadow-sm">
            </div>
          </div>
        </div>
      </div>
      <div className="title-container">
        <h1 className="homepage-title">Materi Pelajaran Fisika Kelas 12 SMA</h1>
      </div>



    {/* Main Content */}
<main className="main-content">
  <p>Website ini dirancang untuk membantu siswa kelas 12 memahami berbagai konsep fisika secara mendalam. Materi yang disajikan mencakup penjelasan teori, contoh aplikasi, dan latihan soal interaktif untuk mendukung proses pembelajaran.</p>

  <div className="topics">
  <div className="topic-card">
      <h2>Bab 1</h2>
      <h3>Induksi Elektromagnetik</h3>
      <p>Prinsip induksi elektromagnetik dan penerapannya.</p>
    </div>
    <div className="topic-card">
    <h2>Bab 2</h2>
      <h3>Medan Magnetik</h3>
      <p>Penjelasan tentang medan magnetik dan aplikasinya.</p>
    </div>
    <div className="topic-card">
    <h2>Bab 3</h2>
      <h3>Sumber Energi</h3>
      <p>Pelajari sumber energi yang digunakan dalam kehidupan sehari-hari.</p>
    </div>
    <div className="topic-card">
    <h2>Bab 4</h2>
      <h3>Teknologi Digital</h3>
      <p>Eksplorasi bagaimana fisika diterapkan dalam teknologi digital.</p>
    </div>
    <div className="topic-card">
    <h2>Bab 5</h2>
      <h3>Fisika Modern</h3>
      <p>Konsep fisika modern, seperti relativitas dan mekanika kuantum.</p>
    </div>
    <div className="topic-card">
    <h2>Bab 6</h2>
      <h3>Rangkaian Arus Bolak Balik</h3>
      <p>Dasar-dasar rangkaian listrik arus bolak-balik.</p>
    </div>
    <div className="topic-card">
    <h2>Bab 7</h2>
      <h3>Rangkaian Arus Searah</h3>
      <p>Prinsip induksi elektromagnetik dan penerapannya.</p>
    </div>
    <div className="topic-card">
    <h2>Bab 8</h2>
      <h3>Gelombang Elektromagnetik</h3>
      <p>Prinsip induksi elektromagnetik dan penerapannya.</p>
    </div>
  </div>
</main>


 {/* Footer */}
 <footer className="footer">
   <p>© 2024 Fisika Interactive | Built with ❤️</p>
 </footer>
</div>

  );
};

export default HomePage;
