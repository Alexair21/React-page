import React from "react";
import "./Delivery.css";
import pulpo from "../assets/img/pulpo.png";
import chef from "../assets/img/chef.png";
import langosta from "../assets/img/langosta.png";

const Delivery = () => {
  return (
    <div class="container">
      <div class="relative -top-12 h-40">
        <img
          className="imagen-pulpo w-56"
          src={pulpo}
          alt="Pulpo"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 relative h-40">
        <div className="anuncio text-center ml-72 -mt-16">
          <p className="text-secondary text-2xl">Ahora puedes</p>
          <p className="text-primary text-5xl">Contactarnos</p>
          <h1 className="mt-2 text-4xl text-secondary">974 985 555</h1>
        </div>
        <div className="imagen-nosotros h-52">
          <img
            className="imagen-chef mr-96"
            src={chef}
            alt="chef"
          />
          <div class="relative -top-2 ml-96">
            <img
              className="imagen-pulpo w-56"
              src={langosta}
              alt="Langosta"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
