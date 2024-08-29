import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import MiNavbar from "./MiNavbar";

function Home({ deslogeo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MiNavbar deslogeo={deslogeo} />

      {/* Secciones de contenido */}
      <section>
        <div className="pt-4 pb-4" style={{ backgroundColor: "#FEFAE0" }}>
          <div className="p-4" style={{ backgroundColor: "white" }}>
            <div className="container">
              <h3>Banquetes:</h3>
              <div className="row">
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/XYR8srB/pexels-pixabay-434258.jpg"
                      alt="Imagen 1"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/NmmJSnb/pexels-fotios-photos-1279330.jpg"
                      alt="Imagen 2"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/0G5cfkL/pexels-dana-tentis-118658-262959.jpg"
                      alt="Imagen 3"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/W62Vjkg/pexels-foodie-factor-162291-566566.jpg"
                      alt="Imagen 4"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
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
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/j6kxkym/pexels-ella-olsson-572949-3026810.jpg"
                      alt="Imagen 5"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/z7rJ0sY/pexels-ella-olsson-572949-3026804.jpg"
                      alt="Imagen 6"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/nQCByGy/pexels-abhinavcoca-291528.jpg"
                      alt="Imagen 7"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/jMK5Q1s/pexels-janetrangdoan-1092730.jpg"
                      alt="Imagen 8"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
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
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/VV4bhxN/pexels-life-of-pix-4295.jpg"
                      alt="Imagen 9"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/9Hd1gFP/pexels-ainis-jankauskas-45749-169391.jpg"
                      alt="Imagen 10"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/WBK6FF2/pexels-nietjuh-2479242.jpg"
                      alt="Imagen 11"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/B3BqTrV/pexels-maria-salazar-303506-878992.jpg"
                      alt="Imagen 12"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
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
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/zsdN6Q9/pexels-mike-2952864.jpg"
                      alt="Imagen 13"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/wYbRHFf/pexels-valeria-boltneva-1123257.jpg"
                      alt="Imagen 14"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/Kb8zQYs/pexels-elly-fairytale-3893735.jpg"
                      alt="Imagen 15"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
                </div>
                <div className="col-md-3 mt-1">
                  <Link to="/detalleReceta">
                    <img
                      src="https://i.ibb.co/64Dwffv/pexels-victor-freitas-1616747.jpg"
                      alt="Imagen 16"
                      style={{ width: "100%", maxHeight: "30vh", borderRadius: "5vh" }}
                    />
                  </Link>
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
