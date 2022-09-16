/* Importation de la bibliothèque React. */
import React from "react";
/* Importation du composant Link depuis la bibliothèque react-router-dom. */
import { Link } from "react-router-dom";
/* Importation de la feuille de style du composant. */
import "./HousingCard.scss";

/**
 * Cette fonction prend un objet de données et renvoie un lien vers une carte de logement avec une image d'arrière-plan,
 * un titre et un lien vers l'identifiant de la carte de logement.
 */
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
