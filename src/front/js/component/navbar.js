import React from "react";
import { Link } from "react-router-dom";
import logoContigoUrl from "../../img/Logo_Contigo_Home.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">

      <div className="container">
          <div className="navbar-brand">
            <Link to="/">
                <img src={logoContigoUrl} alt="contigo_logo" width="200" />
            </Link>
          </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="justify-content-end d-flex">
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/donar">Donaciones</Link>
              </li>
              <li className="nav-item">
                <Link to="/informacion">Sobre Nosotros</Link>
              </li>
              <li className="nav-item ">
                <Link to="/contacto">Contactanos</Link>
              </li>
              <li className="nav-item">
                <Link to="/login"><i className="fa-solid fa-user"></i></Link>
              </li>
              <li className="nav-item ">
                <Link to="/"><i className="fa-solid fa-earth-europe"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

