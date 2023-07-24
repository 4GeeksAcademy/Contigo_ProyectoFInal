import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const GestionRecurso =  () => {
  const { store } = useContext(Context);

  const recursosOngUsuario = store.recursoOngUsuario;


  return (
    <div>
    {recursosOngUsuario.map((recurso) => (
      <div key={recurso.id} className="d-flex align-items-center">
        <div className="me-3">
          <h5>{recurso.nombre}</h5>
          <p>{recurso.descripcion}</p>
        </div>
        <div className="d-inline-flex align-items-right">
          <button className="btn btn-danger me-2">
            <i className="fa-solid fa-trash"></i>
          </button>
          <button className="btn btn-primary">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>
    ))}
  </div>

  );
};
export default GestionRecurso;

