import React from "react";
import { Link } from "react-router-dom";
import "../../styles/peticion.css";
import { useState } from "react";

export const Enviar_peticion = () => {
  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    const config = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application.json",
      },
    };

    fetch(process.env.BACKEND_URL + "api/peticion", config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hay un error en la solicitud");
        }
        return res.json();
      })
      .then((response) => {
        if (response.Error) {
          console.log("Error:", response);
          alert(response.Error);
        } else {
          console.log("Exito:", response);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container-fluid contenido-peticion">
      <h2 className="subtitulo col-8 m-auto text-center py-4">
        {" "}
        ¿Quieres que la ONG se ponga en contacto contigo?{" "}
      </h2>

      <div className="card col-8 m-auto shadow">
        <div className="card-body">
          <form className="row" onSubmit={handleSubmit}>
            <div className="col my-2">
              <label htmlFor="nombre" className="my_label form-label">
                Nombres
              </label>
              <input
                type="text"
                className="my_input form-control"
                id="nombre"
                name="nombre"
                placeholder="Escribe tu nombre"
                required
                onChange={handleChange}
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
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 my-2">
              <label htmlFor="teléfono" className="my_label form-label">
                Teléfono
              </label>
              <input
                type="number"
                className="my_input  form-control"
                id="telefono"
                name="telefono"
                placeholder="Teléfono"
                required
                onChange={handleChange}
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
                required
                onChange={handleChange}
              />
            </div>

            <div className=" col-md-8 mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="my_label form-label"
              >
                Escribe tu mensaje aqui
              </label>
              <textarea
                className="form-control"
                id="texto"
                rows="6"
                onChange={handleChange}
              ></textarea>
            </div>

            <div
              className="col-md-4 my_label preferencias"
              onChange={handleChange}
            >
              ¿Como prefieres que te contactemos?
              <div className="form-check seleccion-preferencias">
                <input
                  value="telefono"
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="preferencia"
                />
                <label className="form-check-label" htmlFor="preferencia">
                  Teléfono
                </label>
              </div>
              <div className="form-check seleccion-preferencias">
                <input
                  value="email"
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="preferencia"
                  
                />
                <label className="form-check-label" htmlFor="preferencia">
                  Email
                </label>
              </div>
              <div className="form-check seleccion-preferencias">
                <input
                  value="ambos"
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="preferencia"
                  
                />
                <label className="form-check-label" htmlFor="preferencia">
                  Ambos
                </label>
              </div>
            </div>
          </form>

          <div className="col-md-12 enviar-mensaje card-footer gap-2 d-flex justify-content-center">
            <Link to="">
              <button
                type="submit"
                className="btn button-enviar btn-outline-secondary"
                onClick={handleSubmit}
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
