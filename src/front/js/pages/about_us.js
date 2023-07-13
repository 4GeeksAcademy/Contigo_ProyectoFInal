import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/about_us.css";
import caja from "../../img/caja.jpg";
import donaciones from "../../img/donaciones.jpg";
import manos from "../../img/manos.jpg";
import aid from "../../img/aid.jpg";

export const About_us = () => { 

    return (
        <>
         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={caja} className="d-block w-100" alt="..." />
                <div className="carousel-caption">
                    <h2>Colaboración para transformar vidas</h2>
                    <h5><em>Contigo</em> une a las asociaciones y ONG de Madrid para ofrecer apoyo en vivienda, salud, formación y más.</h5>
                </div>
                </div>
                <div className="carousel-item">
                <img src={donaciones} className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h2>Encuentra tu oportunidad</h2>
                    <h5>¡Descubre las oportunidades que las ONG de Madrid ofrecen para tu desarrollo personal y profesional!</h5>
                </div>
                </div>
                <div className="carousel-item">
                <img src={manos} className="d-block w-100" alt="..."/>
                <div className="carousel-caption">
                    <h2>Un espacio pensado para ti</h2>
                    <h5><em>Contigo</em> es una plataforma accesible, diseñada para encontrar información relavante de forma sencilla y rápida.</h5>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        

            <div className="row px-5 container-fluid text-center d-flex align-items-center justify-content-center">
                <div className="col-md-12 col-lg-6 p-5">
                    <h2 className="mi_titulo">Nuestro proyecto</h2>
                    <p className="mi_texto mt-4 ">
                        <em>Contigo</em> conecta las necesidades de las personas en mayor situación
                        de vulnerabilidad de Madrid con las soluciones que brindan 
                        las asociaciones y ONG.
                    </p> 
                    <p className="mi_texto mt-4 ">
                        Nuestra misión es maximizar el impacto social
                        a través de una herramienta digital que transforme vidas.
                    </p> 
                    <p className="mi_texto">
                        De esta forma promovemos el acceso a recursos sociales y 
                        oportunidades en áreas vitales como alimentación, 
                        salud, vivienda, empleo, ocio, entre otras. 
                    </p> 
                </div>
                <div className="col-md-12 col-lg-6 p-5">
                    <img src={aid} className="img-fluid" alt="..." style={{ maxWidth: '80%'}}/>
                </div>
            </div>

        <div className="row container-fluid my-5">
            
                <div className="my_jumbotron jumbotron p-5 col-lg-6 col-sm-10 m-auto text-center rounded-3">
                    <p className="mx-auto mb-3 fs-3 text-muted">
                        "Contigo" es posible sólo a través de la transparencia y la colaboración entre las asociaciones y las ONG.
                    </p>
                    <h3 className="mi_titulo">¿Quieres conocerlas?</h3>
                    <Link to="/asociaciones">
                        <button className="btn btn-outline-secondary btn-lg px-4 mt-3 rounded-pill" type="button">
                            Ver ONGs
                        </button>
                    </Link>
                </div>
            
        </div>

        </>
    )
    
}