import React from "react";
import "../styles/Services.css";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon className="icon-size" />
      </div>

      <h3 className="service-title">{title}</h3>

      <p className="service-description">
        {description}
      </p>
    </div>
  );
}
