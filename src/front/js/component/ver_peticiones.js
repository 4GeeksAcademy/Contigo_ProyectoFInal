import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Ver_peticiones = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.get_peticiones();
  }, []);

  return (
    <>
      <div className="row justify-content-center d-flex m-lg-5">
        <div className="col-8 m-3 d-flex justify-content-center">
          <div className="row">
            <div className="card shadow bg-light rounded p-4">
              <h5 className="mi_titulo text-center">Gestionar Mensajes</h5>
              {store.ver_peticion.map((peticion) => (
                <div className="card bg-white mt-3 d-flex" key={peticion.id}>
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <h5 className="card-title">
                        <strong>
                          {peticion.nombre} {peticion.apellido}
                        </strong>
                      </h5>
                      <p className="card-text">
                        <strong>Mensaje:</strong> {peticion.texto}
                      </p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-3">
                          <strong>Preferencia:</strong> {peticion.preferencia}
                        </p>
                        <p className="mb-0 me-3">
                          <i className="fas fa-phone"></i> {peticion.telefono}
                        </p>
                        <p className="mb-0 me-3">
                          <i class="far fa-envelope"></i> {peticion.email}
                        </p>
                      </div>
                    </div>
                    {/* <div className="d-inline-flex align-items-center">
                      <button className="btn btn-warning me-2 ">
                        <i className="fa-solid fa-star"></i>
                      </button>
                      <button className="btn btn-success ">
                        <i className="fa-sharp fa-solid fa-circle-check"></i>
                      </button>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
