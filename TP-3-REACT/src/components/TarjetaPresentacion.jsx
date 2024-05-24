import React from 'react';

const TarjetaPresentacion = ({ nombre, apellido, profesion, descripcion }) => {
  return (
    <div className="tarjeta">
      <h1>{nombre} {apellido}</h1>
      <h2>{profesion}</h2>
      <p>{descripcion}</p>
    </div>
  );
};

export default TarjetaPresentacion;
