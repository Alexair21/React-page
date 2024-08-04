import React, { useState, useEffect } from "react";
import "animate.css";
import "./Hero.css";

import face from "../assets/img/face.png";
import insta from "../assets/img/insta.png";
import tiktok from "../assets/img/tiktok.png";
import wtsp from "../assets/img/wtsp.png";
import cubiertos from "../assets/img/cubiertos.png";
import ceviche from "../assets/img/ceviche.png";
import cabrito from "../assets/img/cabrito.png";

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
      title: "Támbien nuestros",
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
        className="flex w-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex">
            <div className="w-1/2 flex items-center justify-center animate__animated animate__backInLeft">
              <div className="text-center">
                <h1 className="text-5xl md:text-4xl text-primary">
                  {slide.title}
                </h1>
                <p className="text-7xl md:text-7xl text-primary">
                  {slide.subtitle}
                </p>
                <p className="text-7xl md:text-7xl text-secondary">
                  {slide.description}
                </p>
                <div className="mt-4 align-center">
                  <img className=" w-14 mx-auto" src={slide.icon} alt="Icon" />
                  <button className="Bcarta">
                    <a href="#menu">Ver Carta!</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center animate__animated animate__backInRight">
              <img
                className="img-slide mx-auto"
                src={slide.image}
                alt={slide.subtitle}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Puntos de Navegación */}
      <div className="nav-dots absolute bottom-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Imagen de pez */}
      <div className="RedesSociales absolute right-72 bottom-20">
        <a href="">
          <img className="red inline-block w-9 h-9 mr-2" src={face} alt="facebook" />
        </a>
        <a href="">
          <img className="red inline-block w-9 h-9  mr-2" src={insta} alt="instagram" />
        </a>
        <a href="">
          <img className="red inline-block w-9 h-9  mr-2" src={tiktok} alt="tiktok" />
        </a>
        <a href="">
          <img className="red inline-block w-9 h-9  mr-2" src={wtsp} alt="whatsapp" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
