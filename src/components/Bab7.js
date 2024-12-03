import React from "react";
import "../styles/Bab.css";
import { Link } from "react-router-dom";
import sumberenergi from "../images/sumberenergi.jpg";
import sumber1 from "../images/sumber1.jpg";
import sumberenergi2 from "../images/sumberenergi2.png";

function Bab8() {
  const teknologiData = [
    {
      nama: "Jenis Sumber Energi",
      deskripsi:
        "Sumber energi adalah yang dapat menghasilkan energi, baik secara langsung maupun melalui proses konversi. Setiap hari kamu pasti membutuhkan energi untuk menjalankan berbagai aktivitas. Contoh sederhananya yaitu ketika kamu berjalan atau menggerakan tubuh. Energi itu diperoleh melalui proses oksidasi (pembakaran) zat makanan yang masuk dalam tubuh berupa makanan.Kegiatan manusia lainnya seperti menghangatkan atau mendinginkan rumah, menjalankan mesin pabrik atau kendaraan, menghidupakan lampu juga memerlukan energi yang diperoleh dari bahan sumber energiJika dilihat dari ketersediaannya di alam, energi dibagi menjadi dua yaitu Energi Terbarukan dan Energi Tak Terbarukan.",
      gambar: sumberenergi,
      path: "/sumber-energi",
      teori: `Sumber Energi Terbarukan

Sumber energi yang bisa diperbarui sehingga dalam penggunaannya dapat dengan cepat dan mudah didapatkan. Sumber energi terbarukan ini ketersediannya tidak terbatas dan dapat dimanfaatkan secara terus-menerus. Sumber energi ini memiliki kelebihan tidak mencemari lingkungan.

Contoh energi terbarukan diantaranya :`,
teori:

`Biofuel
Biofuel atau bahan bakar hayati adalah sumber energi terbarukan berupa bahan bakar (baik padat, cair, dan gas) yang dihasilkan dari bahan-bahan organik.`,

teroi: `Biomassa
Biomassa adalah jenis energi terbarukan yang mengacu pada bahan biologis yang berasal dari organisme yang hidup atau belum lama mati. Sumber biomassa antara lain bahan bakar kayu, limbah dan alkohol.

Biomassa dapat pula dikonversi atau diubah menjadi bentuk lain seperti gas metana (biogas), ethanol, dan biodiesel.`,

teori:`Panas Bumi
Energi panas bumi atau geothermal adalah sumber energi terbarukan berupa energi thermal (panas) yang dihasilkan dan disimpan di dalam bumi. Energi panas bumi diyakini cukup ekonomis, berlimpah, berkelanjutan, dan ramah lingkungan.`,

teori:`Air
Energi air adalah salah satu alternatif bahan bakar fosil yang paling umum. Sumber energi ini didapatkan dengan memanfaatkan energi potensial dan energi kinetik yang dimiliki air.`,

teori:`Angin
Energi angin atau bayu adalah sumber energi terbarukan yang dihasilkan oleh angin. Kincir angin digunakan untuk menangkap energi angin dan diubah menjadi energi kinetik atau listrik.`,

teori:`Matahari
Energi matahari atau surya adalah energi terbarukan yang bersumber dari radiasi sinar dan panas yang dipancarkan matahari.`,

teori:`Gelombang Laut
Energi gelombang laut atau ombak adalah energi terbarukan yang bersumber dari dari tekanan naik turunnya gelombang air laut.`,

teori:`Pasang Surut
Energi pasang surut air laut adalah energi terbarukan yang bersumber dari proses pasang surut air laut. Terdapat dua jenis sumber energi pasang surut air laut, pertama adalah  perbedaan tinggi rendah air laut saat pasang dan surut. Yang kedua adalah arus pasang surut terutama pada selat-selat yang kecil.`,

    },
    {
      nama: "Pemrosesan Sinyal Digital",
      deskripsi:
        "Pemrosesan sinyal digital (DSP) melibatkan manipulasi sinyal untuk memperbaiki kualitas atau untuk mengambil informasi dari sinyal.",
      gambar: sumber1,
      path: "/pemrosesan-sinyal-digital",
      teori: `Salah satu operasi penting dalam pemrosesan sinyal digital adalah transformasi Fourier yang digunakan untuk mengubah sinyal ke domain frekuensi. Rumus transformasi Fourier adalah:
      \[ X(f) = \int_{-\infty}^{\infty} x(t) e^{-j2\pi ft} dt \]
      Di mana \( X(f) \) adalah representasi frekuensi dari sinyal \( x(t) \).`,
    },
    {
      nama: "Komunikasi Digital",
      deskripsi:
        "Komunikasi digital mengacu pada pengiriman informasi dalam bentuk sinyal digital. Ini melibatkan pengkodean, pengiriman, dan dekode informasi.",
      gambar: sumberenergi2,
      path: "/komunikasi-digital",
      teori: `Salah satu metode dalam komunikasi digital adalah pengkodean sumber yang digunakan untuk mengubah data asli menjadi format yang lebih efisien. Rumus pengkodean sumber adalah:
      \[ H(X) = - \sum_{i=1}^{n} p(x_i) \log_2 p(x_i) \]
      Di mana \( H(X) \) adalah entropi informasi dari sumber, dan \( p(x_i) \) adalah probabilitas simbol \( x_i \) pada sumber tersebut.`,
    },
  ];

  return (
    <div className="jurusan-container">
      <h1>Materi Teknologi Digital</h1>
      <div className="jurusan-cards">
        {teknologiData.map((teknologi, index) => (
          <div key={index} className="jurusan-card">
            <img src={teknologi.gambar} alt={teknologi.nama} className="jurusan-image" />
            <Link to={teknologi.path}>
              <h2 className="jurusan-title">{teknologi.nama}</h2>
            </Link>
            <p className="jurusan-description">{teknologi.deskripsi}</p>
            <div className="jurusan-teori">
              <p>{teknologi.teori}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bab8;
