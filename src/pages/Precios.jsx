import React from "react";
import PriceCard from "../components/PriceCard";
import "../styles/Pricing.css";

export default function Precios() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">

        <h2 className="pricing-title">Planes y Precios</h2>
        <p className="pricing-subtitle">
          Soluciones accesibles para emprendedores, negocios y proyectos a medida.
        </p>

        <div className="pricing-grid">

          {/* Plan 1 */}
          <PriceCard
            title="Sitio Web Básico"
            price="$79.000 CLP"
            description="Ideal para portafolios, menús digitales o sitios de presentación."
            features={[
              "Sitio básico y profesional",
              "Diseño adaptado a tu marca",
              "Optimizado para móviles",
              "Entrega lista para publicar",
              "Soporte adicional → cotización"
            ]}
            cta="Hola! Me interesa el plan Sitio Web Básico."
          />

          {/* Plan 2 */}
          <PriceCard
            title="Sitio Web Negocio"
            price="$79.000 CLP"
            description="Para negocios que necesitan algo más completo y profesional."
            features={[
              "Todo del Plan Básico",
              "Hasta 3 secciones adicionales",
              "Formulario de contacto simple",
              "Diseño orientado a ventas",
              "Extras → cotización",
              "Soporte → cotización"
            ]}
            cta="Hola! Me interesa el Plan Negocio."
          />

          {/* Plan 3 */}
          <PriceCard
            title="Automatizaciones y Sistemas"
            price="Sujeto a Cotización"
            description="Soluciones avanzadas para optimizar procesos y conectar sistemas."
            features={[
              "APIs y automatizaciones",
              "Conexiones a SAP / MySQL / MongoDB",
              "Bots, scripts, integraciones",
              "Dashboards y paneles",
              "Desarrollo a medida"
            ]}
            cta="Hola! Quiero cotizar una automatización o sistema."
          />
        </div>
      </div>
    </section>
  );
}
