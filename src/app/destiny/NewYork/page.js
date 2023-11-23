import Header from '@/app/componets/Header';
import PageHeading from '@/app/componets/PageHeading';
import Paragraph from '@/app/componets/Paragraph';
import headingInfo from '@/app/content/HeadingInfo';
import PageHeadingInfo from '@/app/content/PageHeading';
import pInfo from '@/app/content/ParagraphInfo';

export default function NewYork() {
  return (
    <>
      <Header imgSrc={PageHeadingInfo.NewYork.imgSrc} />

      <PageHeading
      title={headingInfo.NewYork.title}
      />

      <Paragraph
      title={pInfo.Destinie.title}
      info={pInfo.Destinie.info}
      />
    </>
  );
}
