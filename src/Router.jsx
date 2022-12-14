/* Importation du hook useState depuis la bibliothèque React. */
import React, { useState, useEffect } from "react";
/* Importation des composants BrowserRouter, Routes et Route à partir de la bibliothèque react-router-dom. */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Importation du composant Home à partir du dossier pages. */
import Home from "./pages/Home/Home";
/* Importation du composant NotFound à partir du dossier pages. */
import NotFound from "./pages/NotFound/NotFound";
/* Importation du composant Navbar à partir du dossier des composants. */
import Navbar from "./components/Navbar/Navbar";
/* Importation du composant Footer à partir du dossier des composants. */
import Footer from "./components/Footer/Footer";
/* Importation du composant À propos du dossier pages. */
import About from "./pages/About/About";
/* Importation du fichier data.json dans le fichier AppRouter.js. */
/* Importation du composant Logement à partir du dossier pages. */
import Housing from "./pages/Housing/Housing";

export default function AppRouter() {
  /* Un hook qui nous permet d'utiliser l'état dans un composant fonctionnel. */
  const [currentLocation, setCurrentLocation] = useState("");
  const [data, setData] = useState([]);

/* Il récupère les données du fichier json. */
  useEffect(() => {
    /* useEffect : 
    - si simplement un [] = le code s'exécute une seule fois au chargement de la page
    - si un [data] (si tu met à jour tes data par exemple]) = le s'exécute a chaque fois que la variable data est mis à jour. */
    fetch("/data.json")
      .then((resp) => resp.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <Router>
      <Navbar currentLocation={currentLocation} />
      <div className="page-wrapper">
        <Routes>
          <Route path="/logement/:id" element={<Housing housings={data} />} />
{/* Un itinéraire qui sera affiché lorsque l'utilisateur sera sur la page /about page. */}
          <Route
            path="/about"
            element={<About setCurrentLocation={setCurrentLocation} />}
          />
{/* Un itinéraire qui sera affiché lorsque l'utilisateur sera sur la page principal /. */}
          <Route
            exact
            path="/"
            element={
              <Home housings={data} setCurrentLocation={setCurrentLocation} />
            }
          />
          {/* C'est une route fourre-tout. Il captera toute route qui ne correspond à aucune autre route. */}
          {/* l'étoile ça prend toutes les pages qui n'existe pas */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
