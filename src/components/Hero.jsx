import React, { useState, useEffect } from "react";
import "animate.css";


import face from "../assets/img/hero/face.webp";
import insta from "../assets/img/hero/insta.webp";
import tiktok from "../assets/img/hero/tiktok.webp";
import wtsp from "../assets/img/hero/wtsp.webp";
import cubiertos from "../assets/img/hero/cubiertos.webp";
import ceviche from "../assets/img/hero/ceviche.webp";
import cabrito from "../assets/img/hero/cabrito.webp";

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Prueba nuestras",
      subtitle: "Delicias",
      description: "Marinas",
      image: ceviche,
      icon: cubiertos,
    },
    {
      id: 2,
      title: "También nuestros",
      subtitle: "Platos",
      description: "Criollos",
      image: cabrito,
      icon: cubiertos,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section relative h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="flex w-full transition-transform duration-1000 mb-32 md:mb-0"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex items-center justify-center animate__animated animate__backInLeft">
              <div className="text-center p-4">
                <h1 className="text-3xl md:text-5xl text-primary">
                  {slide.title}
                </h1>
                <p className="text-6xl md:text-7xl text-primary">
                  {slide.subtitle}
                </p>
                <p className="text-7xl md:text-7xl text-secondary">
                  {slide.description}
                </p>
                <div className="mt-4 justify-center">
                  <img className="w-10 h-10 hidden md:block md:w-14 md:h-14 mx-auto" src={slide.icon} alt="Icon" />
                  <button className="boton bg-primary text-white hover:bg-emerald-800 m-10">
                    <a href="#menu">Ver Carta!</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center animate__animated animate__backInRight">
              <img
                className="img-slide mx-auto w-[80%] h-auto"
                src={slide.image}
                alt={slide.subtitle}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Puntos de Navegación */}
      <div className="absolute bottom-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-secondary"
            }`}
          ></button>
        ))}
      </div>

      {/* Redes Sociales */}
      <div className="absolute bottom-10 right-[20%] space-x-2 hidden md:block">
        <a href="https://www.facebook.com/profile.php?id=100066650876833">
          <img className="red hover:w-10 h-auto inline-block w-8  md:w-9 md:h-9" src={face} alt="facebook" />
        </a>
        <a href="">
          <img className="red hover:w-10 h-auto inline-block w-8 md:w-9 md:h-9" src={insta} alt="instagram" />
        </a>
        <a href="">
          <img className="red hover:w-10 h-auto inline-block w-8 md:w-9 md:h-9" src={tiktok} alt="tiktok" />
        </a>
        <a href="">
          <img className="red hover:w-10 h-auto inline-block w-8 md:w-9 md:h-9" src={wtsp} alt="whatsapp" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
