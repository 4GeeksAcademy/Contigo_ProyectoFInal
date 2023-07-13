import React, { Component } from "react";
import logoCorazonUrl from "../../img/Logo_fondo_oscuro.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container-fluid footer d-flex">
      <div className="row w-75 p-5 text-center align-items-center justify-content-center m-auto">
        <div className="col-xs-12 col-md-6 col-lg-3 logo-corazon">
          <img className="img_corazon img-fluid" src={logoCorazonUrl} />
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <ul className="list-unstyled">
            <li>Dirección</li>
            <li>Email</li>
            <li>Teléfono</li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3">
          <ul className="list-unstyled">
            <Link to="/asociaciones">
              <li>ASOCIACIONES y ONG</li>
            </Link>
            <Link to="/about_us">
              <li>SOBRE NOSOTROS</li>
            </Link>
            <Link to="/privacidad">
              <li>POLITICA DE PRIVACIDAD</li>
            </Link>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-3 icons align-self-center">
          <ul className="list-unstyled nav justify-content-center d-flex">
            <li>
              <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
            </li>
            <li >
              <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
            </li>
            <li>
              <a href="https://linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
