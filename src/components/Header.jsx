import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import logo from "../assets/logo-letras-blancas.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "../styles/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="header-inner">

        {/* Logo */}
        <Link to="/" className="header-logo">
          <img src={logo} alt="HazteOnline" />
        </Link>

        {/* Menu Desktop */}
        <nav className="header-menu">

          <Link to="/" className="header-link">Inicio</Link>
          <Link to="/servicios" className="header-link">Servicios</Link>
          <Link to="/precios" className="header-link">Precios</Link>

          {/* Submenú */}
          <div
            className="header-submenu"
            onMouseEnter={() => setIsSubOpen(true)}
            onMouseLeave={() => setIsSubOpen(false)}
          >
            <div className="flex items-center gap-1 header-link cursor-pointer hover:text-accent">
              Ejemplos
              <ChevronDownIcon className="w-4 h-4" />
            </div>

            {isSubOpen && (
              <div className="header-submenu-panel">
                <a
                  href="https://isracode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header-submenu-item"
                >
                  Portafolio: isracode.com
                </a>
              </div>
            )}
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/56990603728"
            className="header-wsp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <ThemeToggleButton />

        </nav>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn md:hidden"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="mobile-panel md:hidden">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            Inicio
          </Link>

          <Link
            to="/servicios"
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            Servicios
          </Link>

          <Link
            to="/precios"
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            Precios
          </Link>

          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="mobile-link"
          >
            Contacto
          </Link>

          <details>
            <summary className="mobile-link">Ejemplos</summary>
            <a
              href="https://isracode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-link submenu pl-4"
            >
              Portafolio: isracode.com
            </a>
          </details>

          <a
            href="https://wa.me/56990603728"
            target="_blank"
            rel="noopener noreferrer"
            className="header-wsp-btn w-full text-center mt-4"
          >
            WhatsApp
          </a>

          <div className="pt-4 flex justify-center">
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </header>
  );
}
