import React from "react";
import '../styles/Bab.css';
import induksiMagnetikImage from '../images/induksi_magnetik.png';

function InduksiMagnetik() {
    const materi = {
        nama: "Induksi Magnetik",
        deskripsi:
            "Induksi magnetik adalah fenomena yang terjadi ketika perubahan medan magnet menghasilkan arus listrik pada konduktor. Materi ini mencakup penjelasan hukum Faraday dan aplikasi dalam kehidupan sehari-hari.",
        gambar: induksiMagnetikImage,
        path: "/materi/induksi-magnetik",
    };

    return (
        <div className="materi-container">
            <h1 className="text-center mt-4">Materi: {materi.nama}</h1>
            <div className="materi-card">
                <img 
                    src={materi.gambar} 
                    alt={materi.nama} 
                    className="materi-image mb-3"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
                <h2 className="text-primary text-center">{materi.nama}</h2>
                <p className="text-muted text-center">{materi.deskripsi}</p>
                <div className="text-center mt-3">
                    <a href={materi.path} className="btn btn-outline-primary">Pelajari Lebih Lanjut</a>
                </div>
            </div>
        </div>
    );
}

export default InduksiMagnetik;