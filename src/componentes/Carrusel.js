import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselCaption } from 'reactstrap';
import { Link } from 'react-router-dom'; // Importa Link
import './Carrusel.css'; // Asegúrate de tener un archivo CSS para estilos adicionales

const items = [
  {
    src: 'https://i.ibb.co/XYR8srB/pexels-pixabay-434258.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
    link: '/detalleReceta', // Agrega el enlace correspondiente
  },
  {
    src: 'https://i.ibb.co/NmmJSnb/pexels-fotios-photos-1279330.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
    link: '/detalleReceta', // Agrega el enlace correspondiente
  },
  {
    src: 'https://i.ibb.co/0G5cfkL/pexels-dana-tentis-118658-262959.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
    link: '/detalleReceta', // Agrega el enlace correspondiente
  },
];

function Carrusel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating || newIndex === activeIndex) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <Link to={item.link}>
        <img src={item.src} alt={item.altText} />
      </Link>
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <div className="carousel-thumbnails">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.altText}
            className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
