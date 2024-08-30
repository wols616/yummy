import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './register.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer';

function Register({onLogin}){
    return(
        <div>

            <div className= "background">
                <div className="content">
                    <section className="container">
                        <div className="text-center mb-4">
                            <h1 className="fw-bold" style= {{color: 'brown'}}>Registrarse</h1>
                        </div>

                    
                        <div class="row mb-3">
                            <div className="col-12 col-md-3">
                                <p className="colorTexto mb-0">Nombre:</p>
                            </div>
                            <div className="col-12 col-md-9">
                                <input type="text" className="form-control rounded p-2" placeholder="Nombre" style= {{borderColor: 'black'}}/>
                            </div>
                        </div>

                        
                        <div className="row mb-3">
                            <div className="col-12 col-md-3">
                                <p className="colorTexto mb-0">Apellido:</p>
                            </div>
                            <div className="col-12 col-md-9">
                                <input type="text" className="form-control rounded p-2" placeholder="Apellido" style={{borderColor: 'black'}}/>
                            </div>
                        </div>

                    
                        <div className="row mb-3">
                            <div className="col-12 col-md-3">
                                <p className="colorTexto mb-0">Correo:</p>
                            </div>
                            <div className="col-12 col-md-9">
                                <input type="email" className="form-control rounded p-2" placeholder="Correo" style={{borderColor: 'black'}}/>
                            </div>
                        </div>

                
                        <div className="row mb-3">
                            <div className="col-12 col-md-3">
                                <p className="colorTexto mb-0">Contraseña:</p>
                            </div>
                            <div className="col-12 col-md-9">
                                <input type="password" className="form-control rounded p-2" placeholder="Contraseña" style={{borderColor: 'black'}}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12 col-md-3">
                                <p className="colorTexto mb-0">Confirme Contraseña:</p>
                            </div>
                            <div className="col-12 col-md-9">
                                <input type="password" className="form-control rounded p-2" placeholder="Confirme Contraseña" style={{borderColor: 'black'}}/>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <Link to="/home" className="btn rounded-pill p-2 px-5 mx-2 my-md-0 my-2 boton" onClick={onLogin}>Registrarse</Link>
                        </div>
                    </section>
                </div>
            </div>

            <Footer/>
            
        </div>
    );
}

export default Register