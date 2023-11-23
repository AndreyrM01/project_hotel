import Header from '@/app/componets/Header';
import PageHeading from '@/app/componets/PageHeading';
import Paragraph from '@/app/componets/Paragraph';
import headingInfo from '@/app/content/HeadingInfo';
import PageHeadingInfo from '@/app/content/PageHeading';
import pInfo from '@/app/content/ParagraphInfo';
import HotelsInfo from '@/app/content/HotelCardInfo';
import HotelsList from '@/app/componets/hotelcard/HotelList';

export default function Tokyo() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.Tokyo.imgSrc} />

      <PageHeading
      title={headingInfo.Tokyo.title}
      />

      <Paragraph
      title={pInfo.Destinie.title}
      info={pInfo.Destinie.info}
      />

      <HotelsList hotels={HotelsInfo.Tokyo}
      title={HotelsInfo.Tokyo.title}
      imgSrc={HotelsInfo.Tokyo.imgSrc}
      text={HotelsInfo.Tokyo.text}
      />
    </>
  );
}

