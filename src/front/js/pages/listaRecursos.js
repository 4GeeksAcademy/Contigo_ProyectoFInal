import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardRecursos  from "../component/cardRecursos"; 
import { Link, useParams } from "react-router-dom";

export const ListaRecursos = () => {
  const { store, actions } = useContext(Context);
  const { categoria } = useParams();
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    const obtenerRecursosPorCategoria = async () => {
      try {
        const response = await fetch(process.env.BACKEND_URL + `api/recursos?categoria=${categoria}`);
        if (!response.ok) {
          throw new Error('Error al obtener los recursos por categoría');
        }
        const data = await response.json();
        setRecursos(data)
      } catch (error) {
        console.error(error.message);
      }
    };

    obtenerRecursosPorCategoria();
  }, [categoria]);


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
              <span className="fs-3">Categorías</span>
            </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Alimentos</a></li>
                  <li><a className="dropdown-item" href="#">Salud</a></li>
                  <li><a className="dropdown-item" href="#">Ropa</a></li>
                  <li><a className="dropdown-item" href="#">Vivienda</a></li>
                  <li><a className="dropdown-item" href="#">Formación</a></li>
                  <li><a className="dropdown-item" href="#">Empleo</a></li>
                  <li><a className="dropdown-item" href="#">Legales</a></li>
                  <li><a className="dropdown-item" href="#">Ocio</a></li>
                </ul>
          </div>

          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="fs-4">Buscar por ubicación</span>
            </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
        </div>
      </div>
    
        {recursos.map((recurso) => ( // Map hecho para cuando funcione
        <CardRecursos
          key={recurso.id}
          id={recurso.id}
          nombre={recurso.nombre}
          descripcion={recurso.descripcion}
          ong={recurso.ong}
          direccion={recurso.direccion}
        />
      ))}

      <div className= "row d-flex justify-content-center">
        <div className="col-10 mx-5">
            <CardRecursos /> 
        </div> 
      </div>
        
      <div className= "d-flex justify-content-center">
        <div className="col-10 text-start m-3">
          <Link to="/" className="btn secundario" style={{ width: '150px' }}>Volver</Link>
        </div>
      </div>
      </div>
    </>
  );
};