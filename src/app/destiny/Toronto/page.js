import Header from '@/app/componets/Header';
import PageHeading from '@/app/componets/PageHeading';
import Paragraph from '@/app/componets/Paragraph';
import headingInfo from '@/app/content/HeadingInfo';
import PageHeadingInfo from '@/app/content/PageHeading';
import pInfo from '@/app/content/ParagraphInfo';
import HotelsInfo from '@/app/content/HotelCardInfo';
import HotelsList from '@/app/componets/hotelcard/HotelList';
import Attraction from '@/app/componets/DestinyAttraction';
import AttractionInfo from '@/app/content/DestinyAttractionInfo';
import Footer from '@/app/componets/Footer';

export default function Toronto() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Toronto.imgSrc} />

      <PageHeading
      title={headingInfo.Toronto.title}
      />

      <Paragraph
      title={pInfo.Destinie.title}
      info={pInfo.Destinie.info}
      />

      <HotelsList hotels={HotelsInfo.Toronto}
      title={HotelsInfo.Toronto.title}
      imgSrc={HotelsInfo.Toronto.imgSrc}
      text={HotelsInfo.Toronto.text}
      />
      <Attraction
        title={AttractionInfo.Canada.title}
        text={AttractionInfo.Canada.text}
        imgSrc={AttractionInfo.Canada.imgSrc}
      />
      <Footer/>
    </>
  );
}
