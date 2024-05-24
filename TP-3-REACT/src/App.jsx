import React from 'react';
import TarjetaPresentacion from './components/TarjetaPresentacion';
import Contador from './components/Contador';
import GeneradorColores from './components/GeneradorColores';
import Emojis from './components/Emojis';
import Adivinanza from './components/Adivinanza';
import './App.css'; // Importamos el nuevo archivo CSS

const App = () => {
  return (
    <div className="App">
      <TarjetaPresentacion 
        nombre="Diego" 
        apellido="Quevedo" 
        profesion="Estudiante" 
        descripcion="Soy Quevedo Diego estudio la tecnicatura de desarrollo de software" 
      />
      <Contador />
      <GeneradorColores />
      <Emojis />
      <Adivinanza />
    </div>
  );
};

export default App;
