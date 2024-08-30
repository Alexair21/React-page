import React from "react";
import alitas from "../assets/img/alitas.jpg";
import pulpo from "../assets/img/pulpo.jpg";

const Nosotros = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="box flex flex-col justify-center  bg-primary bg-cover bg-no-repeat bg-center relative w-full"
      >
        <div className="relative md:grid grid-cols-2 gap-2">
          <div className="p-[5%] md:p-[15%] justify-center flex-col flex">
            <p className="fusion text-secondary text-4xl md:text-7xl m-2 p-0">
              Fusión Peruana
            </p>
            <p className="fusion text-secondary text text-4xl md:text-5xl m-2 p-0">
              Fusión Perucha
            </p>
            <img
              className="m-2 p-2 w-48"
              src="src/assets/img/ondas.png"
              alt=""
            />
            <p className="text-1xl text-white m-2 md:text-xl font-sans">
              Somos La Gran Concha Norteña, un rincón donde la tradición y la
              frescura del mar se unen para ofrecerte una experiencia culinaria
              inolvidable, somos apasionados de la cocina peruana y nos
              especializamos en llevar a tu mesa los sabores auténticos del
              norte del Perú.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center relative mt-5">
            <img
              className="w-[50%] mt-[20%] ml-[30%] md:w-[45%] border-4 border-white shadow-md"
              src={alitas}
              alt="alitas"
            />

            <img
              className="w-[45%] mb-[30%] mr-[30%] md:w-[45%] border-4 border-white shadow-md absolute"
              src={pulpo}
              alt="pulpo"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Nosotros;
