import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Home({deslogeo}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar expand="md" style={{ backgroundColor: "#DDA15E" }} className="p-4">
        <Container>
          <Navbar.Brand href="/home">
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
                <Nav.Link href="#favorites" className="d-flex align-items-center">
                  <i className="bi bi-heart fs-1 me-2"></i>
                  <span>Favoritos</span>
                </Nav.Link>
                <Nav.Link href="#add" className="d-flex align-items-center">
                  <i className="bi bi-plus-circle fs-1 me-2"></i>
                  <span>Agregar</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/recipePage" className="d-flex align-items-center">
                  <i className="bi bi-person-circle fs-1 me-2"></i>
                  <span>Perfil</span>
                </Nav.Link>
                <Nav.Link href="#search" className="d-flex align-items-center">
                  <i className="bi bi-search fs-1 me-2"></i>
                  <span>Buscar</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/" onClick={deslogeo} className="d-flex align-items-center">
                  <i className="bi bi-box-arrow-left fs-1"></i>
                  <span>  Log out</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav className="d-none d-md-flex align-items-center">
            <Nav.Link href="#favorites" className="d-flex align-items-center">
              <i className="bi bi-heart fs-1 me-4"></i>
            </Nav.Link>
            <Nav.Link href="#add" className="d-flex align-items-center">
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
            <Nav.Link as={Link} to="/" onClick={deslogeo} className="d-flex align-items-center">
              <i className="bi bi-box-arrow-left fs-1"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Secciones de contenido */}
      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Banquetes:</h3>
              <div className="row">
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/XYR8srB/pexels-pixabay-434258.jpg"
                    alt="Imagen 1"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/NmmJSnb/pexels-fotios-photos-1279330.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/0G5cfkL/pexels-dana-tentis-118658-262959.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/W62Vjkg/pexels-foodie-factor-162291-566566.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Postres:</h3>
              <div className="row">
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/j6kxkym/pexels-ella-olsson-572949-3026810.jpg"
                    alt="Imagen 1"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/z7rJ0sY/pexels-ella-olsson-572949-3026804.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/nQCByGy/pexels-abhinavcoca-291528.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/jMK5Q1s/pexels-janetrangdoan-1092730.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Bebidas:</h3>
              <div className="row">
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/VV4bhxN/pexels-life-of-pix-4295.jpg"
                    alt="Imagen 1"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/9Hd1gFP/pexels-ainis-jankauskas-45749-169391.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/WBK6FF2/pexels-nietjuh-2479242.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/B3BqTrV/pexels-maria-salazar-303506-878992.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Platos fuertes:</h3>
              <div className="row">
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/zsdN6Q9/pexels-mike-2952864.jpg"
                    alt="Imagen 1"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/wYbRHFf/pexels-valeria-boltneva-1123257.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/Kb8zQYs/pexels-elly-fairytale-3893735.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
                <div className="col-md-3 mt-1">
                  <img
                    src="https://i.ibb.co/64Dwffv/pexels-victor-freitas-1616747.jpg"
                    alt="Imagen 2"
                    style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
