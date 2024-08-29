import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";


const MiNavbar=({deslogeo})=>{
  const [isOpen, setIsOpen] = useState(false);
  return(
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
                <Nav.Link as={Link} to="/publicar" href="#add" className="d-flex align-items-center">
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
            <Nav.Link as={Link} to="/publicar" href="#add" className="d-flex align-items-center">
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
  );

}
export default MiNavbar;
