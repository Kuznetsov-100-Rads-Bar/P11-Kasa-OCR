import React, { useState } from "react";
import ArrowRight from "../assets/icons/arrow-left.svg";
import ArrowLeft from "../assets/icons/arrow-right.svg";
import "./Gallery.scss";

export default function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  return (
    <div
      className="gallery"
      style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
    >
      {pictures.length > 1 ? (
        <>
          <img
            className="gallery-arrow left"
            src={ArrowLeft}
            alt="Image précédente"
            onClick={() => handlePicture("previous")}
          />
          <img
            className="gallery-arrow right"
            src={ArrowRight}
            alt="Image suivante"
            onClick={() => handlePicture("next")}
          />
        </>
      ) : null}
      <p className="gallery-count">
        {currentIndex + 1}/{pictures.length}
      </p>
    </div>
  );
}
