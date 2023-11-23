import Header from '@/app/componets/Header';
import PageHeading from '@/app/componets/PageHeading';
import Paragraph from '@/app/componets/Paragraph';
import headingInfo from '@/app/content/HeadingInfo';
import PageHeadingInfo from '@/app/content/PageHeading';
import pInfo from '@/app/content/ParagraphInfo';
import HotelsList from '@/app/componets/hotelcard/HotelList';
import HotelsInfo from '@/app/content/HotelCardInfo';

export default function Seoul() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Seoul.imgSrc} />

      <PageHeading
      title={headingInfo.Seoul.title}
      />

      <Paragraph
      title={pInfo.Destinie.title}
      info={pInfo.Destinie.info}
      />

      <HotelsList hotels={HotelsInfo.Seoul}
      title={HotelsInfo.Seoul.title}
      imgSrc={HotelsInfo.Seoul.imgSrc}
      text={HotelsInfo.Seoul.text}
      />
    </>
  );
}
