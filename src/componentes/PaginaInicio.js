import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PaginaInicio.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function PaginaInicio() {
    return (
        <div className="body">

    
          <section>
            <div className="d-flex flex-column col-10 my-5 m-auto">
              <img src="https://i.ibb.co/sK1MCCv/logo.png" className="m-auto" alt="Logo" />
              <h1 className="text-center mt-5" style={{ color: '#BC6C25' }}>
                ¡Más de 1,000 recetas de cocina!
              </h1>
            </div>
          </section>
    
          <section>
            <div className="pt-5" style={{ backgroundColor: '#DDA15E' }}>
              <div>
                <h1 className="text-center" style={{ color: 'white' }}>
                  ¿No sabes qué cocinar?
                </h1>
                <h2 className="text-center" style={{ color: 'white' }}>
                  Recetas fáciles y deliciosas para cada día de la semana
                </h2>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between col-12 col-xl-10 col-xxl-8 m-auto gap-xxl-5 gap-xl-4 gap-3" style={{ padding: '1rem' }}>
                <div className="card mb-4 tarjeta" style={{ width: '100%' }}>
                  <img src="https://i.ibb.co/vqrYqgT/image.png" className="card-img-top imgSize" alt="Burritos al pastor" />
                  <div className="card-body">
                    <h5 className="card-title">Burritos al pastor solo con 4 ingredientes</h5>
                    <div className="d-flex justify-content-end">
                      <i className="bi bi-heart"></i>
                      <i className="bi bi-bookmark ml-2"></i>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 tarjeta" style={{ width: '100%' }}>
                  <img src="https://s3-alpha-sig.figma.com/img/6ce9/4800/d716bab137de84d7fe22554bcc5e5e3d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hwl5vb0vldMGhAVlJLQ5q3y5KGOFPLe2OzkBC1FWGQ4IbUJg8OwU2mTEaQow8uQuw8xWH6q2knlf2sGh66fsmKjGWpXap-x4PHiafjTstpRh~nhoqFYWdY2XSUlFjy5~7Tq~IbWUA-nv9MKYa2wCeYzhEpPCen4WzhimeqLMV6qTPAAeblkjc-ln-2iMjTL82Fm95-IeP4tdDH2XbGouLmsElazIW4RQ8vli2FSSXjhVRYT5KQcVj0ZdK6zDA-G6-OnTuToL-vF66BqkNanZ66D3n5myJx23IIOnma0wRQau1oGb2WkB8dwD4gMWydjZelNTsw0fmtjX2gJcY7aXhQ__" className="card-img-top imgSize" alt="Burritos al pastor" />
                  <div className="card-body">
                    <h5 className="card-title">Deliciosa pasta con jitomates</h5>
                    <div className="d-flex justify-content-end">
                      <i className="bi bi-heart"></i>
                      <i className="bi bi-bookmark ml-2"></i>
                    </div>
                  </div>
                </div>
                <div className="card mb-4 tarjeta" style={{ width: '100%' }}>
                  <img src="https://s3-alpha-sig.figma.com/img/0637/18fb/0700a2a466b7a1c664be422eef630450?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8iTwthOzJtQdxjMk7WZ~bdGGECbU3Rgnez3dcAU78igD8ZZTeVDF1JQSfuqZfud9g1lBOMcfv2rnKd8EQzsvGb9eO4uPQG72RI1THqGE1MfOdyuBklxtrYtFFFCzBE~VKiJffDkP9PerQ7A7JdlN1xTHBXhdEV6SULtFNAYNIZWVzsZJOhAGMFEnwJ-S5ZRhTpANxtt5xALQHP0tOuYskOPq2Yj3ePguplNhOJR0FrLqKxH-o8WBKwH6fQ4mK5hfdMIqsvssE13xFttTsw4c6h~xyX7KvBmZkpJn99ueOp4Tg0-eVZ1g6BzBWLh1ZaOpP5iqG68IhAQswG~q2VO5g__" className="card-img-top imgSize" alt="Burritos al pastor" />
                  <div className="card-body">
                    <h5 className="card-title">Pollo con salsa Chipotle</h5>
                    <div className="d-flex justify-content-end">
                      <i className="bi bi-heart"></i>
                      <i className="bi bi-bookmark ml-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section className="p-5">
            <h1 className="text-center" style={{ color: '#924400' }}>¡Publica tus creaciones!</h1>
          </section>
    
          <section className="p-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#DDA15E' }}>
            <h1 className="text-center text-white">Encontrarás todo tipo de comidas</h1>
          </section>
    
          <section className="py-5">
            <div className="d-flex flex-column flex-md-row justify-content-center gap-5">
              <div className="d-flex flex-column justify-content-center align-items-center col-md-3 tarjeta">
                <img src="https://i.ibb.co/PwN7f2S/postre.jpg" className="img-fluid w-md-75 w-50" style={{ borderRadius: '100%' }} alt="Postres" />
                <h2 className="text-center">Postres</h2>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center col-md-3 tarjeta">
                <img src="https://i.ibb.co/yqzDgfz/carne.jpg" className="img-fluid w-md-75 w-50" style={{ borderRadius: '100%' }} alt="Aves" />
                <h2 className="text-center">Aves</h2>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center col-md-3 tarjeta">
                <img src="https://i.ibb.co/zmMvLYs/mariscos.jpg" className="img-fluid w-md-75 w-50" style={{ borderRadius: '100%' }} alt="Mariscos" />
                <h2 className="text-center">Mariscos</h2>
              </div>
            </div>
          </section>
    
          <section className="p-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#DDA15E' }}>
            <h1 className="text-center text-white">Y muchos más...</h1>
          </section>
    
          <section>
            <div className="d-flex flex-column align-items-center justify-content-center col-md-6 col-12 m-auto mb-5">
              <div className="mt-5 mb-4">
                <h3 className="text-center">¡Regístrate gratis!</h3>
                <h4 className="text-center">Publica, comenta y guarda tus recetas favoritas</h4>
              </div>
              <Link to="/register" className="btn btn-primary px-5 py-2" style={{ backgroundColor: '#BC4025', borderRadius: '2.5vh', border: '0', textDecoration: 'none', color: 'white' }}>
                Registrarse
              </Link>
            </div>
          </section>
    
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
        </div>
      );       
}

export default PaginaInicio;
