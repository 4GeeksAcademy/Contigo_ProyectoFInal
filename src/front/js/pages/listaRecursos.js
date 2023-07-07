import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardRecursos  from "../component/cardRecursos"; 
import { Link } from "react-router-dom";

export const ListaRecursos = () => {
  const { store, actions } = useContext(Context);

  return (
<>
<div className= "d-flex justify-content-center">
<div className="col-10">
  <div className="text-start m-3 ">
  <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <span className="fs-3">Categoría</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
  </div>

  <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <span className="fs-4">Ubiacion</span>
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
    <div className="col-10">
  <div className= "d-flex justify-content-start">
    <CardRecursos />

    </div>
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