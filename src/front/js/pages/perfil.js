import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../styles/formulario.css";
import FormularioRecurso from '../component/formularioRecurso';
import DatosPersonales from '../component/datosPersonales';


export const Perfil = () => {
  const [mostrarPeticiones, setMostrarPeticiones] = useState(false);
  const [mostrarTarjetas, setMostrarTarjetas] = useState(false);
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('jwt-token');



  const mostrarFormularioRecurso = () => {
    setMostrarTarjetas(false);
    setMostrarFormulario(true);
  };


  const checkToken = async () => {
		try {
			if (!token) {
			setAuthenticated(false);
			setLoading(false);
			} else {
        const response = await fetch((process.env.BACKEND_URL + "api/perfil"), {
          method: "GET",
          headers: {
          "Authorization": `Bearer ${token}`,
          },
        });
	
        if (!response.ok) {
          throw new Error("Error al acceder al área privada");
        }

        const userData = await response.json(); // Convertir la respuesta a JSON
        setUserData(userData);
        setAuthenticated(true);
        setLoading(false);
      }

      } catch (error) {
        console.error(error);
        setAuthenticated(false);
        setLoading(false);
      }
		};
	

		useEffect(() => {
		checkToken();
		}, []); 


    const handleLogout = () => {
      localStorage.removeItem('jwt-token');
      navigate('/');
      };


  return (
    <>

    { loading ? (
    
      <div className="row justify-content-center text-center m-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

      ) : !authenticated ? (

        <div className="row m-5 justify-content-center">
          <div className="col-8 m-5 text-center">
              <div className="alert alert-warning" role="alert">
                ¡Inicia Sesión para acceder a tu área privada!
              </div>

              <div className="row justify-content-center">
                <div className="col-8 m-3">
                  <Link to="/login"><button type="button" className="btn btn-warning mx-2">Iniciar Sesión</button></Link>
                </div>
              </div>
          </div>
			  </div>
      ) : (

        <>
    
      <div className="row justify-content-center d-flex m-5">
        <div className="col-8 text-start">
        <h5 className="mi_titulo">Te damos la Bienvenida, {userData.nombre} <i class="fa-regular fa-face-smile"></i></h5>
        </div>
        <div className="col-4 text-end">
          <Link to="/">
						<button className="btn btn-danger" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i></button>
					</Link>
        </div>

      </div>

      <div className="row justify-content-center d-flex m-lg-5 my-3">
        <div className="col-lg-4 col-sm-10 m-auto text-center">
          <button
            type="button"
            className="btn btn-lg primario m-3"
            onClick={() => {
              setMostrarPeticiones(true);
              setMostrarTarjetas(false);
              setMostrarDatos(false);
              setMostrarFormulario(false);
            }}
          >
            Gestionar peticiones
          </button>
        </div>
        <div className="col-lg-4 col-sm-10 m-auto text-center">
          <button
            type="button"
            className="btn btn-lg btn primario m-3"
            onClick={() => {
              setMostrarPeticiones(false);
              setMostrarTarjetas(true);
              setMostrarDatos(false);
              setMostrarFormulario(false);
            }}
          >
            Gestionar recursos
          </button>
          </div>
          <div className="col-lg-4 col-sm-10 m-auto text-center">
          <button
            type="button"
            className="btn btn-lg primario m-3"
            onClick={() => {
              setMostrarPeticiones(false);
              setMostrarTarjetas(false);
              setMostrarDatos(true);
              setMostrarFormulario(false);
            }}
          >
            Datos personales
          </button>
          </div>

          </div>


          {mostrarTarjetas && !mostrarPeticiones && !mostrarDatos && (
          <div className="row justify-content-center d-flex m-lg-5">
            <div className="col-8 justify-content-center">
              <div className="row">
                <div className="card shadow bg-light rounded p-4">
                  <h5>Gestionar Recursos</h5>
                  <div className="card bg-white mt-3 d-flex">
                    <div className="card-body d-flex justify-content-between">
                      <div>
                        <h5 className="card-title">Recurso</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor dui quis
                          imperdiet iaculis. Suspendisse potenti. Suspendisse iaculis urna orci. Suspendisse potenti.
                          Suspendisse iaculis urna orci
                        </p>
                      </div>
                      <div className="d-inline-flex align-items-center">
                        <button className="btn btn-danger me-2">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <button className="btn btn-primary">
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3 text-center">
                    <button
                      className="btn btn primario"
                      onClick={mostrarFormularioRecurso}
                    >
                      Crear nuevo recurso
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}


        

        {mostrarPeticiones && !mostrarTarjetas && !mostrarDatos && (
          <div className="row justify-content-center d-flex m-lg-5">
            <div className="col-8 m-3 d-flex justify-content-center">
              <div className="row">
                <div className="card shadow bg-light rounded p-4">
                  <h5>Gestionar Mensajes</h5>
                    <div className="card bg-white mt-3 d-flex">
                      <div className="card-body d-flex justify-content-between">
                        <div>
                          <h5 className="card-title">Nombre</h5>
                            <p className="card-text">
                              Peticion: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor dui quis
                              imperdiet iaculis. Suspendisse potenti. Suspendisse iaculis urna orci. Suspendisse potenti.
                              Suspendisse iaculis urna orci
                            </p>
                          <div className="d-flex align-items-center">
                            <p className="mb-0 me-3">Telefono</p>
                            <p className="mb-0 me-3">Mail</p>
                            <p className="mb-0">Preferencia</p>
                          </div>
                        </div>
                        <div className="d-inline-flex align-items-center">
                            <button className="btn btn-warning me-2 ">
                              <i className="fa-solid fa-star"></i>
                            </button>
                            <button className="btn btn-success ">
                              <i className="fa-sharp fa-solid fa-circle-check"></i>
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        )}

         <div className="col-10  d-flex justify-content-center">
          {mostrarFormulario && (
            <FormularioRecurso />
          )}
        </div>


        {mostrarDatos && !mostrarPeticiones && !mostrarTarjetas && (
          <div className="row justify-content-center d-flex m-lg-5 my-5">
            <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12">
              < DatosPersonales userData={userData} />
            </div>
          </div>
          
          )}

      
        </>

        )}

    </>

  );
};

export default Perfil;
