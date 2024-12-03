import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const induksimagnetik = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <div className="card">
        <img
          src="https://via.placeholder.com/300" // Ganti dengan URL gambar induksi magnetik
          className="card-img-top"
          alt="Induksi Magnetik"
        />
        <div className="card-body">
          <h5 className="card-title">Induksi Magnetik</h5>
          <p className="card-text">
            Induksi magnetik adalah fenomena yang terjadi ketika medan magnet
            berubah, menghasilkan arus listrik dalam suatu konduktor.
          </p>
          <Button variant="primary" onClick={handleShow}>
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>

      {/* Modal untuk materi pembahasan lebih mendalam */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Induksi Magnetik</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Induksi magnetik merupakan prinsip dasar dalam elektromagnetisme,
            yang menjadi dasar dalam berbagai aplikasi teknologi seperti
            transformator, generator, dan motor listrik. Fenomena ini pertama
            kali ditemukan oleh Michael Faraday dan dijelaskan lebih lanjut
            melalui hukum Lenz, yang menyatakan bahwa arah arus induksi selalu
            sedemikian rupa sehingga menentang perubahan fluks magnet yang
            menyebabkannya.
          </p>
          <ul>
            <li>Hukum Faraday: E = -dΦ/dt</li>
            <li>Hukum Lenz: Arah arus induksi melawan perubahan fluks magnet.</li>
            <li>Aplikasi: Generator listrik, transformator, dan motor induksi.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default induksimagnetik;
