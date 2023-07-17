import React from "react";
import { Link } from "react-router-dom";

export const DescripcionRecurso = ({nombre, descripcion, direccion, ong_id, fichero, img, telefono, codigo_postal, virtual }) => {

  return (

    <>
      <div className="row g-0 container-fluid m-3 d-flex justify-content-center">
        <div className="col-10 card shadow">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://loremflickr.com/800/500/dogs" className="img-fluid rounded-top" style={{ objectFit: 'cover', height: '100%' }} alt="imagen_recurso" />
            </div>
            <div className="col-md-8 card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text"><small className="text-muted">{descripcion}</small></p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><strong>ONG:</strong> {ong_id}</li>
                <li className="list-group-item"><strong>Dirección:</strong> {direccion} - {codigo_postal}</li>
                <li className="list-group-item"><strong>Tel:</strong> {telefono}</li>
                <li className="list-group-item"><strong>Descargar información</strong> <i className="fas fa-file-download"></i></li>
              </ul>
            </div>
          </div>
          <div className="card-footer">
            <Link to={`/OngCard/${ong_id}`} className="btn primario mx-2" style={{ width: '120px' }}>Ver ONG</Link>
            <Link to={`/enviar_peticion/${ong_id}`} className="btn primario" style={{ width: '120px' }}>Contactar <i className="far fa-envelope"></i></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescripcionRecurso;

