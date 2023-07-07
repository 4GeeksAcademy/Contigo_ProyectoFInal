import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardRecursos  from "../component/cardRecursos"; 
import { Link } from "react-router-dom";

export const OngCard = () => {
  const { store, actions } = useContext(Context);

  return (
<>
<div className="d-flex justify-content-center m-2 mt-5">
<div className="card shadow bg-light  w-75 m-5 ">
    <div className="card-body">
      <div className="row">
        <div className="col">
        <div className="text-lef m-3">
          <img src="https://loremflickr.com/800/500/logotype " alt="Imagen" className=" img-fluid rounded w-50  "/>
          </div> 
        </div>
        <div className="col">
        <div className="d-flex align-items-center">
              <h2 className="card-title">Nombre Ong</h2>
              <h5 className="card-text ms-3">Web</h5>
            </div>
            <div class="d-flex flex-column align-items-left">
            <p>Descripción:</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dignissim tortor, eget placerat nunc. Maecenas nisi tellus, euismod et justo non, dignissim rutrum purus.</p>
            </div>
        </div>
        <div className="col align-self-start">
  <ul className="list-group d-flex align-items-start">
    <li><h5>Contacto:</h5></li>
    <li>Nombre Ong:</li>
    <li>Dirección:</li>
    <li>Teléfono:</li>
  </ul>
</div>
      </div>
      <div className="d-flex justify-content-center m-2 mt-5">
      <CardRecursos/>
      <CardRecursos/>
      <CardRecursos/>
      </div>
    </div>
  </div>
  
  </div>

  <div className="text-start m-3 ">
  <Link to="/" className="btn btn-secondary" style={{ width: '150px' }}>Volver</Link>
  </div>
</>
  );
};