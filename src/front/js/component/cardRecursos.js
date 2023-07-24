import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardRecursos = ({nombre, descripcion, ong_id, direccion, id, img }) => {
  const [ongName, setOngName] = useState('');
  const direccionConMadrid = `${direccion}, Madrid`;
  const encodedAddress = encodeURIComponent(direccionConMadrid);
  const mapURL = `https://www.google.com/maps?q=${encodedAddress}`;

  useEffect(() => {
    fetch(process.env.BACKEND_URL + `api/nombreong/${ong_id}`)
        .then(response => response.json())
        .then(data => {
          setOngName(data.nombre);
        });
    }, [ong_id]);


  return (
      <div className="card shadow justify-content-center m-auto col-md-6" style={{width: '18rem'}}>
          <img src={img} className="card-img-top" alt="imagen"/>
        <div className="card-body">
          <h5 className="card-title"><strong>{nombre}</strong></h5>
            <p className="card-text">{descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>ONG:</strong> {ongName}</li>
          <li className="list-group-item"><strong>Dirección:</strong> {direccion}</li> 
          <li className="list-group-item text-center"><a href={mapURL} target="_blank" rel="noopener noreferrer">
            Ver en Google Maps <i className="fas fa-map-marked-alt"></i>
          </a></li>
        </ul>
        <div className="card-body text-center">
          <Link to={`/detalleRecurso/${id}`} className="btn primario w-50 m-2">Ver</Link>
        </div>
      </div>
  );
};


export default CardRecursos;