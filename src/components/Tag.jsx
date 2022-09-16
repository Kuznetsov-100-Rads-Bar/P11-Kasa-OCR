/* Importation de la bibliothèque React. */
import React from "react";
/* Importation de la feuille de style du composant. */
import "./Tag.scss";

/**
 * Tag est une fonction qui prend un titre comme accessoire et renvoie un div avec la balise de classe
 * et le titre comme texte.
 * @returns Un composant React.
 */
export default function Tag({ title }) {
  return <div className="tag">{title}</div>;
}
