import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/formulario.css";

export const Perfil = () => {
  const [data, setData] = useState({});


  const handleChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };
  const [checked, setChecked] = useState(false);

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

    fetch(process.env.BACKEND_URL + "api/nuevo_recurso", config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then((response) => {
        console.log("Éxito:", response);
        setSuccess(true);
      })
      .catch((error) => console.error("Error:", error));
      
  };

  return (
    <>
      {
        <div className="container-fluid m-5">
          <h2 className="subtitulo col-8 m-auto py-4"> Nuevo Recurso </h2>
          <div className="card col-8 m-auto shadow">
            <div className="card-body">
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-8 my-2">
                  <label htmlFor="nombre" className="form-label my_label">
                    Nombre del Recurso
                  </label>
                  <input
                    type="text"
                    className="my_input form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-4 my-2">
                  <label htmlFor="categoria" className="form-label my_label">
                    Categoria
                  </label>
                  <select
                    className="form-select my_input form-control"
                    aria-label="Default select example"
                    id="categoria"
                    value={data.categoria}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona la categoría</option>
                    <option value="Alimentos">Alimentos</option>
                    <option value="Empleo">Empleo</option>
                    <option value="Extranjería-Legal">Extranjería-Legal</option>
                    <option value="Higiene-Salud">Higiene-Salud</option>
                    <option value="Ocio">Ocio</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Vivienda">Vivienda</option>
                  </select>
                </div>
                <div className="col-md-1 my-2">
                  <label htmlFor="virtual" className="form-label my_label">
                    Virtual
                  </label>
                  <div className="form-check">
                  <input className="form-check-input"
                    type="checkbox"
                    id="virtual"
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                  />
                  </div>
                </div>
                <div className="col-md-8 my-2">
                  <label htmlFor="direccion" className="form-label my_label">
                    Dirección
                  </label>
                  <input
                    type="adress"
                    className="my_input form-control"
                    id="direccion"
                    name="direccion"
                    placeholder="Dirección"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2 my-2">
                  <label
                    htmlFor="codigo_postal"
                    className="form-label my_label"
                  >
                    Código Postal
                  </label>
                  <input
                    type="number"
                    className="my_input form-control"
                    id="codigo_postal"
                    name="codigo_postal"
                    placeholder="Código Postal"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 my-2">
                  <label htmlFor="telefono" className="form-label my_label">
                    Teléfono de contacto
                  </label>
                  <input
                    type="number"
                    className="my_input form-control"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2 my-2">
                  <label htmlFor="img" className="form-label my_label">
                    Cargar imagen
                  </label>
                  <input
                    type="url"
                    className="my_input form-control"
                    id="img"
                    name="img"
                    placeholder="Escribe la URL de la imagen"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2 my-2">
                  <label htmlFor="fichero" className="form-label my_label">
                    Cargar fichero
                  </label>
                  <input
                    type="url"
                    className="my_input form-control"
                    id="fichero"
                    name="fichero"
                    placeholder="Subir fichero"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12 my-2">
                  <label htmlFor="descripcion" className="form-label my_label">
                    Descripción
                  </label>
                  <textarea
                    className="my_input form-control"
                    id="descripcion"
                    name="descripcion"
                    placeholder="Completa con una breve descripción"
                    onChange={handleChange}
                  ></textarea>
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
                Guardar recurso
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};
