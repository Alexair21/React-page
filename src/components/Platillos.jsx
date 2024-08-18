import React from "react";
import concha from "../assets/img/concha.png";
import arrozconpato from "../assets/img/arrozconpato.jpg";
import cabrito from "../assets/img/cabrito.jpg";
import ceviche2 from "../assets/img/ceviche2.jpg";

const Card = ({ title, description, price, imgSrc, imgAlt }) => {
  return (
    <div className="w-[98%] md:w-96 h-[87%] border-1 rounded-lg overflow-hidden bg-primary text-white mt-[20%]">
      <div className="relative w-full pt-[56%] overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className="p-8">
        <h3 className="text-3xl md:text-4xl">{title}</h3>
        <p className="text-1xl md:text-1xl mt-1 mb-1 font-sans">{description}</p>
        <h3 className="text-3xl">{price}</h3>
        <button className="mt-4 p-2 bg-secondary text-white border-none cursor-pointer">
          Saber más
        </button>
      </div>
    </div>
  );
};

const Redes = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden p-4">
      <p className="absolute top-10 text-3xl md:text-6xl text-primary text-center">
        Platillos populares
      </p>

      <img
        className="absolute top-0 md:top-3 right-10 md:right-32 w-[15%] md:w-[10%]"
        src={concha}
        alt=""
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-[8%] md:mt-[4%]">
        <Card
          title="Arroz con Pato"
          description="Disfruta de un plato emblemático, arroz sazonado y pato jugoso, cocido a la perfección."
          price="S/. 40.00"
          imgSrc={arrozconpato}
          imgAlt="Arroz con Pato"
        />
        <Card
          title="Cabrito norteño"
          description="La especialidad de la casa. Un clásico del norte del Perú, cabrito tierno adobado y cocido lentamente para resaltar su sabor."
          price="S/. 39.00"
          imgSrc={cabrito}
          imgAlt="Cabrito norteño"
        />
        <Card
          title="Ceviche"
          description="Fresco y vibrante, nuestro ceviche ofrece una auténtica experiencia peruana con cada bocado."
          price="S/. 33.00"
          imgSrc={ceviche2}
          imgAlt="Ceviche"
        />
      </div>
    </section>
  );
};

export default Redes;
