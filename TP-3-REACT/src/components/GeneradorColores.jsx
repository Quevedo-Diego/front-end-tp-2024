import React, { useState } from 'react';

const GeneradorColores = () => {
  const [color, setColor] = useState('#ffffff');

  const cambiarColor = () => {
    const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(nuevoColor); // Cambiar al nuevo color
  };

  return (
    <div className="generador-colores" style={{ backgroundColor: color }}>
      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
};

export default GeneradorColores;
