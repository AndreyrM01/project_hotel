import { Box } from '@chakra-ui/react';
import Comments from './Comments';
import SectionHeading from '../SectionHeading';

export default function CommentsList({ comments }) {
  return (
    <>
      {comments?.length > 0 ? (
        <Box mb="16">
          <SectionHeading title="What people say" />
          <Box display="flex" flexWrap="wrap" ml="20%">
            {comments.map(({ id, name, quote, avatarSrc }) => {
              return (
                <Comments
                  key={id}
                  name={name}
                  quote={quote}
                  avatarSrc={avatarSrc}
                />
              );
            })}
          </Box>
        </Box>
      ) : null}
    </>
  );
}
