import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardRecursos = ({nombre, descripcion, ong_id, direccion, id }) => {
  const [ongName, setOngName] = useState('');

  useEffect(() => {
    // Realizar el fetch en el momento adecuado, por ejemplo, al montar el componente
    fetch(process.env.BACKEND_URL + `api/nombreong/${ong_id}`)
        .then(response => response.json())
        .then(data => {
          setOngName(data.nombre);
        });
    }, [ong_id]);

  return (

      <div className="card shadow justify-content-center m-auto" style={{width: '18rem'}}>
          <img src="https://loremflickr.com/800/500/people" className="card-img-top" alt="imagen"/>
        <div className="card-body">
          <h5 className="card-title"><strong>{nombre}</strong></h5>
            <p className="card-text">{descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>ONG:</strong> {ongName}</li>
          <li className="list-group-item"><strong>Dirección:</strong> {direccion}</li>
        </ul>
        <div className="card-body text-center">
          <Link to={`/detalleRecurso/${id}`} className="btn primario w-50 m-2">Ver</Link>
        </div>
      </div>
  );
};


export default CardRecursos;