import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/ongCard.css";
import CardRecursos  from "../component/cardRecursos"; 
import { useParams, useNavigate } from "react-router-dom";

export const OngCard = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    actions.get_ong_por_id(id);
  }, [id]);

  useEffect(() => {
    actions.get_recurso_ong(id);
  }, [id]);

  return (
    <>
      <div className="row  d-flex justify-content-center">
        <div className="col-8">
          <div className="row d-flex justify-content-center m-5 card shadow">
            <div className="card-header">
              <h4 className="titulo_1 text-center"><strong>{store.infoOng.nombre}</strong></h4>
            </div>
            <div className="row card-body">
              <div className="col-lg-6 col-md-12">
                <div className="text-center m-3">
                  <img src={store.infoOng.logo} alt="Imagen" className="img-fluid" style={{ maxWidth : '250px'}}/>
                </div> 
              </div>
              <div className="col-lg-6 col-md-12">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong><i className="fas fa-at"></i> Email:</strong> {store.infoOng.email}</li>
                  <li className="list-group-item"><strong><i className="fas fa-map-marker-alt"></i> Dirección:</strong> {store.infoOng.direccion} - {store.infoOng.codigo_postal}</li>
                  <li className="list-group-item"><strong><i className="fas fa-phone"></i> Tel:</strong> {store.infoOng.telefono}</li>
                  <li className="list-group-item"><strong><i className="fas fa-external-link-alt"></i> Web:</strong> <a href={store.infoOng.url} target="_blank">{store.infoOng.url}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <div className= "row d-flex mx-5">
          {store.recursosOng.map((recurso) => ( 
            <div className="col-12 col-md-4 col-lg-3 justify-content-center m-auto" key={recurso.id}>
              <CardRecursos
                key={recurso.id}
                id={recurso.id}
                nombre={recurso.nombre}
                descripcion={recurso.descripcion}
                ong={recurso.ong}
                direccion={recurso.direccion}
              />
            </div> 
        ))}
        
      </div>
        
      <div className="text-start m-5 ">
        <button className="btn secundario" style={{ width: '150px' }} onClick={()=> navigate(-1)}>Volver</button>
      </div>
    </>
  );
};