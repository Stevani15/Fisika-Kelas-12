import React, { useState } from "react";
const SimulasiInduksi = () => {
  const [flux, setFlux] = useState(0);
  const [coilTurns, setCoilTurns] = useState(10);
  const [ggl, setGgl] = useState(0);

  const handleFluxChange = (e) => {
    const newFlux = parseFloat(e.target.value);
    setFlux(newFlux);
    calculateGGL(newFlux, coilTurns);
  };

  const handleCoilTurnsChange = (e) => {
    const newTurns = parseInt(e.target.value);
    setCoilTurns(newTurns);
    calculateGGL(flux, newTurns);
  };

  const calculateGGL = (flux, turns) => {
    const dFlux = flux / 0.1; // Perubahan fluks dalam 0.1 detik
    const inducedGgl = -turns * dFlux;
    setGgl(inducedGgl.toFixed(2));
  };

  return (
    <div>
      <h2>Simulasi Induksi Elektromagnetik</h2>
      <div>
        <label>Perubahan Fluks Magnetik (Φ): </label>
        <input
          type="number"
          value={flux}
          onChange={handleFluxChange}
          placeholder="Masukkan perubahan fluks"
        />
      </div>
      <div>
        <label>Jumlah Lilitan (N): </label>
        <input
          type="number"
          value={coilTurns}
          onChange={handleCoilTurnsChange}
          placeholder="Masukkan jumlah lilitan"
        />
      </div>
      <h3>Hasil:</h3>
      <p>
        GGL Induksi: <strong>{ggl} Volt</strong>
      </p>
    </div>
  );
};

export default SimulasiInduksi;
