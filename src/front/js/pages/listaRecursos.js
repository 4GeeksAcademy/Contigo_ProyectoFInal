import React, { useContext } from "react";
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
      <div className= "d-flex justify-content-center">
        <div className="col-10">
          <div className="text-start m-3 ">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fs-3">Categorías</span>
              </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Alimentos</a></li>
                    <li><a class="dropdown-item" href="#">Salud</a></li>
                    <li><a class="dropdown-item" href="#">Ropa</a></li>
                    <li><a class="dropdown-item" href="#">Vivienda</a></li>
                    <li><a class="dropdown-item" href="#">Formación</a></li>
                    <li><a class="dropdown-item" href="#">Empleo</a></li>
                    <li><a class="dropdown-item" href="#">Legales</a></li>
                    <li><a class="dropdown-item" href="#">Ocio</a></li>
                  </ul>
            </div>

            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fs-4">Buscar por ubicación</span>
              </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
            
        <div className= "d-flex justify-content-center">
          <div className="col-10 d-flex justify-content-start">
            
            <CardRecursos />

          </div>
        </div>
        
        <div className= "d-flex justify-content-center">
        <div className="col-10">
          <div className="text-start m-3 ">
          <Link to="/" className="btn btn-secondary" style={{ width: '150px' }}>Volver</Link>
        </div>
        </div>
        </div>
    </>
  );
};