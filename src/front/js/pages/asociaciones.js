import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import working from "../../img/working.jpg";
import doodle from "../../img/doodle.png";
import LogoOng from "../component/logoOng";


export const Asociaciones = () => { 
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllOng();
      }, []);


    return (
        <>
            <div className="row">
                <img src={working}className="d-block w-100" alt="..."/>
            </div>

            <div className="row px-5 container-fluid text-center d-flex align-items-center justify-content-center">
                <div className="col-10 px-5 pt-5">
                    <h2 className="mi_titulo">ONG y Asociaciones</h2>
                    <p className="mi_texto mt-4 ">
                        Estas son las asociaciones y ONG que forman parte de la comunidad de <em>Contigo</em>. Puedes hacer click en sus logos para obtener más información y ponerte en contacto con cada una de ellas.
                    </p> 
                </div>
                <div className="col-10 p-5 pt-3">
                    <img src={doodle} className="img-fluid" alt="..." style={{ maxWidth: '80%'}}/>
                </div>
            </div>

            <div className= "row d-flex mx-5 align-items-center justify-content-center">
            {store.ongs.map((ong) => ( 
            <div className="col-sm-10 col-md-6 col-lg-4 p-2" key={ong.id}>
                <LogoOng
                    id={ong.id}
                    logo={ong.logo}
                />
            </div>
            ))}
            </div>

        </>
    )

}