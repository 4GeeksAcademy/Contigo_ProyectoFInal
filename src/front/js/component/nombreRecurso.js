import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const NombreRecurso = ({ recurso_id }) => {
    const { store, actions } = useContext(Context);
    const [nombre, setNombre] = useState(null)
  
    useEffect(() => {
        const fetchNombreRecurso = async () => {
          try {
            const response = await fetch(process.env.BACKEND_URL + `api/detallerecurso/${recurso_id}`, {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt-token'),
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            setNombre(data.nombre);
          } catch (error) {
            console.error('Error al obtener el nombre del recurso:', error);
          }
        };
    
        fetchNombreRecurso();
      }, [recurso_id]);
  
    return (
      <p className="card-text">
        <strong>Recurso:</strong> {nombre}
      </p>
    )
};


export default NombreRecurso;