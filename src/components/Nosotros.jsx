import React from "react";
import "./Nosotros.css";
import alitas from '../assets/img/alitas.jpg';
import pulpo from '../assets/img/pulpo.jpg';

const Nosotros = () => {
  return (
    <section className="nosotros-section relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="box relative w-full ">
        <div className="bordeArriba"></div>
        <div className="grid grid-cols-2 gap-2">
          <div className="lema ">
            <p className="fusion text-secondary text-7xl">Fusión peruana</p>
            <p className="fusion text-secondary text-6xl">Fusión Perucha</p>
            <img
              className="m-2 p-2 w-48"
              src="src/assets/img/ondas.png"
              alt=""
            />
            <p className="nosotrosLema">
              Somos La Gran Concha Norteña, un rincón donde la tradición y la
              frescura del mar se unen para ofrecerte una experiencia culinaria
              inolvidable, somos apasionados de la cocina peruana y nos
              especializamos en llevar a tu mesa los sabores auténticos del
              norte del Perú.
            </p>
          </div>
          <div className="imagen-nosotros ">
            <img
              className="imagen2"
              src={pulpo}
              alt="pulpo"
            />
            <img
              className="imagen"
              src={alitas}
              alt="alitas"
            />
          </div>
        </div>
      </div>
      <div className="bordeAbajo"></div>
    </section>
  );
};

export default Nosotros;
