import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

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
