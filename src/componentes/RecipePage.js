import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MiNavbar from './MiNavbar';

// Estilo de fondo
const backgroundImage = {
  backgroundImage: 'url("https://i.ibb.co/pwD6x6j/image.png")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  height: '100vh'
};

const RecipePage = ({deslogeo}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div style={backgroundImage}>
                <MiNavbar deslogeo={deslogeo}/>

                <div className="mx-md-5 mx-3 my-3 m-auto rounded" style={{ backgroundColor: '#FEFAE0' }}>
                    <section className="d-flex flex-column flex-md-row p-5 mx-5 align-items-center justify-content-between">
                        <i className="bi bi-person-circle" style={{ fontSize: '130px' }}></i>
                        <div className="text-center text-md-start">
                            <h1>Nombre y apellido</h1>
                            <h2>Descripción</h2>
                        </div>
                        <button type="button" className="btn btn-primary p-3" style={{ backgroundColor: '#924400', border: 0 }}>
                            <b>Editar Perfil</b>
                        </button>
                    </section>

                    <section className="d-flex flex-column p-5 mx-md-5 align-items-center justify-content-between" style={{ backgroundColor: 'white', borderRadius: '2%' }}>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between col-12">
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 1" />
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 2" />
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 3" />
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between col-12">
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 4" />
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 5" />
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 6" />
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between col-12">
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 7" />
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 8" />
                            <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid col-12 col-md-3 my-3" alt="Mariscos 9" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default RecipePage;
