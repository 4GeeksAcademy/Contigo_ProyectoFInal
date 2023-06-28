import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Ong_register = () => {
    const  [data, setData] = useState({})
    const [ success, setSuccess] = useState(false);
	const [codigoONG, setCodigoONG] = useState('');
	const [nombreONG, setNombreONG] = useState('');

	const handleChange = (event) => {
		setData({...data, [event.target.id]: event.target.value})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(data)

		const config = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 
				'Content-Type': 'application/json'
			}
		}

		fetch("https://julitar-cautious-space-funicular-j6x7xvqggvrcp47x-3001.preview.app.github.dev/api/ong_registration", config)
		.then(res => {
            if (!res.ok) {
                throw new Error('Error en la solicitud');
            }
            return res.json();
        })
        .then(response => {
            console.log('Exito:', response);
            setSuccess(true);
			setCodigoONG(response.codigo_ong);
			setNombreONG(response.nombre);
        })
		.catch(error => console.error('Error:', error))
	}

    return (

        <>

            { success ? (
                <div> 
                    <p>¡Registro de la ONG realizado con éxito!</p>
					<p>Este es el código de tu ONG.</p>
					<h2>{codigoONG}</h2>
					<p>Compártelo con el equipo de {nombreONG} para que puedan registrarse.</p>
                </div>
            ) : (

			<form onSubmit={handleSubmit}>
				<div className="col-8 m-auto">
				<h3 className="display-6 text-primary"> Registro de ONG </h3>
					<div className="mb-3">
						<label htmlFor="nombre" className="form-label">Nombre de la ONG</label>
						<input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre" onChange={handleChange} />
					</div>
                    <div className="mb-3">
						<label htmlFor="cif" className="form-label">CIF</label>
						<input type="text" className="form-control" id="cif" name="cif" placeholder="CIF" onChange={handleChange} />
					</div>
					<div className="mb-3">
						<label htmlFor="Email" className="form-label">Email</label>
						<input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="WebSite" className="form-label">Página Web</label>
						<input type="url" className="form-control" id="url" name="url" placeholder="Página Web" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="direccion" className="form-label">Dirección</label>
						<input type="adress" className="form-control" id="direccion" name="direccion" placeholder="Dirección" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="codigo_postal" className="form-label">Código Postal</label>
						<input type="number" className="form-control" id="codigo_postal" name="codigo_postal" placeholder="Código Postal" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="telefono" className="form-label">Teléfono</label>
						<input type="number" className="form-control" id="telefono" name="telefono" placeholder="Teléfono" onChange={handleChange}/>
					</div>
					<div className="mb-3">
						<label htmlFor="logo" className="form-label">Logo</label>
						<input type="url" className="form-control" id="logo" name="logo" placeholder="Logo" onChange={handleChange}/>
					</div>
                    
					
					<button type="submit" className="btn btn-primary mt-3" role="button" onClick={handleSubmit}>
						Registrar ONG
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