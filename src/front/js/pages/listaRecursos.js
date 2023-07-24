import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardRecursos  from "../component/cardRecursos"; 
import { useParams, useNavigate } from "react-router-dom";

export const ListaRecursos = () => {
  const { store, actions } = useContext(Context);
  const { categoria } = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    actions.get_recurso_categoria(categoria)
    setLoading(false)
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
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('alimentos')}>Alimentos</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('salud')}>Salud</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('ropa')}>Ropa</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('vivienda')}>Vivienda</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('formacion')}>Formación</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('empleo')}>Empleo</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('legales')}>Legales</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('ocio')}>Ocio</li>
                </ul>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div id="carouselExample" className="col-lg-6 col-sm-12 align-items-center justify-content-center m-auto carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="false">
          <div className="carousel-inner">

          {loading ? (
            <p>Cargando recursos...</p>
          ) : store.recursosCategoria.length > 0 ? (

            store.recursosCategoria.map((recurso, index) => ( 
              <div className= {`carousel-item my-3${index === 0 ? ' active' : ''}`} key={recurso.id}>
                <CardRecursos
                  key={recurso.id}
                  id={recurso.id}
                  nombre={recurso.nombre}
                  descripcion={recurso.descripcion}
                  ong_id={recurso.ong_id}
                  direccion={recurso.direccion}
                  img={recurso.img}
                />
              </div> 
            ))

            ) : (
              <div className="container my-5">
              <div className="my_jumbotron jumbotron p-5 col-10 m-auto text-center rounded-3">
                <h3 className="display-6">¡Ups! <i class="fas fa-surprise"></i></h3>
                <p className="col-10 mx-auto mb-3 fs-5 text-muted">
                  No hay recursos para mostrar de esta categoría, sigue explorando otras.
                </p>
              </div>
            </div>  
            
            )}

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