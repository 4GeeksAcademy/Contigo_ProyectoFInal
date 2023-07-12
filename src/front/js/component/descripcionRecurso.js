import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescripcionRecurso = ({nombre, descripcion, ong, direccion, ong_id, fichero, img, telefono, codigo_postal, virtual, categoria}) => {
  const { store, actions } = useContext(Context);

  return (

    <div className="card shadow bg-light w-75 m-5 p-3">
    <div className="card-body">
      <div className="row">
        <div className="col">
            <div className="d-flex align-items-center">
              <h2 className="card-title">{nombre}</h2>
            </div>
          <p>L{descripcion}</p>
          <ul className="list-group mt-3">
            
            <li>{ong}</li>
            <li>{direccion}</li>
          </ul>
        </div>
        <div className="col ">
          <div className="text-center mt-5">
          <img src="https://loremflickr.com/800/500/logotype " alt="Imagen" className=" img-fluid rounded w-50  "/>
          </div>
        </div>
        <div className="col">
          <img src="https://loremflickr.com/800/500/dogs" alt="Imagen" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  </div>
);
};

export default DescripcionRecurso;

