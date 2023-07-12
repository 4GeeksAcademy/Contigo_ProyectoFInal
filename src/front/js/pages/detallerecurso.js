import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import { DescripcionRecurso } from "../component/descripcionRecurso";

export const Detallerecurso = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const obtenerInformacionRecurso = async () => {
      try {
        const response = await fetch(process.env.BACKEND_URL + `api/detallerecurso/${id}`);
        if (!response.ok) {
          throw new Error('Error al cargar la información');
        }
        const data = await response.json();
        setInfo(data)
      } catch (error) {
        console.error(error.message);
      }
    };

    obtenerInformacionRecurso();
  }, [id]);



  return (
    <>
      <div className="container-fluid">
        <div className="row text-center align-items-center justify-content-center m-auto">
          <div className="col-10 jumbotron_4 p-3 mt-4 border rounded-3 mb-3">
            <h5 className="mi_titulo">Información del recurso <span className="texto_especial">{info.nombre}</span></h5>
          </div>
            
            <DescripcionRecurso 
              key={info.id}
              id={info.id}
              nombre={info.nombre}
              descripcion={info.descripcion}
              ong={info.ong}
              direccion={info.direccion}
            />

          <div className="row px-5 justify-content-center">
              <Link to="/OngCard" className="btn primario mx-2" style={{ width: '150px' }}>Ver ONG</Link>
              <Link to="/enviar_peticion" className="btn primario" style={{ width: '150px' }}>Contactar <i className="far fa-envelope"></i></Link>
          </div>

          <div className="row px-5 py-3 ml-3">
            <Link to="/" className="btn secundario" style={{ width: '150px' }}>Volver</Link>
          </div>
        </div>
      </div>

    </>
  );
};