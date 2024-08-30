import React, { useState } from 'react';
import './ImgSlider.css'; // Importa el CSS con las animaciones
import { Link } from 'react-router-dom';

const images = [
  "https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/01/03/20-carnitas-mexicanas.jpeg",
  "https://cdn7.kiwilimon.com/ss_secreto/4386/640x640/4386.jpg.webp",
  "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/elgranchef/p/platos-para-papa-2.jpg",
  "https://reservalamakina.com/wp-content/uploads/2022/03/Captura-de-Pantalla-2022-03-24-a-las-12.18.10-531x354.png",
  "https://www.customculinary.global/CustomCulinary/media/CASA/Cenam/Recipes/Albondigas-Chicknless-Buffalo.jpg?ext=.jpg"


];

function ImageSliderOtros() {
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

export default ImageSliderOtros;
