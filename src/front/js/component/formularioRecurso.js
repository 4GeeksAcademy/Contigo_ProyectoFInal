import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/formulario.css";


export const FormularioRecurso = () => {
  const [data, setData] = useState({});
  const [virtual, setVirtual] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fichero, setFichero] = useState(null);
  const [error, setError] = useState(null);


  const handleChange = (event) => {
  const { id, type, value, checked, files } = event.target;
  const fieldValue = type === "checkbox" ? checked : type === "file" ? files[0] : value;

    if (type === "file") {
      setFichero(files[0]); // Asociar el archivo seleccionado a la variable "fichero"
    } else {
      setData((prevData) => ({
        ...prevData,
        [id]: fieldValue,
      }));

      if (id === "virtual") {
        setVirtual(checked);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const requestData = { ...data, virtual: virtual };

    const formData = new FormData();

    for (const key in requestData) {
      formData.append(key, requestData[key]);
    }

    formData.append("fichero", fichero);

    const config = {
      method: "POST",
      body: formData,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt-token")}`,
        },
    };

    fetch(process.env.BACKEND_URL + "api/recursos", config)
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
      .catch((error) => {
        console.error("Error:", error);
        setError("Hubo un error al guardar el recurso. Por favor, inténtalo nuevamente.");
      });
  };


  return (
    <>
      <div className="row m-auto">
        <h2 className="subtitulo col-lg-8 col-md-10 col-sm-12 m-auto p-4"> Nuevo Recurso </h2>
        <div className="card col-8 m-auto shadow">
          <div className="card-body">
            {success && (
              <div className="alert alert-success" role="alert">
                El recurso se cargó correctamente.
              </div>
            )}
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form className="row" onSubmit={handleSubmit} encType="multipart/form-data">
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
                  <option value="">Selecciona...</option>
                  <option value="Alimentos">Alimentos</option>
                  <option value="Empleo">Empleo</option>
                  <option value="Formacion">Formación</option>
                  <option value="Legales">Legales</option>
                  <option value="Salud">Salud</option>
                  <option value="Ocio">Ocio</option>
                  <option value="Ropa">Ropa</option>
                  <option value="Vivienda">Vivienda</option>
                </select>
              </div>
              <div className="col-md-2 my-2">
                <label htmlFor="virtual" className="form-label my_label">
                  ¿Es Online?
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="virtual"
                    checked={virtual}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-8 my-2">
                <label htmlFor="direccion" className="form-label my_label">
                  Dirección
                </label>
                <input
                  type="address"
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
                  Cód. Postal
                </label>
                <input
                  type="number"
                  className="my_input form-control"
                  id="codigo_postal"
                  name="codigo_postal"
                  placeholder="CP"
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
              <div className="col-md-4 my-2">
                <label htmlFor="img" className="form-label my_label">
                  URL imagen
                </label>
                <input
                  type="url"
                  className="my_input form-control"
                  id="img"
                  name="img"
                  placeholder="Imagen alusiva"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 my-2">
                <label htmlFor="fichero" className="form-label my_label">
                  Cargar img para difusión
                </label>
                <input
                  type="file"
                  className="my_input form-control"
                  id="fichero"
                  name="fichero"
                  placeholder="Subir archivo PNG o JPG"
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
            <button type="submit" className="btn primario" onClick={handleSubmit}>Guardar recurso</button>
          </div>  
        </div>
      </div>
    </>
  );
};

export default FormularioRecurso;