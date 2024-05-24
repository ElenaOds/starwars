'use client'

import { useState, useEffect } from 'react';
import { getHeroesById } from '../../lib/api';

export default function HeroesDetailsData({id}) {
    const [hero, setHero] = useState(null);

    
    useEffect(() => {
        const fetchHero = async () => {
          try {
            const heroData = await getHeroesById(id);
            setHero(heroData);
          } catch (error) {
            console.error('Error fetching hero:', error);
          }
        };
    
        if (id) {
          fetchHero();
        }
      }, [id]);
    
      if (!hero) {
        return <p>No hero is available</p>; 
      }

      console.log(hero)
    return (
        <div>
          Hero details data
          <h2>{hero.name}</h2>
          <p>Color of eyes: {hero.eye_color}</p>
          <p>Gender: {hero.gender}</p>
          <p>Height: {hero.height}</p>
          <p>films: {hero.films}</p>
          <p>Ships: {hero.starship}</p>
        </div>
    )
}