import React from "react";
import '../styles/Bab.css'; // Jika Anda memiliki file CSS tambahan
import { Link } from "react-router-dom";
import medanMagnetikImage from '../images/medan_magnetik.png';
import induksiMagnetikImage from '../images/induksi_magnetik.png';
import gelombangElektromagnetikImage from '../images/gelombang_elektromagnetik.png';
import aplikasiMagnetImage from '../images/aplikasi_magnet.png';
import transformatorImage from '../images/transformator.png';

function Bab7() {
    const materiData = [
        {
            nama: "Medan Magnetik",
            deskripsi:
                "Medan magnetik adalah daerah di sekitar magnet di mana kekuatan magnet dapat dirasakan. Materi ini mencakup konsep dasar medan magnet dan hukum-hukum yang berlaku.",
            gambar: medanMagnetikImage,
            path: "/materi/medan-magnetik",
        },

        {
            nama: "InduksiElektromagnetik",
            deskripsi:
                "Induksi magnetik adalah fenomena yang terjadi ketika medan magnet berubah, menghasilkan arus listrik dalam suatu konduktor. Materi ini mencakup hukum Faraday dan Lenz.",
            gambar: induksiMagnetikImage,
            path: "/materi/induksi-magnetik",
        },
        {
            nama: "Gelombang Elektromagnetik",
            deskripsi:
                "Gelombang elektromagnetik adalah gelombang yang dihasilkan oleh kombinasi medan listrik dan medan magnet yang saling tegak lurus. Materi ini mencakup teori Maxwell dan aplikasinya.",
            gambar: gelombangElektromagnetikImage,
            path: "/materi/gelombang-elektromagnetik",
        },
        {
            nama: "Aplikasi Magnet dalam Kehidupan",
            deskripsi:
                "Materi ini membahas penggunaan magnet dalam teknologi sehari-hari seperti MRI, kompas, dan motor listrik.",
            gambar: aplikasiMagnetImage,
            path: "/materi/aplikasi-magnet",
        },
        {
            nama: "Transformator",
            deskripsi:
                "Transformator adalah perangkat yang digunakan untuk mengubah tegangan listrik menggunakan prinsip induksi elektromagnetik. Materi ini mencakup prinsip kerja dan aplikasinya.",
            gambar: transformatorImage,
            path: "/materi/transformator",
        },
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 fw-bold">Materi Bab 7: Medan Magnetik</h1>
            <p className="text-center text-muted mb-5">Pelajari berbagai konsep dan penerapan medan magnet dalam kehidupan sehari-hari. Pilih materi untuk memulai pembelajaran.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {materiData.map((materi, index) => (
                    <div key={index} className="col">
                        <div className="card h-100 shadow-sm">
                            <img src={materi.gambar} className="card-img-top" alt={materi.nama} style={{ height: "150px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title fw-semibold text-primary">{materi.nama}</h5>
                                <p className="card-text text-secondary">{materi.deskripsi}</p>
                            </div>
                            <div className="card-footer bg-transparent border-0">
                                <Link to={materi.path} className="btn btn-outline-primary w-100">Pelajari Lebih Lanjut</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bab7;
