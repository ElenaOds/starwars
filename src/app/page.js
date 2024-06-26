import Link from 'next/link';

export default function Home() {
  return (
    <main>
     <section className="min-h-screen bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat bg-center">
    <div className="px-10 pt-28 lg:pt-40">
       <h1 className="text-amber-400 text-3xl mb-4">Starwars heros</h1> 
      <p className="text-white text-lg mb-4">
        Explore a galaxy far, far away with Star Wars </p>
        <Link href="/heroes" className="block text-blue-500 text-lg underline underline-offset-1 font-medium mb-4 hover:text-amber-400">
        HEROES
      </Link>
      <p className="text-white text-lg">May the Force be with you! </p>
    </div>
      </section>
    </main>
  );
}
