'use client'

import { useState, useEffect } from 'react';
import { getHeroesById, getFilms, getShips } from '../../lib/api';

export default function HeroesDetailsData({id }) {
    const [hero, setHero] = useState(null);
    const [films, setFilms] = useState([]);
    const [ships, setShips] = useState([]);

    
    useEffect(() => {
        const fetchHero = async () => {
          try {
            const heroData = await getHeroesById(id);
            setHero(heroData);
          } catch (error) {
            console.error('Error fetching hero:', error);
          }
        };

        const fetchFilms = async () => {
          try {
            const {results} = await getFilms();
            setFilms([...results]);
          } catch (error) {
            console.error('Error fetching films:', error);
          }
        };

        
        const fetchShips = async () => {
          try {
              const shipData = await getShips();
              setShips(shipData);
   
          } catch (error) {
            console.error('Error fetching ships:', error);
          }
        };
  
          fetchHero();
          fetchFilms();
          fetchShips();
      }, [id]);
    
      if (!hero) {
        return <p>No hero is available</p>; 
      }


    return (
        <div>
          Hero details data
          <h2>{hero.name}</h2>
          <p>Color of eyes: {hero.eye_color}</p>
          <p>Gender: {hero.gender}</p>
          <p>Height: {hero.height}</p>
        <div><h3>Films</h3>
        {hero.films.map((filmId) => {
        const film = films.find((f) => f.id === filmId);
        return film ? (
          <li key={film.id}>
            <p>{film.title}</p>
          </li>
        ) : null; 
      })}
       
       
        </div>  
 
         <div><h3>Starships</h3>
           {hero.starships.map((shipId) => {
              const ship = ships.find((s) => s.id === shipId);
              return ship ? (
                <li key={ship.id}>
                  <p>{ship.name}</p>
                </li>
              ) : null; 
            })
           }
        </div>  
        </div>
    )
}