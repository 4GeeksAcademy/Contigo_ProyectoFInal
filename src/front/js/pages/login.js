import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/login.css";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const token = store.token


    const handleSubmit = () => {
        if (actions.login(email, password) && token != "")
            { navigate("/perfil");
            } else {
                alert("Error en login")
            }
        }

    return (
    
    <>
    <div className= "container justify-content-center">
        <div className= "row justify-content-center p-5">

            <div className="jumbotron_1 col-lg-3 col-md-6 h-100 p-5 mx-5 mb-3 bg-light border rounded-3 text-center align-self-center shadow">
                <form onSubmit={handleSubmit}>
                    <h1 className="icon mb-4"><i className="fa-regular fa-circle-user"></i></h1>
                    
                    <div className="form-floating my-3">
                        <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label className="my_label" htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="password" className="form-control" id="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label className="my_label" htmlFor="password">Contraseña</label>
                    </div>
                    
                    <div className="checkbox mb-3">
                        <label className="my_label mb-4">
                            <input type="checkbox" value="remember-me"/> Recordarme
                        </label>
                    </div>
                    <button className="boton_1 w-75 btn btn-lg" type="submit">Iniciar Sesión</button>
                </form>
            </div>

            <div className= "col-lg-6 align-items-stretch">
                <div className="row">
                    <div className="jumbotron_3 h-100 p-5 text-white rounded-3 mb-3 shadow">
                        <h3 className="fs-5">¿Aun no te has registrado?</h3>
                        <p>Necesitarás el código de registro de la ONG en la que trabajas.</p>
                        <Link to="/user_registration"><button className="btn btn-outline-light" type="button">Registrarse</button></Link>
                    </div>
                </div>

                <div className="row">
                    <div className="jumbotron_2 h-100 p-5 bg-light border rounded-3 mb-3 shadow">
                        <h3 className="fs-5"><strong>Registro de ONG</strong></h3>
                        <p>Antes de registrarte, debes asegurarte de registrar la ONG en la que trabajas.</p>
                        <Link to="/ong_registration"><button className="boton_3 btn" type="button">Registrar ONG</button></Link>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>

    )
}