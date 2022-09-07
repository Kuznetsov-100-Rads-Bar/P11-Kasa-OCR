import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function Housing({ housings }) {
  const { id } = useParams();
  const navigate = useNavigate();
  // le logement est chercher dans la liste
  const selectedHousing = housings.find((housing) => housing.id === id);
  // console.log(housings);

  useEffect(() => {
    // si le logement n'existe pas l'utilisateur est envoyé sur la page d'accueil
    if (!selectedHousing) {
      navigate("/");
    }
    //console.log(selectedHousing);
  });

  return (
    <div>
      <Gallery pictures={selectedHousing.pictures} />
    </div>
  );
}
