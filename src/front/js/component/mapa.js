import React from 'react';

const MapComponent = ({direccion}) => {

    const direccionConMadrid = `${direccion}, Madrid`;
    const encodedDireccion = encodeURIComponent(direccionConMadrid);

  // URL de Google Maps con la dirección codificada
  const mapURL = `https://www.google.com/maps?q=${encodedDireccion}`;

  return (
    <div>
      <iframe
        title="Mapa de ONG"
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        src={mapURL}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MapComponent;
