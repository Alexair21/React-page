import React from "react";
import "./Platillo.css";
import concha from "../assets/img/concha.png";
import arrozconpato from "../assets/img/arrozconpato.jpg";
import cabrito from "../assets/img/cabrito.jpg";
import ceviche2 from "../assets/img/ceviche2.jpg";


const Redes = () => {
  return (
    <section className="redes-section relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <p className="absolute top-10 text-6xl text-primary text-center">
        Platillos populares
      </p>

      <img
        className="absolute top-3 right-32 w-32"
        src={concha}
        alt=""
      />

      <div class="cards-container grid grid-cols-3 gap-3">
        <div class="card">
          <div class="image-container">
            <img
              class="cropped-image"
              src={arrozconpato}
              alt="Arroz con Pato"
            />
          </div>
          <div class="card-content">
            <h3 className="text-4xl">Arroz con Pato</h3>
            <p>Disfruta de un plato emblemático, arroz sazonado y pato jugoso, cocido a la perfección.</p>
            <h3 className="text-3xl">S/. 40.00</h3>
            <button class="card-button">Saber más</button>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="cropped-image"
              src={cabrito}
              alt="Cabrito norteño"
            />
          </div>
          <div class="card-content">
            <h3 className="text-4xl">Cabrito norteño</h3>
            <p><span className="font-bold">La especialidad de la casa.</span> Un clásico del norte del Perú, cabrito tierno adobado y cocido lentamente para resaltar su sabor.</p>
            <h3 className="text-3xl">S/. 39.00</h3>
            <button class="card-button">Saber más</button>
          </div>
        </div>
        <div class="card">
          <div class="image-container">
            <img
              class="cropped-image"
              src={ceviche2}
              alt="Ceviche"
            />
          </div>
          <div class="card-content">
            <h3 className="text-4xl">Ceviche</h3>
            <p>Fresco y vibrante, nuestro ceviche ofrece una auténtica experiencia peruana con cada bocado.</p>
            <h3 className="text-3xl">S/. 33.00</h3>
            <button class="card-button">Saber más</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redes;
