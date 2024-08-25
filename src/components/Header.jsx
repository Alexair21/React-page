import React, { useState } from "react";
import { RiMenuFill, RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom"; // Importa Link
import "./Header.css";
import "animate.css";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex w-full justify-between xl:justify-start items-center p-4 navbar h-[10vh] z-50">
      <div className="xl:w-1/6 text-center mt-4">
        <Link to="/" className="but-2 w-auto m-0 p-0 inline-block">
          <img src={logo} alt="logo" className="block h-auto w-20" />
        </Link>
      </div>

      <nav
        className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center mt-5
        transition-all duration-500 ease-in-out`}
      >
        <Link to="/" className="nav-link text-primary">
          Inicio
        </Link>
        <Link to="/menu" className="nav-link text-secondary">
          Menu
        </Link>
        <Link to="/nosotros" className="nav-link text-secondary">
          Nosotros
        </Link>
        <Link to="/galeria" className="nav-link text-secondary">
          Galeria
        </Link>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-4xl font-bold p-2 xl:hidden text-secondary text-wrap text font-w"
      >
        {showMenu ? <RiCloseLargeFill /> : <RiMenuFill />}
      </button>
    </header>
  );
};

export default Navbar;
