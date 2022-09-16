/* Importation de la bibliothèque React. */
import React from "react";
/* Importation du composant Link depuis la bibliothèque react-router-dom. */
import { Link } from "react-router-dom";
/* Importation de la feuille de style du composant. */
import "./NotFound.scss";

/**
 * La fonction NotFound renvoie un div avec un titre, une description et un lien.
 * @returns Un composant React.
 */
export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="not-found-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
