import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { DescripcionRecurso } from "../component/descripcionRecurso";

export const Detallerecurso = () => {
  const { store, actions } = useContext(Context);

  return (
<>


  <div className= "d-flex justify-content-center">
    <DescripcionRecurso />
    
  </div>
  <div className="container">
  <div className="text-start m-3 ">
  <Link to="/" className="btn btn-secondary" style={{ width: '150px' }}>Volver</Link>
  </div>

  <div className="text-end m-3 ">
  <Link to="/OngCard" className="btn btn-secondary" style={{ width: '150px' }}>Ver ONG</Link>
  </div>
  </div>
</>
  );
};