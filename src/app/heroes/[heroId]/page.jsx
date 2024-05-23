import Link from 'next/link';

export default function HeroDetails({ params}) {
  
    return (
      <main>
        <h1>Hero details page {params.heroId}</h1>
        <Link href='/heroes' className="text-blue-500">Heroes</Link>
      </main>
    );
  }
  