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
    actions.getrecursoOngUsuario();
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
      <div key={recurso.id} className="d-flex align-items-center">
        <div className="me-3">
          <h5>{recurso.nombre}</h5>
          <p>{recurso.descripcion}</p>
        </div>
        <div className="d-inline-flex align-items-right">
          <button className="btn btn-danger me-2" onClick={() => handleEliminarRecurso(recurso.id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="btn btn-primary" onClick={() => handleActualizarRecurso(recurso)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
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

