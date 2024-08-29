import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import MiNavbar from "./MiNavbar";
import Carrusel from "./Carrusel";
import ImgSlider from "./ImgSlider";


function Home({ deslogeo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MiNavbar deslogeo={deslogeo} />

      {/* Secciones de contenido */}
      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4 py-0" style={{ backgroundColor: "white" }}>
            <div className="container p-md-5">
              <h3>Trending:</h3>
              <div className="d-flex align-items-center justify-content-center">
                <Carrusel/>
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
                <ImgSlider/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Bebidas:</h3>
                <ImgSlider/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Platos Fuertes:</h3>
                <ImgSlider/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Algo más:</h3>
                <ImgSlider/>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default Home;
