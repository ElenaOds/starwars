import Link from 'next/link';

export const metadata = {
    title: "Star Wars heroes"
  };

export default function Heores() {
    return (
      <main>
        <h1>Heroes page</h1>
        <Link href='/' className="text-blue-500">Home</Link>
        
        {/* <Link href={`/heroes${params.heroId}`} className="text-blue-500">Hero Id</Link> */}
      </main>
    );
  }
  