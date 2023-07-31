import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DatosPersonales = ({ userData }) => {
const token = localStorage.getItem('jwt-token');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setFormData({
      nombre: userData.nombre || '',
      apellido: userData.apellido || '',
      email: userData.email || '',
      contraseña: '', 
    });
  }, [userData]);


  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSaveChanges = async () => {
    try {
      const response = await fetch((process.env.BACKEND_URL + "api/perfil"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al guardar los cambios");
      }
      alert("Cambios guardados exitosamente")
      setEditMode(false);
    } catch (error) {
      console.error(error);
      alert(error)
    }
  };

  return ( 

    <>
    
        <div className="container-fluid">
            <h3 className="mi_titulo col-12 mb-3"> Tus datos de usuario </h3>
			    <div className="card col-12 m-auto shadow">
				    <div className="card-body ">
              <form className="row m-3 justify-content-center" onSubmit={handleSaveChanges}>
                  <div className="col-10">
                  <label htmlFor="nombre" className="form-label my_label">Nombre:</label>
                      {!editMode ? (
                          <input className="my_input form-control" type="text" value={formData.nombre} readOnly />
                      ) : (
                          <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="my_input form-control"
                          />
                      )}
                  </div>
                  <div className="col-10 my-2">
                      <label htmlFor="apellido" className="form-label my_label">Apellido:</label>
                      {!editMode ? (
                          <input className="my_input form-control" type="text" value={formData.apellido} readOnly />
                      ) : (
                          <input
                          type="text"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleInputChange}
                          className="my_input form-control"
                          />
                      )}
                  </div>
                  <div className="col-10 my-2">
                      <label htmlFor="email" className="form-label my_label">Email:</label>
                      {!editMode ? (
                          <input className="my_input form-control" type="email" value={formData.email} readOnly />
                      ) : (
                          <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="my_input form-control"
                          />
                      )}
                  </div>
              </form>

                <div className="row justify-content-center d-grid gap-2 d-md-flex">
                    <div className="col-lg-6 col-sm-10 col-xs-12 text-center ">
        
                    {editMode ? (
                        <button type="button" className="btn btn-outline-secondary mb-1" onClick={handleSaveChanges}>Guardar cambios <i className="far fa-check-circle"></i></button>
                    ) : (
                        <button type="button" className="btn btn-outline-secondary mb-1" onClick={() => setEditMode(true)}>Cambiar datos <i className="fas fa-edit"></i></button>
                    )}
                    </div>
                    <div className="col-lg-6 col-sm-10 col-xs-12 text-center ">
                    <button type="button" className="btn btn-outline-secondary">Cambiar contraseña <i className="fas fa-key"></i></button>
                    </div>
                </div>
            </div>

        </div>
      </div>

    </>

  );

};

export default DatosPersonales;

