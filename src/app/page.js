import Header from './componets/Header';
import Paragraph from './componets/Paragraph';
import pInfo from './content/ParagraphInfo';
import CommentsList from './componets/comments/CommentsList';
import comments from './content/Comments';

export default function Home() {
  return (
    <>
      <Header/>
      <Paragraph
      title={pInfo.Home.title}
      info={pInfo.Home.info}
      />
      <CommentsList comments={comments.costumers} />
    </>
  );
}
