import React from "react";
import { Link } from "react-router-dom";
import logoContigoUrl from "../../img/Logo_Contigo_Home.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="container-fluid">
      <div className="row w-100 px-5 text-center align-items-center m-auto">
        <div className="col-5 navbar-brand justify-content-start">
          <Link to="/">
              <img src={logoContigoUrl} alt="contigo_logo" width="200" />
          </Link>
        </div>

        <div className="col-lg-3 d-none d-lg-block">
          <ul className="nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/donar">Donaciones</Link>
            </li>
            <li className="nav-item">
              <Link to="/informacion">Sobre Nosotros</Link>
            </li>
            <li className="nav-item ">
              <Link to="/contacto">Contactanos</Link>
            </li>
          </ul>
          </div>

        <div className="col-md-2 col-lg-3">
            <ul className="nav me-auto mb-2 mb-lg-0 justify-content-end">
              <li className="nav-item ">
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

