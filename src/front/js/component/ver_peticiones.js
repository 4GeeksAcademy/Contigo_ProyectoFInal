import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import NombreRecurso from "./nombreRecurso";

export const Ver_peticiones = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.get_peticiones();
  }, []);


  const handleEliminarPeticion = (peticionId) => {
    actions.eliminarPeticion(peticionId);
  }

  return (

    <>
      
      { store.ver_peticion.length === 0 ? (
        <p className="mi_titulo text-center mt-3">No hay mensajes <i className="far fa-frown"></i></p>
      ) : (
    
      store.ver_peticion.map((peticion) => (
        <div className="card bg-white mt-3 d-flex" key={peticion.id}>
          <div className="card-body d-flex justify-content-between">
            <div>
              <h5 className="card-title">
                <strong>
                  {peticion.nombre} {peticion.apellido}
                </strong>
              </h5>
              <p className="card-text">
                <strong>Mensaje:</strong> {peticion.texto}
              </p>
              
                <NombreRecurso recurso_id={peticion.recurso_id} />
              
              <div className="d-flex align-items-center">
                <p className="mb-0 me-3">
                  <strong>Preferencia:</strong> {peticion.preferencia}
                </p>
                <p className="mb-0 me-3">
                  <i className="fas fa-phone"></i> {peticion.telefono}
                </p>
                <p className="mb-0 me-3">
                  <i className="far fa-envelope"></i> {peticion.email}
                </p>
              </div>
            </div>

             <div className="d-inline-flex align-items-center">
              <button className="btn btn-danger me-2" onClick={() => handleEliminarPeticion(peticion.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>

          </div>
        </div>
      ))
    
      )}
         
    </>
  );
};
