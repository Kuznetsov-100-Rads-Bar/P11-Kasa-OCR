import React, { useEffect } from 'react';
import "./style.scss";

import HousingCard from '../../components/HousingCard';

export default function Home({ housings, setCurrentLocation }) {

  useEffect(() => {
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
