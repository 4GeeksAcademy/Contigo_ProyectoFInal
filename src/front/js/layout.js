import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Ong_register } from "./pages/ong_register";
import { User_register } from "./pages/user_register";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Detallerecurso } from "./pages/detallerecurso";
import { ListaRecursos } from "./pages/listaRecursos";
import { OngCard } from "./pages/ongCard";
import { Perfil } from "./pages/perfil";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Ong_register />} path="/ong_registration" />
                        <Route element={<User_register />} path="/user_registration" />
                        <Route element={<Perfil />} path="/perfil" />
                        <Route element={<ListaRecursos />} path="/listarecursos/:categoria" />
                        <Route element={<OngCard />} path="/ongcard" />
                        <Route element={<Detallerecurso />} path="/detallerecurso" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
