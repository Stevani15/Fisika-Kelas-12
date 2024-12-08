import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
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
              <Link to="/LatihanSoal" className="nav-link">
                Latihan Soal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
