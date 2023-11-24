import Header from '../componets/Header';
import CardsList from '../componets/cards/CardsList';
import DestinyInfo from '../content/Destiny';
import PageHeadingInfo from '../content/PageHeading';
import PageHeading from '../componets/PageHeading';
import headingInfo from '../content/HeadingInfo';
import Footer from '../componets/Footer';

export default function Destinies() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Home.imgSrc} />
      <PageHeading
        title={headingInfo.Destinies.title}
        text={headingInfo.Destinies.text}
      />
      <CardsList destinies={DestinyInfo.Destinies}
      enlace={DestinyInfo.Destinies.enlace}
      imgSrc={DestinyInfo.Destinies.imgSrc}
      key={DestinyInfo.Destinies.id}
      temperature={DestinyInfo.Destinies.temperature}
      rating={DestinyInfo.Destinies.rating}
      />
      <Footer/>
    </>
  );
}
