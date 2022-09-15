import React from "react";
import { Link } from "react-router-dom";

import "./HousingCard.scss";

export default function HousingCard({ data: { id, cover, title } }) {
  return (
    <Link
      to={`/logement/${id}`}
      className="housing-card"
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ), url(${cover})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h2 className="housing-card-title">{title}</h2>
    </Link>
  );
}
