import React, { useEffect } from "react";
import Collapse from "../components/Collapse/Collapse.component";
import "./About.scss";
import Image from "../assets/images/a-propos.png";

export default function About({ setCurrentLocation }) {
  const aboutCollapseContent = [
    {
      type: "text",
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      type: "text",
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      type: "text",
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      type: "text",
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  useEffect(() => {
    setCurrentLocation("aboutpage");
  }, [setCurrentLocation]);

  return (
    <div>
      <div className="about-image" />
      <div className="collapses">
        {aboutCollapseContent.map((element, key) => {
          return (
            <Collapse
              key={key}
              type={element.type}
              title={element.title}
              content={element.content}
            />
          );
        })}
      </div>
    </div>
  );
}
