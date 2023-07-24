import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoContigoUrl from "../../img/Logo_Contigo_Home.png";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const token = store.token

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container d-flex">
        <div  className="navbar-brand"> 
          <Link to="/">
            <img src={logoContigoUrl} alt="contigo_logo" width="200" />
          </Link>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="justify-content-end d-flex align-items-center">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul className="navbar-nav ml-auto mb-2 align-items-center">
              <li className="nav-item">
                <Link to="/asociaciones">Asociaciones</Link>
              </li>
              <li className="nav-item">
                <Link to="/about_us">Sobre Nosotros</Link>
              </li>

              { token == null ? ( <li className="nav-item">
                <Link to="/login">
                  Login
                </Link>
              </li>) : (

                <>
                <li className="nav-item">
                <Link to="/perfil">Perfil</Link>
                </li>

                <li className="nav-item">
                <Link to="/">
					      	<button className="btn" onClick={() => {actions.logout();
                  navigate("/")}}><i className="fas fa-sign-out-alt"></i></button>
					      </Link>
              </li>
               </>
              )
            }
             
            </ul>
          </div>
          </div>
      </div>
    </nav>
  );
};
