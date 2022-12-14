/* Importation de la bibliothèque React. */
import React from "react";
/* Importation du composant Link depuis la bibliothèque react-router-dom. */
import { Link } from "react-router-dom";

/* Importation de l'image du logo. */
import Logo from "../../assets/images/logo.png";

/* Importation de la feuille de style pour le composant Navbar. */
import "./Navbar.scss";

/**
 * Il renvoie une barre de navigation avec un logo et deux liens.
 * @returns Un composant React.
 */
export default function Navbar({ currentLocation }) {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo de Kasa" className="logo" />
      <ul className="links">
        <li className="links-item">
{/* Un lien vers la page d'accueil. */}
          <Link
            to={"/"}
            className={`links-link ${
              /* Si l'état currentLocation est défini sur 'homepage'
              (lorsque l'utilisateur est sur la page d'accueil) qui ajoutent la classe active au nav-link */
              currentLocation === "homepage" ? "active" : null
            }`}
          >
            Accueil
          </Link>
        </li>
        <li className="links-item">
         {/* Un lien vers la page à propos. */}
          <Link
            to={"/about"}
            className={`links-link ${
              /* Si l'état currentLocation est défini sur 'aboutpage'
              (lorsque l'utilisateur est sur la page à propos) qui ajoutent la classe active au nav-link */
              currentLocation === "aboutpage" ? "active" : null
            }`}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
