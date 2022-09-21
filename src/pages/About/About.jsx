/* Importation du crochet useEffect à partir de la bibliothèque React. */
import React, { useEffect } from "react";
/* Importation du composant Collapse à partir du fichier Collapse.component.js. */
import Collapse from "../../components/Collapse/Collapse.component";
/* Importation de la feuille de style pour la page À propos. */
import "./About.scss";

/**
 * C'est une fonction qui renvoie un div qui contient une div avec une classe about-image et une div avec une
 * classe de collapses. Le div avec une classe de replis contient un composant Collapse pour chaque élément 
 * du tableau aboutCollapseContent.
 * @returns Le composant Collapse est renvoyé.
 */
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
    /* Une Fonction transmise en tant qu'accessoire au composant About. Il est utilisé pour mettre, 
    pour définir la location actuel de l'utilisateur. */
    setCurrentLocation("aboutpage");
  }, [setCurrentLocation]);

  return (
    <div className="container">
      <div className="about-image" />
      <div className="collapses">
        {/* <Collapse2 title="test" content={<p>My content</p>}/> */}
        {/* Une boucle qui parcourt le tableau d'objets et renvoie un composant Collapse pour chaque objet dans le tableau. */}
        {aboutCollapseContent.map((element, key) => {
         /* Renvoi d'un composant Collapse avec la clé des objets, le type, le titre, et le contenu. */
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
