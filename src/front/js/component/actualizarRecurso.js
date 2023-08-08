import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/formulario.css";


export const ActualizarRecurso = ({ recurso, onCancel, onSubmit }) => {
  const [virtual, setVirtual] = useState(false);
  const [fichero, setFichero] = useState(null);

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    categoria: '',
    direccion: '',
    codigo_postal: '',
    telefono: '',
    img: '',
    fichero: '',
    descripcion: '',
  });

  useEffect(() => {
    setDatosFormulario({
      nombre: recurso.nombre || '',
      categoria: recurso.categoria || '', 
      direccion: recurso.direccion || '', 
      codigo_postal: recurso.codigo_postal || '', 
      telefono: recurso.telefono || '', 
      img: recurso.img || '', 
      descripcion: recurso.descripcion || '', 
    });
  }, [recurso]);

  
  const handleChange = (event) => {
  const { id, type, value, checked, files } = event.target;
  const fieldValue = type === "checkbox" ? checked : type === "file" ? files[0] : value;

    if (type === "file") {
      setFichero(files[0]); // Asociar el archivo seleccionado a la variable "fichero"
    } else {
      setDatosFormulario((prevDatosFormulario) => ({
        ...prevDatosFormulario,
        [id]: fieldValue,
      }));

      if (id === "virtual") {
        setVirtual(checked);
      }
    }
  };

  const handleActualizar = (event) => {
    event.preventDefault();
    const requestData = { ...datosFormulario, virtual: virtual };
    const formData = new FormData();

    for (const key in requestData) {
      formData.append(key, requestData[key]);
    }

    formData.append("fichero", fichero);

    const config = {
      method: "PUT",
      body: formData,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt-token")}`,
        },
    };

    fetch(process.env.BACKEND_URL + `api/recursos/${recurso.id}`, config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la solicitud");
        }
        return res.json();
      })
      .then((response) => {
        console.log("Éxito:", response);
        onSubmit();
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Hubo un error al guardar el recurso. Por favor, inténtalo nuevamente.");
      });
  };


  return (
    <>
      <div className="row m-auto ">
        <p className="mi_titulo col-12 m-auto p-2 mt-4 border-top"> Actualizar información del recurso: {recurso.nombre} </p>
        <div className="card border-0 col-12 m-auto bg-light">
          <div className="card-body">
            
            <form className="row" onSubmit={handleActualizar} encType="multipart/form-data">
            <div className="row">
              <div className="col-md-8 col-sm-12 my-2">
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
                  value={datosFormulario.nombre}
                />
              </div>
              <div className="col-md-4 col-sm-12 my-2">
                <label htmlFor="categoria" className="form-label my_label">
                  Categoria
                </label>
                <select
                  className="form-select my_input form-control"
                  aria-label="Default select example"
                  id="categoria"
                  value={datosFormulario.categoria}
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
                  value={datosFormulario.direccion}
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
                  value={datosFormulario.codigo_postal}
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
                  value={datosFormulario.telefono}
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
                  value={datosFormulario.img}
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
                  value={datosFormulario.descripcion}
                ></textarea>
              </div>
          
            </form>
          </div>

          <div className="row justify-content-center d-grid gap-2 d-md-flex">
            <div className="col-lg-6 col-sm-10 col-xs-12 text-center ">
                <button type="button" className="btn btn-outline-secondary" onClick={onCancel}> Cancelar <i className="fas fa-ban"></i></button>
            </div>
            <div className="col-lg-6 col-sm-10 col-xs-12 text-center ">
            <button type="submit" className="btn btn-outline-secondary mb-4" onClick={handleActualizar}>Actualizar <i className="far fa-thumbs-up"></i></button>
            </div>
          </div>
              
        </div>
      </div>
    </>
  );
};

export default ActualizarRecurso;