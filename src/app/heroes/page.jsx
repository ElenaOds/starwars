import HeroesList from '../components/HeroesList';

export const metadata = {
    title: "Star Wars heroes"
  };

export default function Heores() {
 
    return (
      <main>
        <section className="min-h-screen py-10 px-10">
        <h2 className="text-xl text-white mb-8">Travel through the galaxy with below heroes</h2>
        <HeroesList/>
        </section>
      </main>
    );
  }
  