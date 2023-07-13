import React from "react";
import { Link } from "react-router-dom";


export const LogoOng = ({ logo, id}) => {
  
  return (
    
    <div className="card border-0 align-items-center justify-content-center m-auto" style= {{width: '18rem'}}>
      <Link to={`/ongcard/${id}`}>
        <img src={logo} className="card-img-top" alt="logo"/>
      </Link>
    </div>
   
  );
};

export default LogoOng;