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
        objectFit: "cover",
        objectPosition: "center",
      }}
    >
      <h2 className="housing-title">{title}</h2>
    </Link>
  );
}
