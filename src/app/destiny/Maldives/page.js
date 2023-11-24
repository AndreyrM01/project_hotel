import Header from '@/app/componets/Header';
import PageHeading from '@/app/componets/PageHeading';
import Paragraph from '@/app/componets/Paragraph';
import headingInfo from '@/app/content/HeadingInfo';
import PageHeadingInfo from '@/app/content/PageHeading';
import pInfo from '@/app/content/ParagraphInfo';
import HotelsList from '@/app/componets/hotelcard/HotelList';
import HotelsInfo from '@/app/content/HotelCardInfo';
import Attraction from '@/app/componets/DestinyAttraction';
import AttractionInfo from '@/app/content/DestinyAttractionInfo';
import Footer from '@/app/componets/Footer';

export default function Maldives() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Maldives.imgSrc} />

      <PageHeading
      title={headingInfo.Maldives.title}
      />

      <Paragraph
      title={pInfo.Destinie.title}
      info={pInfo.Destinie.info}
      />

      <HotelsList hotels={HotelsInfo.Maldives}
      title={HotelsInfo.Maldives.title}
      imgSrc={HotelsInfo.Maldives.imgSrc}
      text={HotelsInfo.Maldives.text}
      />
      <Attraction
        title={AttractionInfo.Maldives.title}
        text={AttractionInfo.Maldives.text}
        imgSrc={AttractionInfo.Maldives.imgSrc}
      />
      <Footer/>
    </>
  );
}
