import React from "react";
import ServiceCard from "../components/ServiceCard";
import {
  ComputerDesktopIcon,
  Cog6ToothIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";
import "../styles/Services.css";

export default function Servicios() {
  return (
    <section className="services-section">
      <div className="services-container">

        <h2 className="services-title">Servicios que ofrecemos</h2>
        <p className="services-subtitle">
          Creamos soluciones digitales modernas para emprendedores, empresas y profesionales.
        </p>

        <div className="services-grid">

          <ServiceCard
            icon={ComputerDesktopIcon}
            title="Sitios Web Profesionales"
            description="Portafolios, menús digitales, landing pages, sitios corporativos y plataformas modernas diseñadas para destacar tu marca."
          />

          <ServiceCard
            icon={Cog6ToothIcon}
            title="Automatización de Procesos"
            description="Automatizamos tareas repetitivas, creamos scripts inteligentes, conectamos sistemas y optimizamos tu operación."
          />

          <ServiceCard
            icon={ServerStackIcon}
            title="Integraciones y Bases de Datos"
            description="Desarrollamos integraciones con APIs, dashboards empresariales, sistemas conectados a MySQL, MongoDB, SAP y más."
          />

        </div>
      </div>
    </section>
  );
}
