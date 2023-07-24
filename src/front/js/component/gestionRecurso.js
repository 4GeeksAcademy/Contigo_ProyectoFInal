import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { ActualizarRecurso } from "./actualizarRecurso";


export const GestionRecurso =  () => {
  const { store, actions } = useContext(Context);
  const recursosOngUsuario = store.recursoOngUsuario;

  useEffect(() => {
    actions.getrecursoOngUsuario();
  }, []);

  const handleEliminarRecurso = (recursoId) => {
    actions.eliminarRecurso(recursoId);
  };

  const [mostrarActualizar, setMostrarActualizar] = useState(false);
  const [recursoSeleccionado, setRecursoSeleccionado] = useState(null);

  const handleActualizarRecurso = (recurso) => {
    setRecursoSeleccionado(recurso);
    setMostrarActualizar(true);
  };

  const handleCancelarEdicion = () => {
    setRecursoSeleccionado(null);
    setMostrarActualizar(false);
  };



  return (
    <div>
    { recursosOngUsuario.length === 0 ? (
        <p className="mi_titulo text-center mt-3">No hay recursos cargados <i className="far fa-frown"></i></p>

      ) : (
    
    recursosOngUsuario.map((recurso) => (
      <div key={recurso.id} className="row align-items-center justify-content-center px-4 py-2">
        <div className="row card bg-white">
          <div className="row d-flex card-body justify-content-center m-auto">
          <div className="col-10">
          <h5><strong>{recurso.nombre}</strong></h5>
          <p>{recurso.descripcion}</p>
             </div>
             <div className="col-2 d-flex gap-2 justify-content-end align-items-center">
              <button className="btn btn-danger me-2" onClick={() => handleEliminarRecurso(recurso.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className="btn btn-secondary" onClick={() => handleActualizarRecurso(recurso)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
         
          </div>

      </div>

      </div>


    ))
  )}

    {mostrarActualizar && recursoSeleccionado && (
      <div>
        <ActualizarRecurso
          recurso={recursoSeleccionado}
          onCancel={handleCancelarEdicion}
          onSubmit={() => {
            setRecursoSeleccionado(null);
            setMostrarActualizar(false);
            actions.getrecursoOngUsuario()
          }}
        />
      </div>
    )}

  </div>

  );
};


export default GestionRecurso;

