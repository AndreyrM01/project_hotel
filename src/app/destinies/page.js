import Header from '../componets/Header';
import CardsList from '../componets/cards/CardsList';
import DestinyInfo from '../content/Destiny';
import PageHeadingInfo from '../content/PageHeading';
import PageHeading from '../componets/PageHeading';
import headingInfo from '../content/HeadingInfo';
import Attraction from "../componets/DestinyAttraction"
import AttractionInfo from "../content/DestinyAttraction"

export default function Destinies() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Home.imgSrc} />
      <PageHeading
        title={headingInfo.Destinies.title}
        text={headingInfo.Destinies.text}
      />
      <CardsList destinies={DestinyInfo.Destinies} />
      <Attraction
        title = {AttractionInfo.NewYork.title}
        text = {AttractionInfo.NewYork.text}
        imgSrc = {AttractionInfo.NewYork.imgSrc}
      />
    </>
  );
}
