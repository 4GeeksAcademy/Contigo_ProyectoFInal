import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ResourceCard  from "../component/resourceCard"; 
import { Link } from "react-router-dom";

export const Resourceview = () => {
  const { store, actions } = useContext(Context);

  return (
<>


  <div className= "d-flex justify-content-center">
    <ResourceCard />
  </div>
  <div className="text-start m-3 ">
  <Link to="/" className="btn btn-secondary" style={{ width: '150px' }}>Volver</Link>
  </div>
</>
  );
};