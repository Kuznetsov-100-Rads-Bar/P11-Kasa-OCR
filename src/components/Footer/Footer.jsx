/* Importation de la bibliothèque React. */
import React from 'react'
/* Importation du fichier image à partir du dossier assets. */
import logoKasa from "../../assets/images/footer-logo.png"
/* Importation de la feuille de style du composant. */
import "./Footer.scss"

/**
 * Cette fonction renvoie un élément de pied de page avec un logo et un texte de copyright.
 * @returns Un pied de page avec un logo et du texte.
 */
export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-logo">
              <img src={logoKasa} alt="Logo Kasa" className="footer-logo-content" />
        </div>
          <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
  )
}
