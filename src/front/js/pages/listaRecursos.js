import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardRecursos  from "../component/cardRecursos"; 
import { useParams, useNavigate } from "react-router-dom";

export const ListaRecursos = () => {
  const { store, actions } = useContext(Context);
  const { categoria } = useParams();
  const navigate = useNavigate()


  useEffect(() => {
    actions.get_recurso_categoria(categoria)
  }, [categoria]);

  const seleccionarCategoria = (nuevaCategoria) => {
    navigate(`/listarecursos/${nuevaCategoria}`);
  };

  return (
  <>

      <div className="container-fluid">
      <div className="row text-center align-items-center justify-content-center m-auto">
				<div className="col-10 jumbotron_4 p-3 mt-4 border rounded-3 mb-3">
					<h5 className="mi_titulo">Estos son los recursos de la categoria <span className="texto_especial">{categoria}</span></h5>
				</div>
			</div>
      <div className= "row d-flex justify-content-center">
        
        <div className="col-10 text-start m-3">
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="fs-5">Elegir otra categoría</span>
            </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Alimentos')}>Alimentos</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Salud')}>Salud</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Ropa')}>Ropa</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Vivienda')}>Vivienda</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Formacion')}>Formación</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Empleo')}>Empleo</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Legales')}>Legales</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('Ocio')}>Ocio</li>
                </ul>
          </div>
        </div>
      </div>
      
      <div className="row d-flex align-items-center justify-content-center m-auto px-5">

          { store.recursosCategoria.length > 0 ? (

            store.recursosCategoria.map((recurso) => ( 
              
              <div className="col-lg-3 col-md-6 col-xs-12" key={recurso.id}>
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
            ))

            ) : (

              <div className="container my-5">
              <div className="my_jumbotron jumbotron p-5 col-10 m-auto text-center rounded-3">
                <h3 className="display-6">¡Ups! <i className="fas fa-surprise"></i></h3>
                <p className="col-10 mx-auto mb-3 fs-5 text-muted">
                  No hay recursos para mostrar de esta categoría, sigue explorando otras.
                </p>
              </div>
            </div>  
            
            )}
       
      </div>  

        <div className= "d-flex justify-content-center">
          <div className="col-10 text-start m-3">
            <button className="btn secundario" style={{ width: '150px' }} onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
      </div>
   
    </>
  );
};