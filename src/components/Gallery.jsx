/* Importation de la bibliothèque React et du hook useState depuis la bibliothèque React. */
import React, { useState } from "react";
/* Importation du fichier arrow-left.svg depuis le dossier assets/icons. */
import ArrowRight from "../assets/icons/arrow-left.svg";
/* Importation du fichier arrow-left.svg depuis le dossier assets/icons. */
import ArrowLeft from "../assets/icons/arrow-right.svg";
/* Importation du fichier Gallery.scss. */
import "./Gallery.scss";

export default function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

/* Si l'image actuelle n'est pas la première image, passez à l'image précédente. 
Si l'image actuelle est la première image, passez à la dernière image.
 */
  const handlePicture = (action) => {
    switch (action) {
      case "previous":
        if (pictures[currentIndex] !== pictures[0]) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(pictures.length - 1);
        }
        break;
      case "next":
        if (pictures[currentIndex] !== pictures[pictures.length - 1]) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
        break;
      default:
        break;
    }
  };
/* Une fonction qui renvoie un div avec une image de fond. */
  return (
    <div
      className="gallery"
      style={{ backgroundImage: `url(${pictures[currentIndex]})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      {pictures.length > 1 ? (
        <>
          <img
            className="gallery-arrow left"
            src={ArrowLeft}
            alt="Diaporama précédent"
            onClick={() => handlePicture("previous")}
          />
          <img
            className="gallery-arrow right"
            src={ArrowRight}
            alt="Diaporama suivant"
            onClick={() => handlePicture("next")}
          />
          <p className="gallery-count">
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      ) : null}
    </div>
  );
}
