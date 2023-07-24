import React, { useEffect, useState } from "react";

export const Ver_peticiones = () => {
  return (
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
                    Peticion: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Vestibulum auctor dui quis imperdiet iaculis.
                    Suspendisse potenti. Suspendisse iaculis urna orci.
                    Suspendisse potenti. Suspendisse iaculis urna orci
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
  );
};
