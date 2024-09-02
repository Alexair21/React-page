import React, { useState } from "react";
import { RiMenuFill, RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Header.css";
import "animate.css";
import logo from "../assets/logo.webp";
import limon from "../assets/img/figuras/limon.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <header className="flex w-full justify-between xl:justify-start items-center p-4 navbar h-[10vh] z-50">
      <div className="xl:w-1/6 text-center mt-4">
        <Link to="/" className="but-2 w-auto m-0 p-0 inline-block">
          <img src={logo} alt="logo" className="block h-auto w-20" />
        </Link>
      </div>

      <nav
        className={`fixed w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center mt-5
        transition-all duration-500 ease-in-out z-50`}
      >
        {/* Botón de cerrar dentro del menú */}
        <button
          onClick={() => setShowMenu(false)}
          className="absolute top-8 right-8 text-4xl text-primary xl:hidden"
        >
          <RiCloseLargeFill />
        </button>

        {/* Imagen sobre los enlaces en modo móvil */}
        <div className="w-full text-center mb-8 xl:hidden">
          <img src={limon} alt="Imagen menú móvil" className="mx-auto w-1/2 h-auto" />
        </div>

        <Link to="/" className="nav-link text-primary" onClick={handleLinkClick}>
          Inicio
        </Link>
        <Link to="/menu" className="nav-link text-secondary" onClick={handleLinkClick}>
          Menu
        </Link>
        <Link to="/galeria" className="nav-link text-secondary" onClick={handleLinkClick}>
          Galeria
        </Link>
      </nav>

      {/* Botón de menú para dispositivos móviles */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-4xl font-bold p-2 xl:hidden text-secondary"
      >
        {showMenu ? <RiCloseLargeFill /> : <RiMenuFill />}
      </button>
    </header>
  );
};

export default Navbar;
