import React from "react";
import "./Ac.css";

const RangkaianArusBolakBalik= () => {
  return (
    <div className="container">
      <h2>Ringkasan Materi: Arus Bolak-Balik (AC)</h2>
      <p>
        Arus bolak-balik adalah arus listrik yang besar dan arah alirannya berubah secara periodik. Arus ini banyak digunakan dalam berbagai aplikasi, seperti listrik rumah tangga dan perangkat elektronik.
      </p>

      <div className="subMateri">
        <h3 className="title">1. Karakteristik Arus Bolak-Balik</h3>
        <p>
          Arus bolak-balik memiliki sifat yang berubah secara periodik. Tiga karakteristik utama adalah:
          <ul>
            <li><b>Frekuensi</b> (f): Jumlah siklus per detik, diukur dalam Hertz (Hz).</li>
            <li><b>Tegangan Efektif</b> (V<sub>ef</sub>): Tegangan yang memiliki daya setara dengan tegangan DC, dihitung dengan V<sub>ef</sub> = V<sub>m</sub>/√2.</li>
            <li><b>Arus Efektif</b> (I<sub>ef</sub>): Arus yang menghasilkan daya yang sama dengan arus searah, dihitung dengan I<sub>ef</sub> = I<sub>m</sub>/√2.</li>
          </ul>
        </p>
      </div>

      <div className="subMateri">
        <h3 className="title">2. Rangkaian RLC pada Arus Bolak-Balik</h3>
        <p>
          Rangkaian listrik yang terdiri dari resistor (R), induktor (L), dan kapasitor (C) memiliki pengaruh yang berbeda pada arus bolak-balik:
          <ul>
            <li><b>Resistor (R)</b>: Tidak mengubah fasa arus, hanya menghasilkan penurunan tegangan.</li>
            <li><b>Induktor (L)</b>: Arus tertinggal 90° di belakang tegangan. Reaktansi induktif: X<sub>L</sub> = ωL.</li>
            <li><b>Kapasitor (C)</b>: Arus mendahului tegangan 90°. Reaktansi kapasitif: X<sub>C</sub> = 1/ωC.</li>
          </ul>
          Impedansi total rangkaian RLC adalah: <b>Z = √(R² + (X<sub>L</sub> - X<sub>C</sub>)²)</b>.
        </p>
      </div>

      <div className="subMateri">
        <h3 className="title">3. Daya pada Rangkaian AC</h3>
        <p>
          Daya pada rangkaian AC dapat dibagi menjadi beberapa jenis:
          <ul>
            <li><b>Daya Nyata (P)</b>: Daya yang benar-benar digunakan dalam rangkaian, dihitung dengan P = V<sub>ef</sub> * I<sub>ef</sub> * cos(φ).</li>
            <li><b>Daya Reaktif (Q)</b>: Daya yang disimpan dan dilepaskan kembali dalam komponen induktif atau kapasitif, dihitung dengan Q = V<sub>ef</sub> * I<sub>ef</sub> * sin(φ).</li>
            <li><b>Daya Semu (S)</b>: Gabungan dari daya nyata dan reaktif, dihitung dengan S = V<sub>ef</sub> * I<sub>ef</sub>.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default RangkaianArusBolakBalik;