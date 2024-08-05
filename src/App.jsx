import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Platillos from './components/Platillos';
import Delivery from './components/Delivery';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Nosotros />
      <Platillos/>
      <Delivery />
      <Footer />
    </div>
  );
}

export default App
