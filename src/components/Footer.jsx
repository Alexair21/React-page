import React from "react";
import logo from '../assets/logo.webp';

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="borde relative mt-4 w-full h-64 overflow-hidden">
        <div className="overlay absolute inset-0 bg-primary bg-opacity-50"></div>
        <img className="relative z-10 w-[50%] mx-auto md:w-[15%]" src={logo} alt="Logo" />
        <p className="relative z-10 text-white text-sm lg:text-base md:-mt-4 mt-0">
          © La Gran Concha Norteña 2024. Todos los derechos reservados.
        </p>
      </div>
      <div className="bg-primary text-white py-2">
        <p>
          Desarrollado por <span className="text-secondary">Alexair21</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
