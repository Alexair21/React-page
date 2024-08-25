import React from "react";
import entrada from "../assets/img/platos/choritos.jpg";

const Tarjeta = ({ titulo, precio, items, imagen }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-lg ">
      {/* Contenido a la izquierda */}
      <div>
        <h2 className="text-5xl font-bold text-primary mb-4 fusion text-center">{titulo}</h2>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <div className="flex items-center">
              <span className="text-teal-600 text-lg mr-2">•</span> {/* Punto al inicio */}
              <span className="text-teal-600 font-bold text-lg md:text-xl">{item.nombre}</span>
              <span className="text-secondary ml-2">{item.descripcion}</span>
            </div>
            <span className="text-teal-600 font-bold text-lg md:text-xl">{item.precio}</span>
          </div>
        ))}
      </div>

      {/* Imagen centrada */}
      <div className="flex justify-center">
        <img src={imagen} alt={titulo} className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

const Menus = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl max-h-full mx-auto rounded-lg">
      <h1 className="fusion text-4xl md:text-5xl lg:text-7xl font-bold text-center mt-6 md:mt-10 mb-4 md:mb-6 text-secondary">Nuestra Carta</h1>
      <Tarjeta
        titulo="Entradas concheras"
        imagen={entrada}
        items={[
          { nombre: "Causa", descripcion: "acevichada ...............................", precio: "S/. 30.00" },
          { nombre: "Choritos", descripcion: "a la chalaca .........................", precio: "S/. 15.00" },
          { nombre: "Papa", descripcion: "a la huancaina ...........................", precio: "S/. 18.00" },
          { nombre: "Chilcano", descripcion: "achorado .............................", precio: "S/. 22.00" },
          { nombre: "Pulpo", descripcion: "al olivo .....................................", precio: "S/. 28.00" },
          { nombre: "Almejas", descripcion: "al limon (8 unid.) ..................", precio: "S/. 20.00" }
        ]}
      />
    </div>
  );
};

export default Menus;
