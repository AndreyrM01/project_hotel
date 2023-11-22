import Header from '../componets/Header';
import CardsList from '../componets/cards/CardsList';
import DestinyInfo from '../content/Destiny';
import PageHeadingInfo from '../content/PageHeading';
import PageHeading from '../componets/PageHeading';
import headingInfo from '../content/HeadingInfo';
import Attraction from "../componets/DestinyAttraction"
import AttractionInfo from "../content/DestinyAttraction"
import HotelAttraction from "../componets/HotelAttraction"
import HAttractionInfo from "../content/HotelAttraction"
import HotelRoom from '../componets/HotelRooms';
import HRoomsInfo from "../content/HotelRoomsInfo"


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
        title={AttractionInfo.NewYork.title}
        text={AttractionInfo.NewYork.text}
        imgSrc={AttractionInfo.NewYork.imgSrc}
      />

      <HotelAttraction
        text={HAttractionInfo.NewYork.text}
        imgSrc={HAttractionInfo.NewYork.imgSrc}
      />

      <HotelRoom 
        room1={HRoomsInfo.NewYork.room1}
        room2={HRoomsInfo.NewYork.room2}
        room3={HRoomsInfo.NewYork.room3}
        room4={HRoomsInfo.NewYork.room4} 
      />
    </>
  );
}
