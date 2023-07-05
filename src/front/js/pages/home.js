import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container-fluid contenido">
			<div className="row categorias text-center">
      			<div className="col-md-3 images">
					<a href="#" className="icon" title="utensils">
				  		<img className="rounded-circle" alt="alimentos"  width={'190'} height={190} src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alimentos">
  						</img>
						<i className="fa-solid fa-utensils"></i>
					</a>
				</div>

      			<div className="col-md-3 images">
				  <a href="#" className="icon" title="stethoscope">
						<img className="rounded-circle" alt="higiene-salud"  width={'190'} height={190} src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Higiene-Salud">
						</img>
						<i class="fa-solid fa-stethoscope"></i>
					</a>
				</div>

				<div className="col-md-3 images">
					<a href="#" className="icon" title="shirt">
						<img className="rounded-circle" alt="ropa"  width={'190'} height={190} src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ropa">
						</img>
					  	<i class="fa-solid fa-shirt"></i>
					</a>
				</div>

				<div className="col-md-3 images">
					<a href="#" className="icon" title="bed">
						<img className="rounded-circle" alt="vivienda"  width={'190'} height={190} src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Vivienda">
						</img>
						<i class="fa-solid fa-bed"></i>
					</a>
				</div>
			</div>
				
			

			<div className="row categorias text-center">
				<div className="col-md-3 images">
					<a href="#" className="icon" title="chalkboard">
						<img className="rounded-circle" alt="formación"  width={'190'} height={190} src="https://images.unsplash.com/photo-1512238972088-8acb84db0771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Formación">
						</img>
						<i className="fa-solid fa-chalkboard-user"></i>
					</a>
				</div>

				<div className="col-md-3 images">
					<a href="#" className="icon" title="briefcase">
						<img className="rounded-circle" alt="empleo"  width={'190'} height={190} src="https://images.unsplash.com/photo-1589793463308-658ed42e5dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Empleo">
						</img>
						<i class="fa-solid fa-briefcase"></i>
					</a>
				</div>

				<div className="col-md-3 images">
					<a href="#" className="icon" title="passport">
						<img className="rounded-circle" alt="extranjería-legal"  width={'190'} height={190} src="https://plus.unsplash.com/premium_photo-1661542759930-9cf315dae451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Extranjería-Legal">
						</img>
						<i class="fa-solid fa-passport"></i>
					</a>
				</div>

				<div className="col-md-3 images">
					<a href="#" className="icon" title="">
						<img className="rounded-circle" alt="ocio"  width={'190'} height={190} src="https://images.unsplash.com/photo-1603351820686-f6473ef07e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ocio">
						</img>
						<i class="fa-solid fa-person-running"></i>
					</a>
				</div>
				
			</div>
			
			
			<div className="container login-ong">
				<p>
				<a href="#" className="click-ong" >Click aqui si trabajas en una ONG</a>
				</p>
			</div>
			
		</div>
	
	);
};
