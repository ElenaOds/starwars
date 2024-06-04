'use client'
import { useEffect, useState } from 'react';

import { getHeroes } from '../../lib/api';
import HeroesListItem from './HeroesListItem';
import Pagination from './Pagination';

export default function HeroesList() {
 const [items, setItems ] = useState([]);
 const [page, setPage] = useState(1);
 const [count, setCount] = useState();

     useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await getHeroes({page});
              setCount(response.count)
              setItems([...response.results]);
            } catch (error) {
              console.error(error);
            }
          };
        fetchData();
      }, [page]);


const handlePreviousPage = () => {
    if (page > 1) {
        setPage((prevPage) => prevPage - 1);
    }
};

const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
}


    return (
      <div className="flex flex-col w-full">
      <ul className="grid gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
       {items.map((item) => {
        return (
            <HeroesListItem key={item.id} item={item} />
         )
       })}  
      </ul>
        <Pagination page={page} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage} count={count}/>  
      </div>
    );
  } 
  