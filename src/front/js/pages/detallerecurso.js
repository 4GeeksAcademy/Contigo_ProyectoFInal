import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate, useParams } from "react-router-dom";
import { DescripcionRecurso } from "../component/descripcionRecurso";

export const Detallerecurso = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    actions.get_info_recurso(id);
  }, [id]);


  return (
    <>
      <div className="container-fluid">
        <div className="row text-center align-items-center justify-content-center m-auto">
          <div className="col-lg-6 col-md-10 col-sm-11 jumbotron_4 p-3 mt-4 border rounded-3 mb-3">
            <h5 className="mi_titulo">Información del recurso <span className="texto_especial">{store.detalleRecurso.nombre}</span></h5>
          </div>
            
            <DescripcionRecurso 
              key={store.detalleRecurso.id}
              id={store.detalleRecurso.id}
              nombre={store.detalleRecurso.nombre}
              descripcion={store.detalleRecurso.descripcion}
              ong_id={store.detalleRecurso.ong_id}
              direccion={store.detalleRecurso.direccion}
              fichero={store.detalleRecurso.fichero}
              img={store.detalleRecurso.img}
              telefono={store.detalleRecurso.telefono}
              codigo_postal={store.detalleRecurso.codigo_postal}
              virtual={store.detalleRecurso.virtual}
            />


          <div className="row">
            <div className="col-lg-6 col-md-10 col-sm-11 px-5 py-3 ml-5">
            <button className="btn secundario" style={{ width: '150px' }} onClick={()=> navigate(-1)}>Volver</button>
          </div>
          </div>
        </div>
      </div>

    </>
  );
};