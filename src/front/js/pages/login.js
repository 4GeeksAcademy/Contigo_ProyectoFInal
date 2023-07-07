import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";


export const Login = () => {

    return (
    
    <>
    <div className= "container justify-content-center">
        <div className= "row justify-content-center">

            <div className="jumbotron_1 col-lg-3 col-md-6 h-100 p-5 mx-5 mb-3 bg-light border rounded-3 text-center align-self-center shadow">
                <form>
                    <h1 className="icon mb-4"><i className="fa-regular fa-circle-user"></i></h1>
                    
                    <div class="form-floating my-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="nombre@ejemplo.com"/>
                        <label className="my_label" for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"/>
                        <label className="my_label" for="floatingPassword">Contraseña</label>
                    </div>
                    
                    <div class="checkbox mb-3">
                        <label className="my_label mb-4">
                            <input type="checkbox" value="remember-me"/> Recordarme
                        </label>
                    </div>
                    <button className="primario w-75 btn btn-lg" type="submit">Iniciar Sesión</button>
                </form>
            </div>

            <div className= "col-lg-6 align-items-stretch">
                <div className="row">
                    <div class="jumbotron_3 h-100 p-5 text-white rounded-3 mb-3 shadow">
                        <h3 className="fs-5 text">¿Aun no te has registrado?</h3>
                        <p>Necesitarás el código de registro de la ONG en la que trabajas.</p>
                        <Link to="/user_registration"><button class="btn btn-outline-light" type="button">Registrarse</button></Link>
                    </div>
                </div>

                <div className="row">
                    <div class="jumbotron_2 h-100 p-5 bg-light border rounded-3 mb-3 shadow">
                        <h3 className="fs-5 text">Registro de ONG</h3>
                        <p>Antes de registrarte, debes asegurarte de registrar la ONG en la que trabajas.</p>
                        <Link to="/ong_registration"><button className="terciario btn" type="button">Registrar ONG</button></Link>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>

    )
}