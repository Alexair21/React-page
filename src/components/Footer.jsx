import React from "react";
import "./Footer.css";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="borde relative">
        <div className="overlay"></div>
        <img className="logo" src={logo} alt="" />
        <p className="footer-text -mt-3">© La Gran Concha Norteña 2024. Todos los derechos reservados.</p>
      </div>
      <div className="creador bg-primary text-white p-2">
        <p>Desarrollado por<span className="text-secondary"> Alexair21</span></p>
      </div>
    </div>
  );
};

export default Footer;
