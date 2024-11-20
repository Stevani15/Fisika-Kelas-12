import React, { useState } from 'react';
import "../FM.css";

const FisikaModern = () => {
  const [selectedSubTopic, setSelectedSubTopic] = useState('relativitas');

  const subTopics = [
    {
      name: 'Teori Relativitas',
      description: `
        Teori relativitas adalah salah satu konsep paling revolusioner dalam fisika yang dicetuskan oleh Albert Einstein pada awal abad ke-20. 
        Terdapat dua jenis teori relativitas yang diusulkan oleh Einstein: teori relativitas khusus dan teori relativitas umum. 
        Teori relativitas khusus memperkenalkan konsep bahwa waktu dan ruang itu relatif, dan dapat berubah tergantung pada kecepatan benda yang bergerak. 
        Sedangkan teori relativitas umum mengembangkan ide ini lebih jauh dengan menyatakan bahwa gravitasi adalah akibat dari kelengkungan ruang-waktu yang disebabkan oleh massa dan energi.
      `,
      content: `
        1. Teori Relativitas Khusus: 
          Teori ini berfokus pada benda yang bergerak dengan kecepatan yang mendekati kecepatan cahaya. Salah satu implikasi dari teori ini adalah waktu akan berjalan lebih lambat bagi objek yang bergerak cepat, ini dikenal dengan fenomena dilatasi waktu. 
          Selain itu, massa benda akan meningkat seiring dengan kecepatan geraknya, sebuah konsep yang dikenal sebagai peningkatan massa relativistik.
          
        2. Teori Relativitas Umum: 
          Menurut teori ini, gravitasi tidak lagi dipandang sebagai gaya tarik-menarik antara dua benda, tetapi sebagai efek dari kelengkungan ruang-waktu yang disebabkan oleh adanya massa atau energi. 
          Semakin besar massa suatu benda, semakin besar kelengkungan ruang-waktu yang ditimbulkannya, yang pada gilirannya mempengaruhi pergerakan benda lain di sekitarnya.
      `,
    },
    {
      name: 'Mekanika Kuantum',
      description: `
        Mekanika kuantum adalah cabang fisika yang mempelajari fenomena pada skala atom dan sub-atom. Konsep utama dalam mekanika kuantum adalah bahwa partikel-partikel dapat berperilaku sebagai gelombang dan partikel sekaligus. 
        Ini dikenal dengan prinsip dualitas gelombang-partikel. Mekanika kuantum juga memperkenalkan ketidakpastian dalam pengukuran, yang dikenal dengan prinsip ketidakpastian Heisenberg, yang menyatakan bahwa kita tidak dapat mengetahui dengan pasti posisi dan momentum suatu partikel pada saat yang bersamaan.
      `,
      content: `
        1. Prinsip Ketidakpastian Heisenberg:
          Prinsip ini menyatakan bahwa semakin tepat kita mengetahui posisi suatu partikel, semakin tidak tepat kita dapat mengetahui momentum partikel tersebut, dan sebaliknya. 
          Ini menunjukkan bahwa ada batasan fundamental dalam pengukuran yang dapat kita lakukan pada dunia sub-atomik.

        2. Fungsi Gelombang dan Superposisi:
          Dalam mekanika kuantum, keadaan suatu partikel digambarkan oleh sebuah fungsi gelombang, yang menggambarkan kemungkinan posisi dan momentum partikel tersebut. 
          Salah satu konsep penting dalam mekanika kuantum adalah superposisi, di mana partikel dapat berada dalam beberapa keadaan sekaligus sampai dilakukan pengukuran.
      `,
    },
    {
      name: 'Fisika Partikel',
      description: `
        Fisika partikel adalah cabang fisika yang mempelajari partikel-partikel elementer, yang merupakan komponen dasar dari segala materi di alam semesta. 
        Dalam fisika partikel, partikel yang paling mendasar adalah quark dan lepton, yang membentuk proton, neutron, dan elektron. 
        Interaksi antar partikel juga dijelaskan dalam teori medan kuantum, yang menggunakan konsep boson (partikel pembawa gaya) untuk menjelaskan interaksi gaya fundamental, seperti gaya elektromagnetik dan gaya gravitasi.
      `,
      content: `
        1. Quark dan Lepton:
          Quark adalah partikel yang membentuk proton dan neutron, sementara lepton termasuk elektron dan neutrino. 
          Quark memiliki muatan listrik dan berinteraksi melalui gaya kuat, sementara lepton tidak berinteraksi melalui gaya kuat, tetapi berinteraksi melalui gaya elektromagnetik dan gaya lemah.

        2. Higgs Boson dan Higgs Field:
          Higgs boson adalah partikel yang ditemukan pada tahun 2012 oleh tim ilmuwan di CERN, yang membuktikan keberadaan medan Higgs. 
          Medan Higgs memberikan massa pada partikel-partikel elementer. Tanpa medan Higgs, partikel-partikel seperti proton dan elektron tidak akan memiliki massa, dan fenomena fisik yang kita lihat di alam semesta akan sangat berbeda.
      `,
    },
  ];

  const currentSubTopic = subTopics.find(sub => sub.name.toLowerCase().includes(selectedSubTopic));

  return (
    <div>
      <h1>Fisika Modern</h1>

      {/* Navigasi sub-materi */}
      <div className="btn-group mb-4" role="group" aria-label="Sub-topics">
        {subTopics.map((sub, index) => (
          <button
            key={index}
            className={`btn btn-${selectedSubTopic === sub.name.toLowerCase() ? 'primary' : 'outline-primary'}`}
            onClick={() => setSelectedSubTopic(sub.name.toLowerCase())}
          >
            {sub.name}
          </button>
        ))}
      </div>
      {currentSubTopic && (
        <div>
          <h3>{currentSubTopic.name}</h3>
          <p>{currentSubTopic.description}</p>
          <h5>Konten:</h5>
          <p>{currentSubTopic.content}</p>
        </div>
      )}
    </div>
  );
};

export default FisikaModern;
