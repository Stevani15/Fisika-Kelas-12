import React from "react";
import '../styles/Bab.css'; // Jika Anda memiliki file CSS tambahan
import { Link } from "react-router-dom";
import hukumFaradayImage from '../images/hukum_faraday.png';
import hukumLenzImage from '../images/hukum_lenz.png';
import generatorListrikImage from '../images/generator_listrik.png';
import transformatorImage from '../images/transformator.png';
import aplikasiInduksiImage from '../images/aplikasi_induksi.png';

function InduksiElektromagnetik() {
    const materiData = [
        {
            nama: "Hukum Faraday",
            deskripsi:
                "Hukum Faraday menjelaskan bagaimana perubahan medan magnet dapat menghasilkan arus listrik dalam suatu konduktor. Materi ini membahas prinsip dasar induksi elektromagnetik.",
            gambar: hukumFaradayImage,
            path: "/materi/hukum-faraday",
        },
        {
            nama: "Hukum Lenz",
            deskripsi:
                "Hukum Lenz menjelaskan arah arus induksi yang dihasilkan oleh perubahan medan magnet. Materi ini membantu memahami konsep energi dan hukum kekekalan energi.",
            gambar: hukumLenzImage,
            path: "/materi/hukum-lenz",
        },
        {
            nama: "Generator Listrik",
            deskripsi:
                "Generator listrik adalah alat yang mengubah energi mekanik menjadi energi listrik menggunakan prinsip induksi elektromagnetik. Materi ini mencakup prinsip kerja dan aplikasinya.",
            gambar: generatorListrikImage,
            path: "/materi/generator-listrik",
        },
        {
            nama: "Transformator",
            deskripsi:
                "Transformator adalah perangkat yang digunakan untuk mengubah tegangan listrik berdasarkan prinsip induksi elektromagnetik. Materi ini mencakup jenis-jenis transformator dan penggunaannya.",
            gambar: transformatorImage,
            path: "/materi/transformator",
        },
        {
            nama: "Aplikasi Induksi Elektromagnetik",
            deskripsi:
                "Materi ini membahas berbagai penerapan induksi elektromagnetik dalam kehidupan sehari-hari, seperti motor listrik, relai, dan perangkat elektronik.",
            gambar: aplikasiInduksiImage,
            path: "/materi/aplikasi-induksi",
        },
    ];

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 fw-bold">Materi Bab 7: Induksi Elektromagnetik</h1>
            <p className="text-center text-muted mb-5">Pelajari prinsip, hukum, dan penerapan induksi elektromagnetik dalam kehidupan sehari-hari. Klik pada materi untuk memulai pembelajaran.</p>
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

export default InduksiElektromagnetik;
