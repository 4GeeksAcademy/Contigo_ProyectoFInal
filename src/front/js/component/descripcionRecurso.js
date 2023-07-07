import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DescripcionRecurso = () => {
  const { store, actions } = useContext(Context);

  return (

    <div className="card shadow bg-light w-75 m-5 p-3">
    <div className="card-body">
      <div className="row">
        <div className="col">
            <div className="d-flex align-items-center">
              <h2 className="card-title">Recursos</h2>
              <h5 className="card-text ms-3">Categoría</h5>
            </div>
          <p className="card-text">Descripción:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim tortor, eget placerat nunc. Maecenas nisi tellus, euismod et justo non, dignissim rutrum purus. Cras auctor commodo ipsum, sed mollis dui finibus sit amet. Nunc dapibus nisl pulvinar tempor commodo. Quisque congue nulla felis, convallis cursus sapien aliquam eu.  </p>
          <ul className="list-group mt-3">
            <li>Fecha:</li>
            <li>Horario:</li>
            <li>Requisitos:</li>
          </ul>
        </div>
        <div className="col ">
          <ul className="list-group ">
            <li>Contacto:</li>
            <li>Dirección:</li>
            <li>Teléfono:</li>
          </ul>
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

