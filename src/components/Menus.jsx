import React from "react";
import entrada from "../assets/img/platos/choritos.jpg";
import ceviche from "../assets/img/platos/ceviche2.jpg";
import arrozPato from "../assets/img/platos/arrozconpato.jpg";
import chicharronPescado from "../assets/img/platos/chicharron.jpg";
import leche from "../assets/img/platos/leche.jpg";
import menu from "../assets/img/menu.png";

const Tarjeta = ({ titulo, items, imagen, invertida = false }) => {
  // Asignar diferentes estilos de texto según si la tarjeta está invertida o no
  const textoClase = invertida ? "text-primary" : "text-teal-600";
  const descripcionClase = invertida ? "text-secondary" : "text-secondary";
  const precioClase = invertida ? "text-primary" : "text-primary";

  return (
    <div className={`flex flex-col lg:flex-row gap-8 items-center p-8 rounded-lg ${invertida ? 'flex-row-reverse' : ''}`}>
      {/* Imagen centrada */}
      <div className="flex justify-center lg:w-1/2">
        <img
          src={imagen}
          alt={titulo}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg"
        />
      </div>

      {/* Contenido */}
      <div className="lg:w-1/2">
        <h2 className={`text-2xl md:text-5xl font-bold w-full mb-4 fusion ${textoClase}`}>
          {titulo}
        </h2>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <span className={`text-xs md:text-lg mr-2 ${textoClase}`}>•</span>
              <span className={`md:font-bold text-1xl md:text-xl ${textoClase}`}>
                {item.nombre}
              </span>
              <span className={`md:font-bold text-sm md:text-xl ml-1 ${descripcionClase}`}>
                {item.descripcion}
              </span>
            </div>
            <div className="flex-grow mx-4 border-t border-dotted border-secondary md:block hidden"></div>
            <div className="flex items-baseline">
              <span className={`text-xs md:text-xl font-bold ${precioClase}`}>
                S/.
              </span>
              <span className={`text-lg md:text-xl md:font-bold ml-1 ${precioClase}`}>
                {item.precio}
              </span>
              <span className={`text-xs font-bold ml-1 ${precioClase}`}>.00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menus = () => {
  const secciones = [
    {
      titulo: "Entradas concheras",
      imagen: entrada,
      items: [
        { nombre: "Causa", descripcion: "acevichada", precio: "30" },
        { nombre: "Choritos", descripcion: "a la chalaca", precio: "15" },
        { nombre: "Papa", descripcion: "a la huancaina", precio: "18" },
        { nombre: "Chilcano", descripcion: "achorado", precio: "22" },
        { nombre: "Pulpo", descripcion: "al olivo", precio: "28" },
        { nombre: "Almejas", descripcion: "al limon (x8)", precio: "20" },
      ],
    },
    {
      titulo: "Ceviches",
      imagen: ceviche,
      items: [
        { nombre: "Ceviche", descripcion: "original", precio: "33" },
        { nombre: "Ceviche", descripcion: "mixto", precio: "35" },
        { nombre: "Ceviche", descripcion: "de corvina", precio: "37" },
        { nombre: "Ceviche", descripcion: "de c. negras ", precio: "40" },
        { nombre: "Ceviche", descripcion: "mellicero", precio: "40" },
        { nombre: "Tiradito", descripcion: "de pescado", precio: "30" },
        { nombre: "Festival", descripcion: "marino", precio: "65" },
        { nombre: "Trilogia", descripcion: "conchera", precio: "39" },
      ],
    },
    {
      titulo: "Criollos norteños",
      imagen: arrozPato,
      items: [
        { nombre: "Arroz", descripcion: "con pato", precio: "40" },
        { nombre: "Cabrito", descripcion: "(ESPECIALIDAD)", precio: "39" },
        { nombre: "Pato", descripcion: "guisado", precio: "35" },
        { nombre: "Cuy", descripcion: "frito", precio: "65" },
        { nombre: "Seco", descripcion: "de chabelo", precio: "32" },
        { nombre: "Lomo saltado", descripcion: "(l. fino)", precio: "45" },
      ],
    },
    {
      titulo: "Chicharrones",
      imagen: chicharronPescado,
      items: [
        { nombre: "Chicharrón", descripcion: "de pescado", precio: "32" },
        { nombre: "Chicharrón", descripcion: "mixto", precio: "34" },
        { nombre: "Chicharrón", descripcion: "de langostinos", precio: "36" },
        { nombre: "Chicharrón", descripcion: "de calamar", precio: "36" },
        { nombre: "Jalea", descripcion: "mixta", precio: "39" },
        { nombre: "Pescado", descripcion: "apanado", precio: "30" },
        { nombre: "Pulpo", descripcion: "a la parrilla", precio: "47" },
      ],
    },
    {
      titulo: "Leches de tigre",
      imagen: leche,
      items: [
        { nombre: "L. T.", descripcion: "ORIGINAL", precio: "12" },
        { nombre: "L. T.", descripcion: "al aji amarillo", precio: "15" },
        { nombre: "L. Pantera", descripcion: "(c. negras)", precio: "18" },
        { nombre: "L. T.", descripcion: "al rocoto", precio: "16" },
        { nombre: "L. T.", descripcion: "arriba 'ALIANZA'", precio: "22" },
        { nombre: "L. T.", descripcion: "y DALE 'U'", precio: "22" },
      ],
    },
  ];

  return (
    <section>
      <div className="p-4 md:p-8 max-w-7xl mx-auto rounded-lg">
        <h1 className="fusion text-4xl md:text-5xl lg:text-7xl font-bold text-center mt-6 md:mt-10 mb-4 md:mb-6 text-secondary">
          Nuestra Carta
        </h1>
      </div>

      {secciones.map((seccion, index) => (
        <div
          key={index}
          className={`p-4 md:p-8 max-w-7xl mx-auto rounded-lg ${index % 2 === 1 ? '' : ''}`}
        >
          <Tarjeta {...seccion} invertida={index % 2 === 1} />
        </div>
      ))}

      {/* Descarga de carta */}
      <div className="carta flex flex-col justify-center items-center bg-primary relative w-full py-10">
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
              className="w-[150px] md:w-[250px] transform rotate-[5deg] mt-4 m-5 md:mt-0"
              src={menu}
              alt="Menu"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default menus;
