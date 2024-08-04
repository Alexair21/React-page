import React, { useState } from "react";
import { RiMenuFill, RiCloseLargeFill } from "react-icons/ri";
import "./Header.css";
import 'animate.css';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex w-full justify-between xl:justify-start items-center p-4 navbar h-[10vh] z-50">
      <div className="xl:w-1/6 text-center mt-4">
        <a href="#" className="but-2">
          <img
            src={logo}
            alt="logo"
            className="block h-auto w-20"
          />
        </a>
      </div>

      <nav
        className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center mt-5
        transition-all duration-500 ease-in-out`}
      >
        <a href="/" className="nav-link text-primary">
          Inicio
        </a>
        <a href="/" className="nav-link text-secondary">
          Menu
        </a>
        <a href="/" className="nav-link text-secondary">
          Nosotros
        </a>
        <a href="/" className="nav-link text-secondary">
          Galeria
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl p-2 xl:hidden text-secondary text-wrap text font-w"
      >
        {showMenu ? <RiCloseLargeFill /> : <RiMenuFill />}
      </button>
    </header>
  );
};

export default Navbar;
