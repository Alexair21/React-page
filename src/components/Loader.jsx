import React from 'react';
import '../index.css'; // Asegúrate de importar los estilos
import grayscaleImage from '../assets/logo2.png'; // Ruta a la imagen en gris
import colorImage from '../assets/logo.png'; // Ruta a la imagen en color

const Loader = () => {
    return (
      <div className="loader-wrapper">
        <img src={grayscaleImage} alt="Grayscale" className="loader-grayscale" />
        <img src={colorImage} alt="Color" className="loader-color" />
      </div>
    );
  };
  
  export default Loader;