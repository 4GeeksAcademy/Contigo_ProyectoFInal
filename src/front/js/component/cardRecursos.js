import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardRecursos = () => {
  const { store, actions } = useContext(Context);

  return (

<div className="col-3 p-3">
  <div className="card bg-light rounded">
    <h5 className="card-title text-center pt-2">Recurso</h5>
    <div className="p-3">
      <img src="https://loremflickr.com/800/500/cars" className="card-img-top" alt="..." />
    </div>
    <div className="row">
      <ul className="list-unstyled text-start mt-0 m-3 ">
        <li>
          <p className="mb-1">Descripcion: direccion de api </p>
        </li>
        <li>
          <p className="mb-1">ONG: direccion de api </p>
        </li>
        <li>
          <p className="mb-1">Ubicacion: direccion de api </p>
        </li>
      </ul>
    </div>
    <div className="d-flex justify-content-center">
      <Link to="/detalleRecurso" className="btn btn-secondary w-75 m-2">Ver</Link>
    </div>
  </div>
</div>
  );
};

export default CardRecursos;