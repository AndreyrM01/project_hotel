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
import RoomInfo from '../componets/RoomDetails';
import SilvestreGallery from '../componets/SilvestreGallery';
import Amenities from '../componets/RoomAmenities';
import CommentSilvestre from '../componets/SilvestreComment';

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

      <Attraction
        title={AttractionInfo.NewYork.title}
        text={AttractionInfo.NewYork.text}
        imgSrc={AttractionInfo.NewYork.imgSrc}
      />
      <HotelAttraction
        text={HAttractionInfo.NewYork.text}
        imgSrc={HAttractionInfo.NewYork.imgSrc}
      />
      <HotelRoom/>
      <RoomInfo/>
      <SilvestreGallery/>
      <Amenities/>
      <CommentSilvestre/>
    </>
  );
}
