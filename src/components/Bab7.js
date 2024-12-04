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
teori: `Biofuel
Biofuel atau bahan bakar hayati adalah sumber energi terbarukan berupa bahan bakar (baik padat, cair, dan gas) yang dihasilkan dari bahan-bahan organik.`,

teori: `Biomassa
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
      nama: "Pemanfaatan Energi Alternatif",
      deskripsi:
        "Penggunaan sumber energi tentu memiliki dampak bagi kehidupan. Beberapa dampak tersebut adalah:",
      gambar: sumber1,
      path: "/pemrosesan-sinyal-digital",
      teori: `Sebagai energi atau bahan bakar, misalnya gas, minyak bumi, dan batu bara
      Sebagai bahan jenis industri, seperti industri pesawat, kendaraan bermotor, persenjataan, dan lain-lain
      Untuk bahan konstruksi
      Bahan untuk membuat perhiasan, seperti emas, intan, dan lain-lain`,
    },
    {
      nama: "Pembangkit Listrik",
      deskripsi:
        "Pembangkit listrik adalah sebuah alat yang dapat membangkitkan dan memproduksi tenaga listrik dengan cara mengubah suatu energi menjadi energi listrik. Pembangkit listrik memiliki banyak macam nya. Apa saja macam pembangkit listrik tersebut? Simak ulasan berikut ini!",

teori: `Pembangkit Listrik Tenaga Surya (PLTS)
Pembangkit listrik yang satu ini dapat digolongkan sebagai energi yang ramah lingkungan, hemat, dan efektif. Pasalnya, sinar matahari sebagai sumbernya akan terus ada sepanjang masa. Tidak hanya itu, kelebihan dari pembangkit listrik tenaga surya (PLTS) ini juga cenderung memiliki sumber energi yang kuat untuk menghasilkan listrik. Pembangkit ini menggunakan perlengkapan seperti panel surya untuk menangkap cahaya matahari yang berlimpah sepanjang hari.

Pada umumnya, pembangkit listrik yang satu ini sudah banyak digunakan oleh masyarakat sebagai penunjang energi yang cukup ideal dan murah.

Pembangkit Listrik Tenaga Air (PLTA)
Pembangkit listrik yang satu ini mengandalkan kecepatan arus air yang digunakan untuk menggerakkan turbin yang berfungsi sebagai pemicu arus air yang dibutuhkan. Macam pembangkit listrik ini mengubah energi kinetik pada air menjadi energi listrik yang murni, hemat, serta ramah lingkungan.

Selain itu, pembangkit listrik tenaga air ini bersifat dapat diperbarui atau renewable energy. Pada umumnya, jenis pembangkit listrik ini dipasang tepat di sebelah sumber air yang cukup besar seperti bendungan, waduk, atau sungai dengan aliran airnya yang cukup deras.`,
      gambar: sumberenergi2,
      path: "/pembangkit-listrik",
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
