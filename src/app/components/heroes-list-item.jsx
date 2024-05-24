'use client'
import Link from 'next/link';

export default function HeroesListItem({item}) {
    return (
        <li key={item.id}>
            <Link 
            href={`/heroes/${item.id}`}
             >
            <p>name: {item.name}</p>
            </Link>
        </li>
    )
}