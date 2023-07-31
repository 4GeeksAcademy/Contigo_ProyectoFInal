import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CardRecursos = ({nombre, codigo_postal, id, img }) => {


  return (
      <Link to={`/detalleRecurso/${id}`}>
        <div className="card shadow m-auto col-lg-6 my-4" style={{width: '18rem'}}>
          <img src={img} className="card-img-top" alt="imagen"/>
            <div className="card-body text-center">
              <h5 className="card-title"><strong>{nombre}</strong></h5>
              <p><strong>Código Postal:</strong> {codigo_postal}</p> 
            </div>
        </div>
      </Link>
  );
};


export default CardRecursos;