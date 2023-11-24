import Header from '@/app/componets/Header';
import PageHeading from '@/app/componets/PageHeading';
import Paragraph from '@/app/componets/Paragraph';
import HotelsList from '@/app/componets/hotelcard/HotelList';
import headingInfo from '@/app/content/HeadingInfo';
import HotelsInfo from '@/app/content/HotelCardInfo';
import PageHeadingInfo from '@/app/content/PageHeading';
import pInfo from '@/app/content/ParagraphInfo';
import Attraction from '@/app/componets/DestinyAttraction';
import AttractionInfo from '@/app/content/DestinyAttractionInfo';
import Footer from '@/app/componets/Footer';

export default function Berna() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Berna.imgSrc} />

      <PageHeading
      title={headingInfo.Berna.title}
      />

      <Paragraph
      title={pInfo.Destinie.title}
      info={pInfo.Destinie.info}
      />

      <HotelsList hotels={HotelsInfo.Berna}
      title={HotelsInfo.Berna.title}
      imgSrc={HotelsInfo.Berna.imgSrc}
      text={HotelsInfo.Berna.text}
      />
      <Attraction
        title={AttractionInfo.Switzerland.title}
        text={AttractionInfo.Switzerland.text}
        imgSrc={AttractionInfo.Switzerland.imgSrc}
      />
      <Footer/>
    </>
  );
}
