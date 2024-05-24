import React, { useState } from 'react';

const Adivinanza = () => {
  const [numero, setNumero] = useState(Math.floor(Math.random() * 100) + 1);
  const [intento, setIntento] = useState('');
  const [mensaje, setMensaje] = useState('');

  const verificarNumero = () => {
    const num = parseInt(intento);
    if (num === numero) {
      setMensaje('¡Correcto!');
    } else if (num > numero) {
      setMensaje('Más bajo');
    } else {
      setMensaje('Más alto');
    }
  };

  return (
    <div className="adivinanza">
      <p>Adivina el número (entre 1 y 100):</p>
      <input 
        type="number" 
        value={intento} 
        onChange={(e) => setIntento(e.target.value)} 
      />
      <button onClick={verificarNumero}>Verificar</button>
      <p>{mensaje}</p>
    </div>
  );
};

export default Adivinanza;
