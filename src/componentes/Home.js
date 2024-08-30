import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import MiNavbar from "./MiNavbar";
import Carrusel from "./Carrusel";
import ImgSliderPostres from "./ImgSliderPostres";
import ImageSliderBebidas from "./ImgSliderBebidas";
import ImageSliderPlatoFuerte from "./ImgSliderPlatoFuerte";
import ImageSliderOtros from "./ImgOtros";

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
                <ImgSliderPostres/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Bebidas:</h3>
                <ImageSliderBebidas/>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Platos Fuerte:</h3>
                <ImageSliderPlatoFuerte/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Otros:</h3>
                <ImageSliderOtros/>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
