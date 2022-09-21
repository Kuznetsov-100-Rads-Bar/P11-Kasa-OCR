/* Importing the useEffect hook from the React library. */
import React, { useEffect } from 'react';
/* Importing the style.scss file. */
import "./Home.scss";

/* Importing the HousingCard component from the components folder. */
import HousingCard from '../../components/HousingCard/HousingCard';

/**
 * Home est une fonction qui renvoie un div avec un en-tête et une section principale. L'en-tête contient une div
 * avec un h1. La section principale contient une section avec une liste des composants de la HousingCard.
 * @returns Un tableau d'objets.
 */
export default function Home({ housings, setCurrentLocation }) {

  useEffect(() => {
    /* Définition de l'emplacement actuel sur la page d'accueil. */
    setCurrentLocation('homepage');
  }, [setCurrentLocation])

  return (
    <div className='container'>
      <header>
        <div className='hero-banner'>
          <h1 className='hero-banner-title'>
            <span>Chez vous, </span><span>partout et ailleurs</span></h1>
        </div>
      </header>
      <main className='main'>
        <section className="housings">
          {housings.map((housing) => {
            return (
              <HousingCard key={housing.id} data={housing} />
            )
          })}
        </section>
      </main>
    </div>
  )
}
