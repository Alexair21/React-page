import React, { useState } from "react";
import limon from "../assets/img/figuras/limon.png";
import pezca from "../assets/img/figuras/pezca.png";
import pezmartillo from "../assets/img/figuras/pezmartillo.png";
import pulpo from "../assets/img/figuras/pulpo.png";
import gaviota from "../assets/img/figuras/gaviota.png";
import pez2 from "../assets/img/figuras/pez2.png";
import foca from "../assets/img/figuras/foca.png";
import pez3 from "../assets/img/figuras/pez3.png";
import pez4 from "../assets/img/figuras/pez4.png";
import langosta from "../assets/img/figuras/langosta.png";

// Galería de imágenes
import cabrito from "../assets/img/galeria/cabrito.jpg";
import camarero from "../assets/img/galeria/1.jpg";
import comensales1 from "../assets/img/galeria/2.jpg";
import chef from "../assets/img/galeria/chef.jpg";
import chicharron from "../assets/img/galeria/chicharron.jpg";
import comensales2 from "../assets/img/galeria/3.jpg";
import cuy from "../assets/img/galeria/cuy.jpg";
import plato1 from "../assets/img/galeria/plato1.jpg";
import pulpoImg from "../assets/img/galeria/pulpo.jpg";

const decoraciones = [pezca, pezmartillo, pulpo, gaviota, pez2, foca, pez3, pez4, langosta];

const images = [
  cabrito,
  camarero,
  comensales1,
  chef,
  chicharron,
  comensales2,
  cuy,
  plato1,
  pulpoImg
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden p-4">
        {/* Título */}
        <p className="fusion text-3xl md:text-6xl text-primary text-center md:mb-8 mt-6">
          Nuestra Galeria
        </p>

        {/* Imagen de limón */}
        <img
          className="absolute top-0 right-4 md:right-80 w-[20%] md:w-[10%]"
          src={limon}
          alt="Limón"
        />
      </div>
      {/* Línea verde */}
      <div className="hidden md:block absolute h-[90%] mt-40 w-3 bg-primary left-1/2 transform -translate-x-1/2"></div>

      {/* Imágenes */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative bgr w-[70%] sm:w-1/2 md:w-2/5 lg:w-1/3 my-6 ${
            index % 2 === 1 ? "md:mr-[40%] mr-[0%]" : "md:ml-[60%] ml-[30%]"
          }`}
        >
          <img
            src={image}
            alt={`Galería ${index + 1}`}
            className={`cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105 w-[75%] ${
              index % 2 === 1 ? "md:mr-[40%] -ml-[15%]" : "md:ml-[10%] ml-[20%]"
            }`}
            onClick={() => handleClick(image)}
          />

          {/* Imagen decorativa */}
          <img
            src={decoraciones[index % decoraciones.length]}
            alt={`Decoración ${index + 1}`}
            className={`absolute w-[75%] md:w-[68%] ${
              index % 2 === 0 ? "left-[-150%]" : "right-[-120%]"
            } top-[10%] md:block hidden`}
          />
        </div>
      ))}

      {/* Modal para ampliar imagen */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleClose}
        >
          <span className="absolute top-4 right-8 text-white text-3xl cursor-pointer">
            &times;
          </span>
          <img
            className="max-w-full max-h-full "
            src={selectedImage}
            alt="Selected"
          />
        </div>
      )}
    </div>
  );
};

export default Galeria;
