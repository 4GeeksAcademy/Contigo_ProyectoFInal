import React from "react";
import { Link } from "react-router-dom";


export const CardRecursos = ({nombre, descripcion, ong, direccion, id }) => {
  
  return (

    <div className="col-4">
      <div className="card shadow" style={{width: '18rem'}}>
          <img src="https://loremflickr.com/800/500/people" className="card-img-top" alt="imagen"/>
        <div className="card-body">
          <h5 className="card-title">Nombre: {nombre}</h5>
            <p className="card-text">Descripcion {descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ONG {ong}</li>
          <li className="list-group-item">Dirección {direccion}</li>
        </ul>
        <div className="card-body text-center">
          <Link to={`/detalleRecurso/${id}`} className="btn primario w-50 m-2">Ver</Link>
        </div>
      </div>
    </div>
  );
};


export default CardRecursos;