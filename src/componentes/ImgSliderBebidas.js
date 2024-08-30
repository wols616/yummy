import React, { useState } from 'react';
import './ImgSlider.css'; // Importa el CSS con las animaciones
import { Link } from 'react-router-dom';

const images = [
  "https://hips.hearstapps.com/hmg-prod/images/bebidas-verano-portada-elle-1658494280.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/bebidas-verano-limonada-elle-1658653043.jpg",
  "https://cdn.aarp.net/content/dam/aarp/food/recipes/2018/10/1140-limofresa-gas-drink-esp.jpg",
  "https://blog.supermercadosmas.com/wp-content/uploads/2021/06/sangr%C3%ADa-Eurocopa.jpg",
  "https://saborgourmet.com/wp-content/uploads/receta-tinto-de-verano.jpg"


];

function ImageSliderBebidas() {
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

export default ImageSliderBebidas;
