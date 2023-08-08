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
        <div className="col-12 card bg-white mt-3 d-flex" key={peticion.id}>
          <div className="col-12 card-body">
            <div>
              <h5 className="col-sm-10 card-title">
                <strong>
                  {peticion.nombre} {peticion.apellido}
                </strong>
              </h5>
              <p className="col-sm-10 card-text">
                <strong>Mensaje:</strong> {peticion.texto}
              </p>
              
                <NombreRecurso recurso_id={peticion.recurso_id} />
              
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-4 col-sm-12 m-auto">
                <p className="mb-0">
                  <strong>Contacto:</strong> {peticion.preferencia}
                </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m-auto">
                <p className="mb-0">
                  <i className="fas fa-phone"></i> {peticion.telefono}
                </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m-auto">
                <p className="mb-0">
                  <i className="far fa-envelope"></i> {peticion.email}
                </p>
                </div>
              </div>
            </div>

             <div className="align-items-center">
              <button className="btn btn-outline-danger mt-3" onClick={() => handleEliminarPeticion(peticion.id)}>
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
