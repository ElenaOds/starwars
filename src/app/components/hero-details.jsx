'use client'
import React from 'react';

import { useState, useEffect } from 'react';
import { getHeroesById, getFilms, getShips } from '../../lib/api';
import Flow from './flow';

export default function HeroesDetailsData({id}) {
    const [hero, setHero] = useState(null);
    const [films, setFilms] = useState([]);
    const [starships, setStarships] = useState([]);

    
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

          const fetchStarships = async () => {
          try {
              const shipData = await getShips();
              setStarships(shipData);
   
          } catch (error) {
            console.error('Error fetching ships:', error);
          }
        };
  
          fetchHero();
          fetchFilms();
          fetchStarships();
      }, [id]);
 
     
      if (!hero) {
        return <p>No hero is available</p>; 
      }

      //Getting films which correspond to specific hero
      //each film from the hero object is compared with films array objects
      //returning films which ids match to films ids in the hero object
      const selectedFilms = hero.films.map((filmId) => {
        const film = films.find((f) => f.id === filmId);
        return film ? film : 'Unknown film';
      })

      //same login with starships
      const selectedShips = hero.starships.map((shipId) => {
        const starship = starships.find((s) => s.id === shipId);
        return starship ? starship : 'Unknown ship';
      })
     


    return (
        <div className="w-full flex justify-center">
        <Flow hero={hero} films={selectedFilms} starships={selectedShips}/>  
        </div>
    )
}