'use client'
import { useEffect, useState } from 'react';
import { getHeroes } from '../../lib/api';
import HeroesListItem from './heroes-list-item';

export default function HeroesList({ count }) {
 const [items, setItems ] = useState([]);
 const [page, setPage] = useState(1);

     useEffect(() => {
        const fetchData = async () => {
            try {
              const {results} = await getHeroes({ page });
              setItems([...results]);
        
            } catch (error) {
              console.error(error);
            }
          };
        fetchData({page});
      }, [page]);

const handlePreviousPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
};

const handleNextPage = () => {
    setPage(page + 1);
};


    return (
      <div>
        <p>HeroesList</p>
       {items.map((item) => {
        return (
            <HeroesListItem key={item.id} item={item}/>
         )
       })}  
            <button type='button' onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
            <button type='button' onClick={handleNextPage} disabled={count < page * 10}>Next</button>
      </div>
    );
  } 
  