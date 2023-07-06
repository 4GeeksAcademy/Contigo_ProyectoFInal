import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Login = () => {

    return (
    
    <>
    <div className= "container justify-content-center">
        <div className= "row justify-content-center">

            <div className="col-lg-3 col-md-6 h-100 p-5 mx-5 mb-3 bg-light border rounded-3 text-center align-self-center shadow">
                <form>
                    <h1><i class="fa-regular fa-circle-user"></i></h1>
                    
                    <div class="form-floating my-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="nombre@ejemplo.com"/>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"/>
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                    
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Recordarme
                        </label>
                    </div>
                    <button class="w-75 btn btn-lg btn-primary" type="submit">Iniciar Sesión</button>
                </form>
            </div>

            <div className= "col-lg-6 align-items-stretch">
                <div className="row">
                    <div class="h-100 p-5 text-white bg-dark rounded-3 mb-3 shadow">
                        <h3 className="fs-5 text">¿Aun no te has registrado?</h3>
                        <p>Necesitarás el código de registro de la ONG en la que trabajas.</p>
                        <button class="btn btn-outline-light" type="button">Registrarse</button>
                    </div>
                </div>

                <div className="row">
                    <div class="h-100 p-5 bg-light border rounded-3 mb-3 shadow">
                        <h3 className="fs-5 text">Registro de ONG</h3>
                        <p>Antes de registrarte, debes asegurarte de registrar la ONG en la que trabajas.</p>
                        <button class="btn btn-outline-secondary" type="button">Registrar ONG</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>

    )
}