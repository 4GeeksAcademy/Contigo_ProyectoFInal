import React, { useState } from "react";
import { Link } from "react-router-dom";

export const User_register = () => {
    const  [ data, setData ] = useState({})
    const [ success, setSuccess ] = useState(false);

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

        fetch("https://julitar-cautious-space-funicular-j6x7xvqggvrcp47x-3001.preview.app.github.dev/api/user_registration", config)
		.then(res => {
            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
            return res.json();
        })
        .then(response => {
            console.log('Exito:', response);
            setSuccess(true);
        })
		.catch(error => console.error('Error:', error))

        }
	

    return (

        <>

            { success ? (
                <div> 
                    <p>¡Registro realizado con éxito!</p>
                </div>
            ) : (

			<form onSubmit={handleSubmit}>
				<div className="col-8 m-auto">
				<h3 className="display-6 text-primary"> Nuevo usuario de ONG </h3>
					<div className="mb-3">
						<label htmlFor="nombre" className="form-label">Nombre</label>
						<input type="text" className="form-control" id="nombre" name="nombre" placeholder="Name" onChange={handleChange} />
					</div>
                    <div className="mb-3">
						<label htmlFor="apellido" className="form-label">Apellidos</label>
						<input type="text" className="form-control" id="apellido" name="apellido" placeholder="Apellidos" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={handleChange}/>
					</div>
                    <div className="mb-3">
						<label htmlFor="password" className="form-label">Password</label>
						<input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="codigo_ong" className="form-label">Código ONG</label>
						<input type="text" className="form-control" id="codigo_ong" name="codigo_ong" placeholder="Código de registro de ONG" onChange={handleChange}/>
					</div>
					<button type="submit" className="btn btn-primary mt-3" role="button" onClick={handleSubmit}>
						Crear Usuario
					</button>
				</div>
			</form>
            )};

			<div className="col-8 m-auto mt-2">
			<Link to="/"><button type="button" className="btn btn-light">
					Volver a inicio
				</button></Link>
				</div>
    		</>
	);
}