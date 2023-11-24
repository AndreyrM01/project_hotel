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

export default function Oslo() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Oslo.imgSrc} />

      <PageHeading
      title={headingInfo.Oslo.title}
      />

      <Paragraph
      title={pInfo.Destinie.title}
      info={pInfo.Destinie.info}
      />

      <HotelsList hotels={HotelsInfo.Oslo}
      title={HotelsInfo.Oslo.title}
      imgSrc={HotelsInfo.Oslo.imgSrc}
      text={HotelsInfo.Oslo.text}
      />
      <Attraction
        title={AttractionInfo.Norway.title}
        text={AttractionInfo.Norway.text}
        imgSrc={AttractionInfo.Norway.imgSrc}
      />
      <Footer/>
    </>
  );
}
