import React from "react";
import entrada from "../assets/img/platos/choritos.jpg";
import ceviche from "../assets/img/platos/ceviche2.jpg";
import arrozPato from "../assets/img/platos/arrozconpato.jpg";
import chicharronPescado from "../assets/img/platos/chicharron.jpg";
import leche from "../assets/img/platos/leche.jpg";
import menu from "../assets/img/menu.png";

const Tarjeta = ({ titulo, precio, items, imagen }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-lg md:mt-16 mb-16">
      {/* Contenido a la izquierda */}
      <div className="">
        <h2 className="text-2xl md:text-5xl font-bold w-full text-primary mb-4 fusion">
          {titulo}
        </h2>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className="text-teal-600 text-xs md:text-lg mr-2">•</span>
              <span className="text-teal-600 md:font-bold text-1xl md:text-xl">
                {item.nombre}
              </span>
              <span className="text-secondary md:font-bold text-sm md:text-xl ml-1">
                {item.descripcion}
              </span>
            </div>
            <div className="flex-grow mx-4 border-t border-dotted border-secondary md:block hidden"></div>
            <div className="flex items-baseline">
              <span className="text-primary text-xs md:text-xl font-bold">
                S/.
              </span>
              <span className="text-primary text-lg md:text-xl md:font-bold ml-1">
                {item.precio}
              </span>
              <span className="text-primary text-xs font-bold ml-1">.00</span>
            </div>
          </div>
        ))}
      </div>

      {/* Imagen centrada */}
      <div className="flex justify-center">
        <img
          src={imagen}
          alt={titulo}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const Tarjeta2 = ({ titulo, precio, items, imagen }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-lg mb-10">
      {/* Imagen centrada */}
      <div className="flex justify-center">
        <img
          src={imagen}
          alt={titulo}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg"
        />
      </div>
      {/* Contenido a la izquierda */}
      <div className="">
        <h2 className="text-3xl md:text-5xl font-bold w-full text-secondary mb-2 fusion">
          {titulo}
        </h2>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 md:w-[80%]"
          >
            <div className="flex items-center">
              <span className="text-white text-xs md:text-lg mr-2">•</span>
              <span className="text-secondary md:font-bold text-1xl md:text-xl">
                {item.nombre}
              </span>
              <span className="text-white md:font-bold text-sm md:text-xl ml-1">
                {item.descripcion}
              </span>
            </div>
            <div className="flex-grow mx-4 border-t border-dotted border-secondary md:block hidden"></div>
            <div className="flex items-baseline">
              <span className="text-white text-xs md:text-xl font-bold">
                S/.
              </span>
              <span className="text-white text-lg md:text-xl md:font-bold ml-1">
                {item.precio}
              </span>
              <span className="text-white text-xs font-bold ml-1">.00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menus = () => {
  return (
    <section>
      {/* Tarjeta de Entradas */}
      <div className="p-4 md:p-8 max-w-7xl mx-auto rounded-lg">
        <h1 className="fusion text-4xl md:text-5xl lg:text-7xl font-bold text-center mt-6 md:mt-10 mb-4 md:mb-6 text-secondary">
          Nuestra Carta
        </h1>
        <Tarjeta
          titulo="Entradas concheras"
          imagen={entrada}
          items={[
            {
              nombre: "Causa",
              descripcion: "acevichada",
              puntos: " ...............................",
              precio: "30",
            },
            {
              nombre: "Choritos",
              descripcion: "a la chalaca",
              puntos: " ...............................",
              precio: "15",
            },
            {
              nombre: "Papa",
              descripcion: "a la huancaina",
              puntos: " ...............................",
              precio: "18",
            },
            {
              nombre: "Chilcano",
              descripcion: "achorado",
              puntos: " ...............................",
              precio: "22",
            },
            {
              nombre: "Pulpo",
              descripcion: "al olivo",
              puntos: " ...............................",
              precio: "28",
            },
            {
              nombre: "Almejas",
              descripcion: "al limon (x8)",
              puntos: " ...............................",
              precio: "20",
            },
          ]}
        />
      </div>
      {/* Tarjeta de Ceviches */}
      <div className="carta2 flex flex-col justify-center bg-primary bg-cover bg-no-repeat bg-center relative w-full ">
        <Tarjeta2
          titulo="Ceviches"
          imagen={ceviche}
          items={[
            {
              nombre: "Ceviche",
              descripcion: "original",
              precio: "33",
            },
            {
              nombre: "Ceviche",
              descripcion: "mixto",
              precio: "35",
            },
            {
              nombre: "Ceviche",
              descripcion: "de corvina",
              precio: "37",
            },
            {
              nombre: "Ceviche",
              descripcion: "de conchas negras",
              precio: "40",
            },
            {
              nombre: "Ceviche",
              descripcion: "mellicero",
              precio: "40",
            },
            {
              nombre: "Tiradito",
              descripcion: "de pescado",
              precio: "30",
            },
            {
              nombre: "Festival",
              descripcion: "marino",
              precio: "65",
            },
            {
              nombre: "Trilogia",
              descripcion: "conchera",
              precio: "39",
            },
          ]}
        />
      </div>
      {/* Tarjeta de Platos */}
      <div className="p-4 md:p-8 max-w-7xl mx-auto rounded-lg">
        <Tarjeta
          titulo="Criollos norteños"
          imagen={arrozPato}
          items={[
            {
              nombre: "Arroz",
              descripcion: "con pato",
              puntos: " ...............................",
              precio: "40",
            },
            {
              nombre: "Cabrito",
              descripcion: "(ESPECIALIDAD)",
              puntos: " ...............................",
              precio: "39",
            },
            {
              nombre: "Pato",
              descripcion: "guisado",
              puntos: " ...............................",
              precio: "35",
            },
            {
              nombre: "Cuy",
              descripcion: "frito",
              puntos: " ...............................",
              precio: "65",
            },
            {
              nombre: "Seco",
              descripcion: "de chabelo",
              puntos: " ...............................",
              precio: "32",
            },
            {
              nombre: "Lomo saltado",
              descripcion: " (l. fino)",
              puntos: " ...............................",
              precio: "45",
            },
          ]}
        />
      </div>
      {/* Tarjeta de Chicharrones */}
      <div className="carta2 flex flex-col justify-center bg-primary bg-cover bg-no-repeat bg-center relative w-full ">
        <Tarjeta2
          titulo="Chicharrones"
          imagen={chicharronPescado}
          items={[
            {
              nombre: "Chicharrón",
              descripcion: "de pescado",
              precio: "32",
            },
            {
              nombre: "Chicharrón",
              descripcion: "mixto",
              precio: "34",
            },
            {
              nombre: "Chicharrón",
              descripcion: "de langostinos",
              precio: "36",
            },
            {
              nombre: "Chicharrón",
              descripcion: "de calamar",
              precio: "36",
            },
            {
              nombre: "Jalea",
              descripcion: "mixta",
              precio: "39",
            },
            {
              nombre: "Pesacado",
              descripcion: "apanado",
              precio: "30",
            },
            {
              nombre: "Pulpo",
              descripcion: "a la parrilla",
              precio: "47",
            },
          ]}
        />
      </div>
      {/* Tarjeta de leches de tigre */}
      <div className="p-4 md:p-8 max-w-7xl mx-auto rounded-lg">
        <Tarjeta
          titulo="Leches de tigre"
          imagen={leche}
          items={[
            {
              nombre: "L. T.",
              descripcion: "ORIGINAL",
              puntos: " ...............................",
              precio: "12",
            },
            {
              nombre: "L. T.",
              descripcion: "al aji amarillo",
              puntos: " ...............................",
              precio: "15",
            },
            {
              nombre: "L. Pantera",
              descripcion: "(c. negras)",
              puntos: " ...............................",
              precio: "18",
            },
            {
              nombre: "L. T. ",
              descripcion: "al rocoto",
              puntos: " ...............................",
              precio: "16",
            },
            {
              nombre: "L. T.",
              descripcion: "arriba 'ALIANZA'",
              puntos: " ...............................",
              precio: "22",
            },
            {
              nombre: "L. T.",
              descripcion: "y DALE 'U'",
              puntos: " ...............................",
              precio: "22",
            },
          ]}
        />
      </div>

      {/* Descarga de carta */}
      <div className="carta flex flex-col justify-center items-center bg-primary relative w-full">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-secondary fusion text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Descarga nuestra 
              <br />
              carta marina ahora
            </p>
            <p className="text-white text-lg md:text-xl font-light mb-6">
              Explora el auténtico sabor del mar en cada bocado.
              <br />
              ¡Descubre nuestra exquisita selección!
            </p>
            <button className="bg-secondary boton text-white py-3 px-6 rounded-full text-lg md:text-xl font-bold">
              Descargar aquí
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[250px] transform rotate-[5deg] mt-4 m-5 md:mt-0"
              src={menu}
              alt="menu"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;
