import React from 'react';
import Hero from './Hero';
import Nosotros from './Nosotros';
import Platillos from './Platillos';
import Delivery from './Delivery';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Nosotros />
      <Platillos />
      <Delivery />
    </div>
  );
};

export default HomePage;
