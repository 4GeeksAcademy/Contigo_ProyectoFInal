import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/ongCard.css";
import CardRecursos  from "../component/cardRecursos"; 
import { useParams, useNavigate } from "react-router-dom";
import MapComponent from "../component/mapa";

export const OngCard = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const direccionConMadrid = `${store.infoOng.direccion}, Madrid`;
  const encodedAddress = encodeURIComponent(direccionConMadrid);
  const mapURL = `https://www.google.com/maps?q=${encodedAddress}`;

  useEffect(() => {
    actions.get_ong_por_id(id);
  }, [id]);

  useEffect(() => {
    actions.get_recurso_ong(id);
  }, [id]);

  return (
    <>
      <div className="row justify-content-center m-3">
        <div className="col-lg-6 col-md-11 col-sm-11">
          <div className="row justify-content-center card shadow">
            <div className="card-header">
              <h4 className="titulo_1 text-center"><strong>{store.infoOng.nombre}</strong></h4>
            </div>
            <div className="row card-body">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="text-center m-3">
                  <img src={store.infoOng.logo} alt="Imagen" className="img-fluid" style={{ maxWidth : '250px'}}/>
                </div> 
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong><i className="fas fa-at"></i> Email:</strong> {store.infoOng.email}</li>
                  <li className="list-group-item"><strong><i className="fas fa-map-marker-alt"></i> Dirección:</strong><a href={mapURL} target="_blank" rel="noopener noreferrer"> {store.infoOng.direccion} - {store.infoOng.codigo_postal}</a></li>
                  <li className="list-group-item"><strong><i className="fas fa-phone"></i> Tel:</strong> {store.infoOng.telefono}</li>
                  <li className="list-group-item"><strong><i className="fas fa-external-link-alt"></i> Web:</strong> <a href={store.infoOng.url} target="_blank">{store.infoOng.url}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="row m-4 text-center">
        <MapComponent 
          direccion={store.infoOng.direccion}
        />

  </div> */}
        
      <div className="row m-3">
        <div className="row text-center align-items-center justify-content-center m-auto">
          <div className="col-lg-6 col-md-10 col-sm-11 jumbotron_4 p-3 border rounded-3">
            <h5 className="mi_titulo">Estos son los recursos que ofrece <span className="texto_especial">{store.infoOng.nombre}</span></h5>
          </div>
        </div>

        { store.recursosOng.length > 0 ? (

        <div id="carouselExample" className="col-lg-6 col-sm-12 align-items-center justify-content-center m-auto carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="false">
          <div className="carousel-inner">
         { store.recursosOng.map((recurso, index) => ( 
            <div className= {`carousel-item my-3${index === 0 ? ' active' : ''}`} key={recurso.id}>
              <CardRecursos
                key={recurso.id}
                id={recurso.id}
                nombre={recurso.nombre}
                descripcion={recurso.descripcion}
                ong_id={recurso.ong_id}
                codigo_postal={recurso.codigo_postal}
                img={recurso.img}
              />
            </div> 
        ))}

        </div>

      <button className="carousel-control-prev w-auto" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next w-auto" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>

        ) : (
              
        <div className="container my-5">
          <div className="my_jumbotron jumbotron p-5 col-lg-6 col-md-12 col-xs-12 m-auto text-center rounded-3">
            <h3 className="display-6">¡Ups! <i className="fas fa-surprise"></i></h3>
            <p className="col-10 mx-auto mb-3 fs-5 text-muted">
            Esta ONG aún no ha cargado sus recursos, sigue explorando otras.
            </p>
          </div>
        </div>  
      
        )}
        
      </div>  

      <div className="text-center m-5">
        <button className="btn secundario" style={{ width: '150px' }} onClick={()=> navigate(-1)}>Volver</button>
      </div>
    </>
  );
};