import HeroesDetailsData from '../../components/hero-details';
import ButtonBack from '../../components/button-back';

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