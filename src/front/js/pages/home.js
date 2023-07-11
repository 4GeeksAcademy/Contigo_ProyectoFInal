import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container-fluid contenido">
			<div className="row text-center align-items-center justify-content-center m-auto">
				<div className="col-md-12 col-lg-8 text-center m-auto">
					<h5 className="mi_titulo">¿Estás buscando información?</h5>
					<p className="mi_subtitulo">
						Selecciona la categoría y te mostraremos recursos sociales a los que puedes recurrir si te encuentras en Madrid
					</p>
				</div>
			</div>

		
			<div className="row categorias text-center justify-content-center m-auto">
				<div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
				  	<Link to={`/listarecursos/alimentos`} className="icon" title="utensils">
				  		<img className="rounded-circle" alt="alimentos"  width={'190'} height={190} src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alimentos">
  						</img>
						<i className="fa-solid fa-utensils"></i>
					</Link>
				</div>

      			<div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
				  <Link to={`/listarecursos/salud`} className="icon" title="stethoscope">
						<img className="rounded-circle" alt="higiene-salud"  width={'190'} height={190} src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Higiene-Salud">
						</img>
						<i className="fa-solid fa-stethoscope"></i>
					</Link>
				</div>

				<div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
					<Link to={`/listarecursos/ropa`} className="icon" title="shirt">
						<img className="rounded-circle" alt="ropa"  width={'190'} height={190} src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ropa">
						</img>
					  	<i className="fa-solid fa-shirt"></i>
					</Link>
				</div>

				<div className="col-sm-12 py-sm-1 col-md-4 col-lg-3 py-md-4 images">
					<Link to={`/listarecursos/vivienda`} className="icon" title="bed">
						<img className="rounded-circle" alt="vivienda"  width={'190'} height={190} src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Vivienda">
						</img>
						<i className="fa-solid fa-bed"></i>
					</Link>
				</div>
	
				<div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
					<Link to={`/listarecursos/formacion`} className="icon" title="chalkboard">
						<img className="rounded-circle" alt="formación"  width={'190'} height={190} src="https://images.unsplash.com/photo-1512238972088-8acb84db0771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Formación">
						</img>
						<i className="fa-solid fa-chalkboard-user"></i>
					</Link>
				</div>

				<div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
					<Link to={`/listarecursos/empleo`} className="icon" title="briefcase">
						<img className="rounded-circle" alt="empleo"  width={'190'} height={190} src="https://images.unsplash.com/photo-1589793463308-658ed42e5dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Empleo">
						</img>
						<i className="fa-solid fa-briefcase"></i>
					</Link>
				</div>

				<div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
					<Link to={`/listarecursos/legales`} className="icon" title="passport">
						<img className="rounded-circle" alt="extranjería-legal"  width={'190'} height={190} src="https://plus.unsplash.com/premium_photo-1661542759930-9cf315dae451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Extranjería-Legal">
						</img>
						<i className="fa-solid fa-passport"></i>
					</Link>
				</div>

				<div className="col-sm-12 py-1 col-md-4 col-lg-3 py-md-4 images">
					<Link to={`/listarecursos/ocio`} className="icon" title="futbol">
						<img className="rounded-circle" alt="ocio"  width={'190'} height={190} src="https://images.unsplash.com/photo-1603351820686-f6473ef07e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ocio">
						</img>
						<i className="fa-solid fa-person-running"></i>
					</Link>
				</div>
				
		
				</div>
			
			<div className="container my-5">
				<div className="my_jumbotron jumbotron p-5 col-lg-8 col-sm-10 m-auto text-center rounded-3">
					<h3>¿Trabajas en una ONG?</h3>
					<p className="mx-auto mb-3 fs-5 text-muted">
						Inicia sesión para gestionar recursos y leer mensajes privados
					</p>
					<Link to="/">
						<button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
						Iniciar Sesión
						</button>
					</Link>
				</div>
			</div>
			
		</div>
	
	);
};
