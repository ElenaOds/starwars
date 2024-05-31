'use client'
import Link from 'next/link';

export default function HeroesListItem({item}) {
    return (
        <li key={item.id} className="list-none bg-blue-500 rounded-md p-2 hover:bg-blue-400">
            <Link 
            href={`/heroes/${item.id}`}
             >
            <h3 className='text-lg font-semibold text-amber-400'>{item.name}</h3>
            <p className='text-base text-white'>Height: {item.height}</p>
            <p className='text-base text-white'>Gender: {item.gender}</p>
            </Link>
        </li>
    )
}