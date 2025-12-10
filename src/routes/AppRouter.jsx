import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Precios from "../pages/Precios";

export default function AppRouter() {
  return (
    <Routes>

      {/* Ruta principal */}
      <Route path="/" element={<Home />} />

      {/* Rutas secundarias */}
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/precios" element={<Precios />} />

      {/* Ruta para cualquier URL incorrecta */}
      <Route path="*" element={<Home />} />

    </Routes>
  );
}
