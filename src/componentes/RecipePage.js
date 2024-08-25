import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Estilo de fondo
const backgroundImage = {
  backgroundImage: 'url("https://i.ibb.co/pwD6x6j/image.png")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  height: '100vh', // Asegúrate de que el fondo cubra toda la altura visible
};

const RecipePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div style={backgroundImage}>
                <Navbar expand="md" style={{ backgroundColor: "#DDA15E" }} className="p-4">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">
                            <img
                                src="https://i.ibb.co/7SNdCFQ/Yummy-4.png"
                                alt="Logo"
                                style={{ height: "10vh" }}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setIsOpen(!isOpen)} />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                            show={isOpen}
                            onHide={() => setIsOpen(false)}
                            className="d-md-none"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to="#favorites" className="d-flex align-items-center">
                                        <i className="bi bi-heart fs-1 me-2"></i>
                                        <span>Favoritos</span>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="#add" className="d-flex align-items-center">
                                        <i className="bi bi-plus-circle fs-1 me-2"></i>
                                        <span>Agregar</span>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/recipePage" className="d-flex align-items-center">
                                        <i className="bi bi-person-circle fs-1 me-2"></i>
                                        <span>Perfil</span>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="#search" className="d-flex align-items-center">
                                        <i className="bi bi-search fs-1 me-2"></i>
                                        <span>Buscar</span>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Nav className="d-none d-md-flex align-items-center">
                            <Nav.Link as={Link} to="#favorites" className="d-flex align-items-center">
                                <i className="bi bi-heart fs-1 me-4"></i>
                            </Nav.Link>
                            <Nav.Link as={Link} to="#add" className="d-flex align-items-center">
                                <i className="bi bi-plus-circle fs-1 me-4"></i>
                            </Nav.Link>
                            <input
                                type="text"
                                className="form-control rounded-pill p-2 me-2"
                                placeholder="Buscar"
                                style={{ minWidth: "300px" }}
                            />
                            <Nav.Link as={Link} to="/recipePage" className="d-flex align-items-center">
                                <i className="bi bi-person-circle fs-1"></i>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

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
