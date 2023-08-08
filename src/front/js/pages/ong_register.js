import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/formulario.css";


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

		fetch(process.env.BACKEND_URL + "api/ong_registration", config)
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
                
				<div className="container my-5">
					<div className="my_jumbotron jumbotron p-5 col-10 m-auto text-center rounded-3">
						<h3 className="display-6">Registro exitoso</h3>
						<p className="col-10 mx-auto mb-3 fs-5 text-muted">
							<span id="textoResaltado">{nombreONG}</span> se ha registrado exitosamente como ONG en nuestra plataforma. <br />
							El código de registro de la ONG es <span id="textoResaltado">{codigoONG}</span> <br />
							Comparte el código con el resto del equipo para que puedan registrarse como usuarios.
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
					<h2 className="subtitulo col-lg-8 col-md-8 col-sm-12 m-auto py-4"> Registro de ONG </h2>
						<div className="card col-lg-8 col-md-8 col-sm-12 m-auto mb-5 m-auto shadow">
							<div className="card-body">
								<form className="row" onSubmit={handleSubmit}>
										<div className="col-md-8 my-2">
											<label htmlFor="nombre" className="form-label my_label">Nombre de la ONG</label>
											<input type="text" className="my_input form-control" id="nombre" name="nombre" placeholder="Nombre" onChange={handleChange} />
										</div>
										<div className="col-md-4 my-2">
											<label htmlFor="cif" className="form-label my_label">CIF</label>
											<input type="text" className="my_input form-control" id="cif" name="cif" placeholder="GXXXXXXXX" onChange={handleChange} />
										</div>
										<div className="col-md-8 my-2">
											<label htmlFor="direccion" className="form-label my_label">Dirección</label>
											<input type="adress" className="my_input form-control" id="direccion" name="direccion" placeholder="Dirección" onChange={handleChange}/>
										</div>
										<div className="col-md-4 my-2">
											<label htmlFor="codigo_postal" className="form-label my_label">Código Postal</label>
											<input type="number" className="my_input form-control" id="codigo_postal" name="codigo_postal" placeholder="Código Postal" onChange={handleChange}/>
										</div>
										<div className="col-md-8 my-2">
											<label htmlFor="Email" className="form-label my_label">Email</label>
											<input type="email" className="my_input form-control" id="email" name="email" placeholder="ejemplo@mail.com" onChange={handleChange}/>
										</div>
										<div className="col-md-4 my-2">
											<label htmlFor="telefono" className="form-label my_label">Teléfono</label>
											<input type="number" className="my_input form-control" id="telefono" name="telefono" placeholder="Teléfono" onChange={handleChange}/>
										</div>
										<div className="col-md-5 my-2">
											<label htmlFor="WebSite" className="form-label my_label">Página Web</label>
											<input type="url" className="my_input form-control" id="url" name="url" placeholder="Escribe la url del sitio web" onChange={handleChange}/>
										</div>
										<div className="col-md-7 my-2">
											<label htmlFor="logo" className="form-label my_label">Logo</label>
											<input type="url" className="my_input form-control" id="logo" name="logo" placeholder="Pega una url de la imagen con el logo de la ong" onChange={handleChange}/>
										</div>
									
								</form>
							</div>
					<div class="col-md-12 card-footer text-body-secondary gap-2 d-flex justify-content-end">
						<Link to="/"><button type="button" className="btn secundario">Cancelar</button></Link>
						<button type="submit" className="btn primario" onClick={handleSubmit}>Registrar ONG</button>
					</div>
				</div>
			</div>
            )}

    		</>
	)
}