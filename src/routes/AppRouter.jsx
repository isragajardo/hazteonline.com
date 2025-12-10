import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Precios from "../pages/Precios";
import Contacto from "../pages/Contacto";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/precios" element={<Precios />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
