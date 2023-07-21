import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid contenido">
      <div className="row text-center align-items-center justify-content-center m-auto">
        <div className="col-md-12 col-lg-8 text-center m-auto">
          <h5 className="mi_titulo">¿Estás buscando información?</h5>
          <p className="mi_subtitulo">
            Selecciona la categoría y te mostraremos recursos sociales a los que
            puedes recurrir si te encuentras en Madrid
          </p>
        </div>
      </div>

      <div className="row categorias text-center justify-content-center m-auto">
        <div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
          <Link
            to={`/listarecursos/Alimentos`}
            className="icon"
            title="Alimentos"
          >
            <img
              className="rounded-circle"
              alt="alimentos"
              src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Alimentos"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                ALIMENTOS<i className="fa-solid icons fa-utensils"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
          <Link to={`/listarecursos/Salud`} className="icon" title="Salud">
            <img
              className="rounded-circle"
              alt="higiene-salud"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Higiene-Salud"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                SALUD<i className="fa-solid icons fa-stethoscope"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
          <Link to={`/listarecursos/Ropa`} className="icon" title="Ropa">
            <img
              className="rounded-circle"
              alt="ropa"
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Ropa"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                ROPA<i className="fa-solid icons fa-shirt"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 py-sm-1 col-md-4 col-lg-3 py-md-4 images">
          <Link
            to={`/listarecursos/Vivienda`}
            className="icon"
            title="Vivienda"
          >
            <img
              className="rounded-circle"
              alt="vivienda"
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Vivienda"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                VIVIENDA<i className="fa-solid icons fa-bed"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
          <Link
            to={`/listarecursos/Formacion`}
            className="icon"
            title="Formación"
          >
            <img
              className="rounded-circle"
              alt="formación"
              src="https://images.unsplash.com/photo-1512238972088-8acb84db0771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Formación"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                FORMACIÓN<i className="fa-solid icons fa-chalkboard-user"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
          <Link to={`/listarecursos/Empleo`} className="icon" title="Empleo">
            <img
              className="rounded-circle"
              alt="empleo"
              src="https://images.unsplash.com/photo-1589793463308-658ed42e5dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Empleo"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                EMPLEO<i className="fa-solid icons fa-briefcase"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
          <Link to={`/listarecursos/Legales`} className="icon" title="Legales">
            <img
              className="rounded-circle"
              alt="legales"
              src="https://plus.unsplash.com/premium_photo-1661542759930-9cf315dae451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Extranjería-Legal"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                LEGALES<i className="fa-solid icons fa-passport"></i>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
          <Link to={`/listarecursos/Ocio`} className="icon" title="Ocio">
            <img
              className="rounded-circle"
              alt="ocio"
              src="https://images.unsplash.com/photo-1603351820686-f6473ef07e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Ocio"
            ></img>
            <div className="overlay rounded-circle  text-center justify-content-center m-auto">
              <div className="text">
                OCIO<i className="fa-solid icons fa-person-running"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="container my-5">
        <div className="my_jumbotron jumbotron p-5 col-lg-8 col-sm-10 m-auto text-center rounded-3">
          <h3>¿Trabajas en una ONG?</h3>
          <p className="mx-auto mb-3 fs-5 text-muted">
            Inicia sesión para gestionar recursos y leer mensajes privados
          </p>
          <Link to="/login">
            <button
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
            >
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
