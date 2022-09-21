/* Importation de la bibliothèque React. */
import React from "react";
/* Importation des fonctions useParams et Navigate depuis la bibliothèque react-router-dom. */
import { useParams, Navigate } from "react-router-dom";
/* Importation du composant Collapse à partir du fichier Collapse.component.js. */
import Collapse from "../../components/Collapse/Collapse.component";
/* Importation du composant Gallery à partir du fichier Gallery.component.js. */
import Gallery from "../../components/Gallery/Gallery";
/* Importation du composant Tag à partir du fichier Tag.component.js. */
import Tag from "../../components/Tag/Tag";
/* Importation du fichier svg en tant que composant React. */
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
/* Importation du fichier CSS pour le composant. */
import "./Housing.scss";

export default function Housing({ housings }) {
  const { id } = useParams();
  // le logement est chercher dans la liste
  const selectedHousing = housings.find((housing) => housing.id === id);
  // console.log(housings);
  // Si le logement n'est pas trouvé, l'utilisateur est renvoyé sur la page d'accueil
  if (!selectedHousing && housings.length > 0) {
    return <Navigate to="/404" />;
  }

  return selectedHousing === undefined ? (
    <div className="container">Loading...</div>
  ) : (
    <div className="container">
      <div className="housing-header">
        <Gallery pictures={selectedHousing.pictures} />
      </div>
      <div className="housing-body">
        <div className="housing-wrapper">
          <div className="housing-left">
            <h2 className="housing-title">{selectedHousing.title}</h2>
            <p className="housing-location">{selectedHousing.location}</p>
            <div className="housing-tags">
              {selectedHousing.tags.map((tag, index) => {
                return <Tag key={index} title={tag} />;
              })}
            </div>
          </div>
          <div className="housing-right">
            <ul className="housing-stars">
              {/* Création d'une liste de 5 étoiles. */}
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <i key={index} className="housing-star-item">
                    <StarIcon
                      className="housing-star-icon"
                      fill={`${index <= selectedHousing.rating
                          ? "#ff6060"
                          : "lightgray"
                        }`}
                    />
                  </i>
                );
              })}
            </ul>
            {/* Affichage du nom et de l'image de l'hôte. */}
            <div className="housing-host">
              <p className="housing-host-name">
                {selectedHousing.host.name.split(" ")[0]}
                <br />
                {selectedHousing.host.name.split(" ")[1]}
              </p>
              <img
                src={selectedHousing.host.picture}
                alt="Hôte du logement"
                className="housing-host-picture"
              />
            </div>
          </div>
        </div>
        <div className="housing-collapses">
          <Collapse
            key="housing-description"
            title="Description"
            type="text"
            content={selectedHousing.description}
          />
          <Collapse
            key="housing-equipments"
            title="Equipements"
            type="list"
            content={selectedHousing.equipments}
          />
        </div>
      </div>
    </div>
  );
}
