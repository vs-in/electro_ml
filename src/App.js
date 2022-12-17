import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Inicio } from './paginas/Inicio';
import Tienda from './paginas/Tienda';
import Proveedores from './paginas/Proveedores';
import Contacto from './paginas/Contacto';
import Somos from './paginas/Somos';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/proveedores' element={<Proveedores />} />
        <Route path='/quienes_somos' element={<Somos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
