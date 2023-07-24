import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/peticion.css";
import { useParams } from "react-router-dom";

export const Enviar_peticion = () => {
  const [data, setData] = useState({});
  const { recurso_id } = useParams();
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
      recurso_id: recurso_id,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);

    const config = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {success ? (
        <div className="container my-5">
          <div className="my_jumbotron jumbotron p-5 col-10 m-auto text-center rounded-3">
            <h3 className="display-6">Envío exitoso</h3>
            <p className="col-10 mx-auto mb-3 fs-5 text-muted">
              Tu mensaje se ha enviado a la ONG. Pronto se pondrán en contacto
              contigo.
            </p>
            <Link to="/">
              <button
                className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
                type="button"
              >
                Volver a inicio
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container-fluid mb-4">
          <h2 className="subtitulo col-8 m-auto text-center py-4">
            ¿Quieres que la ONG se ponga en contacto contigo?
          </h2>

          <div className="card col-8 m-auto shadow">
            <div className="card-body">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6 my-2">
                  <label htmlFor="nombre" className="my_label form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="my_input form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Escribe tu nombre"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="apellido" className="my_label form-label">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    className="my_input form-control"
                    id="apellido"
                    name="apellido"
                    placeholder="Escribe tus apellidos"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 my-2">
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

                <div className="col-md-6 my-2">
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
            </div>

            <div className="col-md-12 card-footer text-body-secondary gap-2 d-flex justify-content-end">
              <Link to="/">
                <button type="button" className="btn secundario">
                  Cancelar
                </button>
              </Link>
              <button
                type="submit"
                className="btn primario"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};
