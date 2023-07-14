import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardRecursos  from "../component/cardRecursos"; 
import { Link, useParams } from "react-router-dom";

export const OngCard = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const obtenerInformacionOng = async () => {
      try {
        const response = await fetch(process.env.BACKEND_URL + `api/ong/${id}`);
        if (!response.ok) {
          throw new Error('Error al cargar la información');
        }
        const data = await response.json();
        setInfo(data)
      } catch (error) {
        console.error(error.message);
      }
    };

    obtenerInformacionOng();
  }, [id]);


  return (
    <>
      <div className="row d-flex justify-content-center m-5 card shadow">
          <div class="card-header">
            <h4>{info.nombre}</h4>
          </div>
          <div className="row card-body">
              <div className="col">
              <div className="text-center m-3">
                <img src={info.logo} alt="Imagen" className="img-fluid" style={{ maxWidth : '250px'}}/>
                </div> 
              </div>
              <div className="col">
              <div className="d-flex align-items-center">
                    <h2 className="card-title"></h2>
                    <h5 className="card-text ms-3">Web</h5>
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
 </div>
        <div className="row">
          <div className="d-flex justify-content-center m-2 mt-5">
            <CardRecursos/>
            <CardRecursos/>
            <CardRecursos/>
            </div>
        </div>
        
       

        <div className="text-start m-5 ">
        <Link to="/" className="btn secundario" style={{ width: '150px' }}>Volver</Link>
        </div>
      </>
  );
};