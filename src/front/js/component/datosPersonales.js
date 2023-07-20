import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const DatosPersonales = ({ userData }) => {
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

  const handleSaveChanges = () => {
    // Aquí es donde enviarías la petición PUT para guardar los cambios en el backend.
    // Puedes usar la variable formData para obtener los nuevos valores del usuario.

    // Una vez que la petición PUT sea exitosa, puedes mostrar un mensaje de éxito o realizar otras acciones necesarias.
    // Por simplicidad, en este ejemplo, solo cambiaremos el estado de edición a falso.
    setEditMode(false);
  };

  return ( 

    <>
    
    <div>
      <h2>Datos Personales</h2>
      <form>
        <div>
          <label>Nombre:</label>
          {!editMode ? (
            <input type="text" value={formData.nombre} readOnly />
          ) : (
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          )}
        </div>
        <div>
          <label>Apellido:</label>
          {!editMode ? (
            <input type="text" value={formData.apellido} readOnly />
          ) : (
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
            />
          )}
        </div>
        <div>
          <label>Email:</label>
          {!editMode ? (
            <input type="email" value={formData.email} readOnly />
          ) : (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          )}
        </div>
        <div>
          <label>Contraseña:</label>
          {!editMode ? (
            <input type="password" value="********" readOnly />
          ) : (
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleInputChange}
            />
          )}
        </div>
      </form>
      {editMode ? (
        <button onClick={handleSaveChanges}>Guardar cambios</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Cambiar datos</button>
      )}
    </div>
    
    </>

  );

};

export default DatosPersonales;

