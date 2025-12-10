// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-workspace.webp";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-container">

      {/* Fondo */}
      <img
        src={heroImg}
        className="hero-background"
        alt="Diseño y desarrollo web"
      />
      <div className="hero-overlay" />

      {/* Contenido */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-pretitle">
            Páginas Web · Portafolios · Automatización
          </p>

          <h1 className="hero-title">
            Creamos sitios web modernos y automatizamos tu negocio
          </h1>

          <p className="hero-subtitle">
            Portafolios profesionales, menús digitales, páginas corporativas,
            sistemas conectados a bases de datos y automatizaciones que simplifican tu operación.
          </p>

          <div className="hero-buttons">
            <a href="/servicios" className="hero-btn-primary">
              Ver Servicios
            </a>

            <a  href="https://wa.me/56990603728?text=Hola!%20Quiero%20hablar%20con%20un%20especialista."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary">
              Hablar con un especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
