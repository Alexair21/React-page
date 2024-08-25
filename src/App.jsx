import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; // Importa el nuevo componente
import Menus from './components/Menus';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Usa HomePage para la ruta principal */}
        <Route path="/menu" element={<Menus />} />
        <Route path="/nosotros" element={<HomePage />} /> {/* Redirige a la página principal que incluye "Nosotros" */}
        <Route path="/platillos" element={<HomePage />} /> {/* Redirige a la página principal que incluye "Platillos" */}
        <Route path="/delivery" element={<HomePage />} /> {/* Redirige a la página principal que incluye "Delivery" */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
