import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/formulario.css";

export const User_register = () => {
    const  [ data, setData ] = useState({})
    const [ success, setSuccess ] = useState(false);
	const [ nombreONG, setNombreONG] = useState();
	const [ nombreUsuario, setNombreUsuario] = useState();

	const handleChange = (event) => {
		setData({...data, [event.target.name]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(data);

		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 
				'Content-Type': 'application/json'
			}
		}

        fetch(process.env.BACKEND_URL + "api/user_registration", config)
		.then(res => {
            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
            return res.json();
        })
        .then(response => {
			if (response.Error) {
				console.log('Error:', response);
				alert(response.Error);
			} else	{
				console.log('Exito:', response);
				setSuccess(true);
				setNombreONG(response.ONG)
				setNombreUsuario(response.nombre)
			}
        })
		.catch(error => {
			console.error('Error:', error);
		});
        }
	

    return (

        <>

            { success ? (

				<div className="container my-5">
				<div className="my_jumbotron jumbotron p-5 col-10 m-auto text-center rounded-3">
					<h3 className="display-6">Registro exitoso</h3>
					<p className="col-10 mx-auto mb-3 fs-5 text-muted">
						<span id="textoResaltado">{nombreUsuario}</span>, te has registrado exitosamente como parte del equipo de: <span id="textoResaltado">{nombreONG}</span>
					</p>
						<Link to="/">
							<button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
								Volver a inicio
							</button>
						</Link>
				</div>
				</div>

            ) : (
			
			<div className="container-fluid">
        		<h2 className="subtitulo col-lg-8 col-md-8 col-sm-12 m-auto py-4"> Registro de usuario </h2>
				
				<div className="card col-lg-8 col-md-8 col-sm-12 m-auto mb-5 shadow">
					<div className="card-body">
						<form className="row" onSubmit={handleSubmit}>
							
								<div className="col-md-6 my-2">
									<label htmlFor="nombre" className="my_label form-label">Nombre</label>
									<input type="text" className="my_input form-control" id="nombre" name="nombre" placeholder="Escribe tu nombre" onChange={handleChange} />
								</div>
								<div className="col-md-6 my-2">
									<label htmlFor="apellido" className="my_label form-label">Apellidos</label>
									<input type="text" className="my_input form-control" id="apellido" name="apellido" placeholder="Escribe tus apellidos" onChange={handleChange} />
								</div>
								<div className="col-md-6 my-2">
									<label htmlFor="password" className="my_label form-label">Contraseña</label>
									<input type="password" className="my_input form-control" id="password" name="password" placeholder="Escribe tu contraseña" onChange={handleChange}/>
								</div>
								<div className="col-md-6 my-2">
									<label htmlFor="email" className="my_label form-label">Email</label>
									<input type="email" className="my_input form-control" id="email" name="email" placeholder="ejemplo@email.com" onChange={handleChange}/>
								</div>
								<div className="col-md-4 my-2">
									<label htmlFor="codigo_ong" className="my_label form-label">Código ONG</label>
									<input type="text" className="my_input form-control" id="codigo_ong" name="codigo_ong" placeholder="Código ONG *" onChange={handleChange}/>
								</div>
								<div className="col-md-8 smallText">
									<p>* Por favor, ingresa aquí el código que se proporcionó al registrar la ONG en la plataforma. Si aún no se ha registrado la ONG en la que trabajas, realiza ese paso antes de continuar.</p>
								</div>
						</form>
					</div>
						<div className="col-md-12 card-footer text-body-secondary gap-2 d-flex justify-content-end">
							<Link to="/"><button type="button" className="btn secundario">Cancelar</button></Link>
							<button type="submit" className="btn primario" onClick={handleSubmit}>Crear Usuario</button>
						</div>

				</div>
			</div>
            )}
			
			
    		</>
	)
}