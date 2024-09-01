import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage'; // Importa el nuevo componente
import Menus from './components/Menus';
import Galeria from './components/Galeria';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Usa HomePage para la ruta principal */}
        <Route path="/menu" element={<Menus />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
