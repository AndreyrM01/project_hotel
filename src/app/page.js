import Header from './componets/Header';
import Paragraph from './componets/Paragraph';
import CommentsList from './componets/comments/CommentsList';
import comments from './content/Comments';
import PageHeading from './componets/PageHeading';
import PageHeadingInfo from './content/PageHeading';
import pInfo from './content/ParagraphInfo';
import headingInfo from './content/HeadingInfo';
import TabsDandH from './componets/HomeTabs';
import Footer from './componets/Footer';

export default function Home() {
  return (
    <>
      <Header
      imgSrc={PageHeadingInfo.Home.imgSrc}
      />
      <PageHeading
      title={headingInfo.Home.title}
      text={headingInfo.Home.text}
      />
      <TabsDandH/>
      <Paragraph
      title={pInfo.Home.title}
      info={pInfo.Home.info}
      />
      <CommentsList comments={comments.costumers} />
      <Footer/>
    </>
  );
}
