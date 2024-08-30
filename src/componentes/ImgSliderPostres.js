import React, { useState } from 'react';
import './ImgSlider.css'; // Importa el CSS con las animaciones
import { Link } from 'react-router-dom';

const images = [
  'https://i.ibb.co/j6kxkym/pexels-ella-olsson-572949-3026810.jpg',
  'https://i.ibb.co/z7rJ0sY/pexels-ella-olsson-572949-3026804.jpg',
  'https://i.ibb.co/nQCByGy/pexels-abhinavcoca-291528.jpg',
  'https://i.ibb.co/jMK5Q1s/pexels-janetrangdoan-1092730.jpg',
  'https://i.ibb.co/XYR8srB/pexels-pixabay-434258.jpg',
  'https://i.ibb.co/NmmJSnb/pexels-fotios-photos-1279330.jpg',
  'https://i.ibb.co/0G5cfkL/pexels-dana-tentis-118658-262959.jpg',
  'https://i.ibb.co/gDJNGtT/free-photo-of-comida-plato-italiano-cena.jpg'

];

function ImgSliderPostres() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 3)); // % (images.length - 3) para reiniciar
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - 3)) % (images.length - 3)); // + (images.length - 3) para manejar el caso de índice negativo
  };

  return (
    <div className="image-slider-container">
      <button className="slider-button prev" onClick={handlePrev}>Prev</button>
      <div className="image-slider">
        <div
          className="image-slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100 / 4}%)` }} // Ajuste para mostrar una imagen a la vez
        >
          {images.map((src, index) => (
            <div className="image-slide" key={index}>
              <Link to={"/detalleReceta"}>
                  <img src={src} alt={`Slide ${index}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button next" onClick={handleNext}>Next</button>
    </div>
  );
}

export default ImgSliderPostres;
