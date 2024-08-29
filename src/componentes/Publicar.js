import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import MiNavbar from "./MiNavbar";

function Publicar({deslogeo}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <MiNavbar deslogeo={deslogeo}/>
    <div style={{ backgroundColor: 'rgb(254,250,224)' }}>
      <section className="pt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="bg-light pt-4 d-flex flex-column justify-content-center align-items-center" style={{ width: '90vw', maxWidth: '1200px', height: '90vh', maxHeight: '500px', borderRadius: '20px' }}>
          <i style={{ fontSize: '100px', opacity: 0.3 }} className="bi bi-image"></i>
          <h3 style={{opacity:0.6}}>Adjunta la foto de tu receta</h3>
        </div>
      </section>
      
      <section className="mt-4 d-flex flex-column align-items-center">
        <div className="bg-light pt-2 d-flex flex-column align-items-center justify-content-center" style={{ width: '90vw', maxWidth: '1200px', height: '65px', borderRadius: '10px' }}>
          <h3 style={{ alignSelf: 'flex-start', paddingLeft: '20px', opacity:0.6 }}>Título: Crema de espárragos.</h3>
        </div>
      </section>
      
      <section className="mt-4 mb-5 d-flex flex-column align-items-center">
        <div className="bg-light pt-2 d-flex flex-column align-items-center justify-content-center" style={{ width: '90vw', maxWidth: '1200px', height: '100px', borderRadius: '10px' }}>
          <h3 style={{ alignSelf: 'flex-start', paddingLeft: '20px', opacity:0.6 }}>Breve descripción: Fácil crema de espárragos con solo 5 ingredientes.</h3>
        </div>
      </section>
      
      <section className="d-flex flex-wrap gap-3 justify-content-center">
        <div className="mt-4 d-flex flex-column align-items-center" style={{ width: '90vw', maxWidth: '500px' }}>
          <div className="bg-light pt-2 d-flex flex-column align-items-center" style={{ width: '100%', height: '50vh', borderRadius: '10px', padding: '10px' }}>
            <h3 style={{ paddingLeft: '20px', marginBottom: '30px', color: '#924400' }}>Ingredientes/Utensilios</h3>
            <div className="mb-3 d-flex align-items-center" style={{ width: '100%', maxWidth: '400px', height: '65px', borderRadius: '10px', border: '2px solid grey', padding: '0 10px' }}>
              <h3 style={{ margin: '0', flexGrow: '1', opacity:0.6 }}>Ej: 1/2 taza de leche</h3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-trash3" style={{ fontSize: '24px', color: 'rgb(141, 6, 6)' }}></i>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center" style={{ width: '100%', maxWidth: '400px', height: '65px', borderRadius: '10px', border: '2px solid grey', padding: '0 10px' }}>
              <h3 style={{ margin: '0', flexGrow: '1', opacity:0.6 }}>Ej: 1/2lb de espárragos</h3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-trash3" style={{ fontSize: '24px', color: 'rgb(141, 6, 6)' }}></i>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center" style={{ width: '100%', maxWidth: '400px', height: '65px', borderRadius: '10px', border: '2px solid grey', padding: '0 10px' }}>
              <h3 style={{ margin: '0', flexGrow: '1', opacity:0.6 }}>Ej: 1 olla</h3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="bi bi-trash3" style={{ fontSize: '24px', color: 'rgb(141, 6, 6)' }}></i>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-end justify-content-end" style={{ width: '100%', maxWidth: '400px' }}>
              <i className="bi bi-plus-lg" style={{ fontSize: '24px', color: 'rgb(141, 6, 6)', fontWeight: 'bold' }}></i>
              <h3 style={{ margin: '0', marginLeft: '8px', color: '#924400' }}>Agregar ingrediente</h3>
            </div>
          </div>
        </div>
      
        <div className="mt-4 d-flex flex-column align-items-center" style={{ width: '90vw', maxWidth: '700px' }}>
          <div className="bg-light pt-2 d-flex flex-column align-items-center" style={{ width: '100%', height: '50vh', borderRadius: '10px', padding: '10px' }}>
            <h3 style={{ alignSelf: 'flex-start', paddingLeft: '20px', marginBottom: '30px', color: '#924400' }}>Pasos</h3>
            <div style={{ width: '100%', maxWidth: '600px' }}>
              <div className="mb-3 d-flex align-items-center" style={{ width: '100%', height: '65px' }}>
                <h3 style={{ margin: '0', color: '#924400', width: '30px', textAlign: 'left', marginLeft: '0' }}>1</h3>
                <div className="d-flex align-items-center flex-grow-1" style={{ height: '65px', borderRadius: '10px', border: '2px solid grey', padding: '0 10px' }}>
                  <h3 style={{ margin: '0', flexGrow: '1', opacity:0.6 }}>Ej: Picar finamente los espárragos</h3>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-trash3" style={{ fontSize: '24px', color: 'rgb(141, 6, 6)' }}></i>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px', borderRadius: '10px', border: '2px solid grey', padding: '0 10px' }}>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <i style={{ fontSize: '50px', opacity:0.6 }} className="bi bi-image"></i>
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3 d-flex justify-content-end" style={{ width: '100%', maxWidth: '600px', paddingRight: '10px' }}>
              <i className="bi bi-plus-lg" style={{ fontSize: '24px', color: 'rgb(141, 6, 6)', fontWeight: 'bold' }}></i>
              <h3 style={{ margin: '0', marginLeft: '8px', color: '#924400' }}>Agregar Paso</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mt-5 d-flex justify-content-end" style={{ width: '97vw', maxWidth: '163vh', padding: '0 10px' }}>
          <button style={{ borderRadius: '10px', backgroundColor: '#924400', color: 'white', padding: '15px 45px', fontWeight: 'bold', borderColor: '#924400' }}>Publicar</button>
        </div>
      </section>
      
      <footer className="mt-4">
        <section className="p-4" style={{ backgroundColor: '#DDA15E', color: 'white' }}>
          <div>
            <h2>©2024 YUMMY</h2>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex gap-5">
              <nav>TERMINOS DE USO</nav>
              <nav>POLITICAS DE PRIVACIDAD</nav>
              <nav>COOKIES</nav>
            </div>
            <div>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-facebook"></i>
            </div>
          </div>
        </section>
      </footer>
    </div>
    </>
  );
}

export default Publicar;
