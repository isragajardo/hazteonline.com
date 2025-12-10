import React from "react";
import "../styles/Pricing.css";

export default function PriceCard({ title, price, description, features, cta }) {
  return (
    <div className="price-card">
      <h3 className="price-title">{title}</h3>

      <p className="price-amount">{price}</p>

      <p className="price-description">{description}</p>

      <ul className="price-features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <a
        href={`https://wa.me/56990603728?text=${encodeURIComponent(cta)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="price-btn"
      >
        Cotizar por WhatsApp
      </a>
    </div>
  );
}
