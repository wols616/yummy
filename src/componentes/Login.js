import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Login({ onLogin }) {
    return (
        <>
        <div className="background d-flex flex-column justify-content-between" style={{ minHeight: "100vh", position: "relative" }}>
            {/* Logo en la esquina superior izquierda */}
            <section className="p-3" style={{ position: "absolute", top: "0", left: "0" }}>
                <Link to={"/"}>
                    <img style={{ width: "20vw", maxWidth: "200px" }} src="https://i.ibb.co/93b8qKm/image-removebg-preview-3.png" alt="Logo" />
                </Link>
            </section>

            {/* Formulario de inicio de sesión centrado */}
            <section className="d-flex justify-content-center align-items-center flex-grow-1" style={{ paddingTop: "100px" }}>
                <div className="bg-light p-4 mt-5" style={{ width: "80vw", maxWidth: "600px", borderRadius: "40px" }}>
                    <div className="p-4">
                        <h3 className="iniciarSesion mb-5 text-center">Iniciar Sesión</h3>
                        <div className="input-group mb-5 ">
                            <input type="text" className="form-control" placeholder="Correo Electrónico"
                                aria-label="Correo Electrónico" 
                                style={{ height: "50px", fontSize: "1.25rem", padding: "10px" }} />
                        </div>
                        <div className="input-group mb-5">
                            <input type="password" className="form-control" placeholder="Contraseña"
                                aria-label="Contraseña" 
                                style={{ height: "50px", fontSize: "1.25rem", padding: "10px" }} />
                        </div>
                        <a href="link.com" className="d-block text-center" target="_blank" rel="noopener noreferrer">¿Olvidó su contraseña?</a>
                        <div className="text-center mt-5">
                            <Link to="/home" className="btn rounded-pill p-2 px-5 mx-2 my-md-0 my-2 boton" onClick={onLogin}>Iniciar Sesión</Link>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
        <Footer/>;
        </>
    );
}

export default Login;
