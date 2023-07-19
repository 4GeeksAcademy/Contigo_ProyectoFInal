import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles/formulario.css";
import FormularioRecurso from '../component/formularioRecurso';

export const Perfil = () => {
  const [mostrarPeticiones, setMostrarPeticiones] = useState(false);
  const [mostrarTarjetas, setMostrarTarjetas] = useState(false);
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);


  const mostrarFormularioRecurso = () => {
    setMostrarTarjetas(false);
    setMostrarFormulario(true);
  };

  return (
    <>
    <div className="container-fluid m-5">
    <h5>Te damos la Bienvenida, "Nombre"</h5>
    </div>
      <div className="container-fluid m-5">
        <div className="mt-5">
          <button
            type="button"
            className="btn btn primario m-3"
            onClick={() => {
              setMostrarPeticiones(true);
              setMostrarTarjetas(false);
              setMostrarDatos(false);
              setMostrarFormulario(false);
            }}
          >
            Gestionar peticiones
          </button>
          <button
            type="button"
            className="btn btn primario m-3"
            onClick={() => {
              setMostrarPeticiones(false);
              setMostrarTarjetas(true);
              setMostrarDatos(false);
              setMostrarFormulario(false);
            }}
          >
            Gestionar recurso
          </button>
          <button
            type="button"
            className="btn btn primario m-3"
            onClick={() => {
              setMostrarPeticiones(false);
              setMostrarTarjetas(false);
              setMostrarDatos(true);
              setMostrarFormulario(false);
            }}
          >
            Datos usuario
          </button>
          {mostrarTarjetas && !mostrarPeticiones && !mostrarDatos && (
            <div className="col-8 m-3 justify-content-center">
              <div className="row">
                <div className="card shadow bg-light rounded p-4">
                  <h5>Gestionar Recurso</h5>
                  <div className="card bg-white mt-3 d-flex">
                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <h5 className="card-title">Recurso</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor dui quis
                          imperdiet iaculis. Suspendisse potenti. Suspendisse iaculis urna orci. Suspendisse potenti.
                          Suspendisse iaculis urna orci
                        </p>
                      </div>
                      <div className="d-inline-flex align-items-center">
                        <button className="btn btn-danger me-2">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button className="btn btn-primary">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3 text-center">
                    <button
                      className="btn btn primario"
                      onClick={mostrarFormularioRecurso}
                    >
                      Crear nuevo recurso
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {mostrarDatos && !mostrarPeticiones && !mostrarTarjetas && (
            <div className="col-8 m-3 d-flex justify-content-start">
              <div className="row">
                <div className="card shadow bg-light rounded m-3 p-3">
                  <h5>Tus datos de usuario</h5>
                  <div className="row mt-1">
                    <ul className="col-6 list-unstyled text-start">
                      <li>
                        <p className="mb-1">Nombre completo</p>
                      </li>
                      <li>
                        <p className="mb-1">DNI-NIE</p>
                      </li>
                    </ul>
                    <ul className="col-6 list-unstyled text-start">
                      <li>
                        <p className="mb-1">Correo Electrónico</p>
                      </li>
                      <li>
                        <p className="mb-1">Cambiar contraseña</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card shadow bg-light rounded m-3 p-3">
                  <h5>Datos de tu ONG</h5>
                  <div className="row mt-1">
                    <ul className="col-6 list-unstyled text-start">
                      <li>
                        <p className="mb-1">Nombre</p>
                      </li>
                      <li>
                        <p className="mb-1">CIF</p>
                      </li>
                      <li>
                        <p className="mb-1">Teléfono</p>
                      </li>
                    </ul>
                    <ul className="col-6 list-unstyled text-start">
                      <li>
                        <p className="mb-1">Correo Electrónico</p>
                      </li>
                      <li>
                        <p className="mb-1">Dirección</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {mostrarPeticiones && !mostrarTarjetas && !mostrarDatos && (
          <div className="col-8 m-3 d-flex justify-content-center">
          <div className="row">
            <div className="card shadow bg-light rounded p-4">
              <h5>Gestionar Mensajes</h5>
              <div className="card bg-white mt-3 d-flex">
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5 className="card-title">Nombre</h5>
                    <p className="card-text">
                      Peticion: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor dui quis
                      imperdiet iaculis. Suspendisse potenti. Suspendisse iaculis urna orci. Suspendisse potenti.
                      Suspendisse iaculis urna orci
                    </p>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 me-3">Telefono</p>
                      <p className="mb-0 me-3">Mail</p>
                      <p className="mb-0">Preferencia</p>
                    </div>
                  </div>
                  <div className="d-inline-flex align-items-center">
                    <button className="btn btn-warning me-2 ">
                    <i class="fa-solid fa-star"></i>
                    </button>
                    <button className="btn btn-success ">
                    <i class="fa-sharp fa-solid fa-circle-check"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
         <div className="col-10  d-flex justify-content-center">
        {mostrarFormulario && (
          <FormularioRecurso />
        )}
        </div>
      </div>
    </>
  );
};

export default Perfil;
