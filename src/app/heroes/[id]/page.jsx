import Link from 'next/link';
import HeroesDetailsData from '../../components/hero-details';

export default function HeroDetails({params}) {

  const { id } = params;
    return (
      <main>
        <h1>Hero details page </h1>
        <Link href='/heroes' className="text-blue-500">Back to heroes</Link>
        <HeroesDetailsData id={id}/>
      </main>
    );
  }
  