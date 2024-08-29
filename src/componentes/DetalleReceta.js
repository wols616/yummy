import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MiNavbar from './MiNavbar';
import { Link } from 'react-router-dom';

const DetalleReceta = ({deslogeo}) => {
    return (
        <>
        <MiNavbar deslogeo={deslogeo}/>
            {/* Hero Banner */}
            <section className="hero-banner" style={heroBannerStyle}>
                <div className="overlay" style={overlayStyle}></div>
                <div className="container position-relative">
                    <h1>Lasaña Clásica de Pollo y Carne</h1>
                    <p>Con Salsa de Tomate y Bechamel</p>
                    <Link to='/home'>
                        <button className="btn btn-custom mt-3" style={btnCustomStyle}>Ver más recetas</button>
                    </Link>
                </div>
            </section>

            {/* Receta */}
            <section className="container recipe-section" style={recipeSectionStyle}>
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="ingredients-title" style={ingredientsTitleStyle}>Ingredientes:</h2>
                        <ul>
                            <li>1 cucharadita de aceite de oliva extra virgen</li>
                            <li>4 dientes de ajo, picados finamente</li>
                            <li>1/2 taza de cebolla, picada finamente</li>
                            <li>1 1/4 libra de pechuga de pollo cocido, deshilachada</li>
                            <li>2 sobres de Salsa de Tomate Finas Hierbas MAGGI®</li>
                            <li>Sal y pimienta negra recién molida al gusto</li>
                            <li>1/2 libra de pasta para lasaña precocida</li>
                            <li>2 tazas de queso mozzarella rallado</li>
                            <li>1 libra de carne molida, cocida</li>
                            <li>1/2 taza de pan rallado japonés Panko</li>
                            <li>1 taza de salsa bechamel</li>
                            <li>1/4 taza de albahaca fresca, picada</li>
                            <li>1/2 taza de queso parmesano rallado</li>
                        </ul>
                    </div>

                    <div className="col-md-5 mt-4 mt-md-0">
                        <div className="row image-grid">
                            <div className="col-6 mb-3">
                                <img src="https://i.ibb.co/gDJNGtT/free-photo-of-comida-plato-italiano-cena.jpg" alt="Lasaña Imagen 1" style={imageStyle} />
                            </div>
                            <div className="col-6 mb-3">
                                <img src="https://i.ibb.co/qpNTn3n/pexels-photo-6046493.webp" alt="Lasaña Imagen 2" style={imageStyle} />
                            </div>
                            <div className="col-6 mb-3">
                                <img src="https://i.ibb.co/F7qMrx8/pexels-photo-2474661.jpg" alt="Lasaña Imagen 3" style={imageStyle} />
                            </div>
                            <div className="col-6 mb-3">
                                <img src="https://i.ibb.co/T2kRkd2/pexels-photo-5724557.jpg" alt="Lasaña Imagen 4" style={imageStyle} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instrucciones */}
            <section className="container recipe-section" style={recipeSectionStyle}>
                <h2 className="instructions-title" style={instructionsTitleStyle}>¡A cocinar!</h2>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>1.</span> Precalienta el horno a 180°C (350°F).
                </div>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>2.</span> Calienta el aceite en una sartén. Agrega ajo y cebolla; sofríe hasta que estén transparentes.
                </div>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>3.</span> Añade la carne molida y cocina hasta que esté dorada. Sazona con sal y pimienta.
                </div>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>4.</span> Incorpora el pollo deshilachado y mezcla bien.
                </div>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>5.</span> Agrega la Salsa de Tomate y cocina a fuego lento.
                </div>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>6.</span> Prepara la salsa bechamel y mantenla caliente.
                </div>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>7.</span> Monta la lasaña con capas de pasta, mezcla de carne, salsa bechamel y queso.
                </div>
                <div className="step">
                    <span className="step-number" style={stepNumberStyle}>8.</span> Hornea hasta que esté dorada y burbujeante.
                </div>
            </section>
        </>
    );
};

// Estilos en línea
const heroBannerStyle = {
    background: 'url("https://i.ibb.co/gDJNGtT/free-photo-of-comida-plato-italiano-cena.jpg") no-repeat center center',
    backgroundSize: 'cover',
    color: 'white',
    padding: '150px 0',
    textAlign: 'center',
    position: 'relative'
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
};

const recipeSectionStyle = {
    marginTop: '5vh',
    marginBottom: '5vh'
};

const ingredientsTitleStyle = {
    color: '#DDA15E',
    borderBottom: '2px solid #DDA15E',
    paddingBottom: '10px',
    marginBottom: '20px'
};

const instructionsTitleStyle = {
    color: '#DDA15E',
    borderBottom: '2px solid #DDA15E',
    paddingBottom: '10px',
    marginBottom: '20px'
};

const stepNumberStyle = {
    fontSize: '2em',
    color: '#DDA15E',
    marginRight: '10px'
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '1vh',
    objectFit: 'cover'
};

const btnCustomStyle = {
    backgroundColor: '#BC6C25',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1.1rem',
    border: 'none',
    transition: 'background-color 0.3s ease'
};

export default DetalleReceta;
