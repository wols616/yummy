import React, { useState } from 'react';
import './ImgSlider.css'; // Importa el CSS con las animaciones
import { Link } from 'react-router-dom';

const images = [
  "https://lh5.googleusercontent.com/proxy/pUktEPOPAVX1I7_OQD-A3Bxq8GgopETbGWU0biIv7BPF1WAhEm7Jee3nfcAMfOa16FT0aDwxJhx0Unodk2aw7g2_MO5LJVfTP5_99NnmO4kpKLj-SFJeWGWt5QfwzgjptAs9A27N",
  "https://cdn7.kiwilimon.com/clasificacion/3675/3675.jpg",
  "https://arancooks.com/wp-content/uploads/Muslos-de-pollo-a-la-sriracha-960x750.jpg",
  "https://www.gourmet.com.co/wp-content/uploads/2023/10/Gourmet-Receta-de-albo%CC%81ndigas.webp",
  "https://reservalamakina.com/wp-content/uploads/2022/03/Captura-de-Pantalla-2022-03-24-a-las-12.18.10-531x354.png",
  "https://www.customculinary.global/CustomCulinary/media/CASA/Cenam/Recipes/Albondigas-Chicknless-Buffalo.jpg?ext=.jpg"


];

function ImageSliderPlatoFuerte() {
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

export default ImageSliderPlatoFuerte;
