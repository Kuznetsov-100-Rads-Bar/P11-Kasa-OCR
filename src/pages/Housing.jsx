import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../components/Collapse/Collapse.component";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";
import "./Housing.scss";

export default function Housing({ housings }) {
  const { id } = useParams();
  // le logement est chercher dans la liste
  const selectedHousing = housings.find((housing) => housing.id === id);
  // console.log(housings);

  if (!selectedHousing) {
    return <Navigate to="/" />
  }

  return (
    <div>
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
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <i key={index} className="housing-star-item">
                    <StarIcon
                      className="housing-star-icon"
                      fill={`${
                        index <= selectedHousing.rating
                          ? "#ff6060"
                          : "lightgray"
                      }`}
                    />
                  </i>
                );
              })}
            </ul>
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
