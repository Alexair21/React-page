import React from "react";
import pulpo from "../assets/img/pulpo.png";
import chef from "../assets/img/chef.png";
import langosta from "../assets/img/langosta.png";

const Delivery = () => {
  return (
    <div class="container">
      <div class="relative">
        <img className="w-[30%] md:w-56" src={pulpo} alt="Pulpo" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center md:ml-[50%]">
          <p className="text-secondary text-3xl md:text-2xl">Ahora puedes</p>
          <p className="text-primary text-4xl md:text-5xl">Contactarnos</p>
          <h1 className="mt-2 text-2xl md:text-4xl text-secondary font-sans">
            974 985 555
          </h1>
        </div>
        <div className="flex justify-center items-center relative h-52">
          <img
            className="mb-12 md:mb-[30%] md:mr-[50%] w-[60%] md:w-[50%] absolute mr-15"
            src={chef}
            alt="chef"
          />
          <div class="relative ml-96">
            <img className="imagen-pulpo w-56" src={langosta} alt="Langosta" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
