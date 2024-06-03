import HeroesDetailsData from '../../components/HeroDetails';
import ButtonBack from '../../components/ButtonBack';

export default function HeroDetails({params}) {

  const { id } = params;

    return (
      <main>
        <section className="py-10 px-10">
          <ButtonBack/>
          <HeroesDetailsData id={id}/>
        </section>
      </main>
    );
  }