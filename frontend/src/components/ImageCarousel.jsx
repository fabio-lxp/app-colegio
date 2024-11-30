import React, { useState, useEffect, useCallback } from "react";
import "../styles/ImageCarousel.css";

const ImageCarousel = () => {
  const images = [
    "/images/colegio1.jpg",
    "/images/colegio2.jpg",
    "/images/colegio3.jpg",
    "/images/colegio4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para pasar a la siguiente imagen
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Función para regresar a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Cambiar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="prev-button" onClick={prevImage}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="next-button" onClick={nextImage}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ImageCarousel;
