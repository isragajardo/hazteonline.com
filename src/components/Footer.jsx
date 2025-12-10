import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Columna 1 — Descripción */}
        <div className="footer-col">
          <h4 className="footer-title">HazteOnline</h4>
          <p className="footer-description">
            Creación de sitios web modernos, portafolios, páginas para negocios y automatizaciones a medida.
          </p>
        </div>

        {/* Columna 2 — Navegación */}
        <div className="footer-col">
          <h4 className="footer-title">Navegación</h4>

          <Link to="/" className="footer-link">Inicio</Link>
          <Link to="/servicios" className="footer-link">Servicios</Link>
          <Link to="/precios" className="footer-link">Precios</Link>
        </div>

        {/* Columna 3 — Contacto */}
        <div className="footer-col">
          <h4 className="footer-title">Contacto</h4>

          <a
            href="https://wa.me/56990603728?text=Hola!%20Necesito%20hacer%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="footer-wsp-btn"
          >
            Contactar por WhatsApp
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HazteOnline — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
