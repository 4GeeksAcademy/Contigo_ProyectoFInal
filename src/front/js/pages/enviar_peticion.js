import React from "react";
import { Link } from "react-router-dom";
import "../../styles/peticion.css";

export const Enviar_peticion = () => {
  return (
    <div className="container-fluid contenido-peticion">
      <h2 className="subtitulo col-8 m-auto text-center py-4">
        {" "}
        ¿Quieres que la ONG se ponga en contacto contigo?{" "}
      </h2>

      <div className="card col-8 m-auto shadow">
        <div className="card-body">
          <form className="row ">
            <div className="col my-2">
              <label htmlForfor="nombre" className="my_label form-label">
                Nombres
              </label>
              <input
                type="text"
                className="my_input form-control"
                id=" nombre"
                name="nombre"
                placeholder="Escribe tu nombre"
                required
              />
            </div>
            <div className="col-12 my-2">
              <label htmlFor="apellido" className="my_label form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="my_input form-control"
                id="apellido"
                name="apellido"
                placeholder="Escribe tus apellidos"
              />
            </div>
            <div className="col-md-4 my-2">
              <label htmlFor="teléfono" className="my_label form-label">
                Teléfono
              </label>
              <input
                type="number"
                className="my_input form-control"
                id="number"
                name="number"
                placeholder="Teléfono"
              />
            </div>

            <div className="col-md-4 my-2">
              <label htmlFor="recursoID" className="my_label form-label">
                RecursoID
              </label>
              <input
                type="number"
                className="my_input form-control"
                id="number"
                name="number"
                placeholder="ID"
              />
            </div>
            <div className="col-md-8 my-2">
              <label htmlFor="email" className="my_label form-label">
                Email
              </label>
              <input
                type="email"
                className="my_input form-control"
                id="email"
                name="email"
                placeholder="ejemplo@email.com"
              />
            </div>

            <div className=" col-md-8 mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="my_label form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>

            <div className="col-md-4 my_label preferencias ">
              ¿Como prefieres que te contactemos?
              <div className="form-check seleccion-preferencias">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Teléfono
                </label>
              </div>
              <div className="form-check seleccion-preferencias">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Email
                </label>
              </div>
              <div className="form-check seleccion-preferencias">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" for="flexRadioDefault3">
                  Ambos
                </label>
              </div>
            </div>
          </form>

          <div className="col-md-12 enviar-mensaje card-footer gap-2 d-flex justify-content-center">
            <Link to="">
              <button
                type="button"
                className="btn button-enviar btn-outline-secondary"
              >
                Enviar Mensaje
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline-secondary button-volver"
          >
            Volver
          </button>
        </Link>
      </div>
    </div>
  );
};
