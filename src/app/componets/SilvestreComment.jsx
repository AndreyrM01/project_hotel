import { Card, Flex, Avatar, Heading, Text } from '@chakra-ui/react';

const CommentSilvestre = () => {
  return (
    <Card
      w="100%" h="395px"
      bgImage="url('/images/reviews-background.jpg')"
      bgSize="cover"
    >
      <Flex direction='column' h='100%' p='4' bg='rgba(0, 0, 0, 0.5)'>
        <Heading color='white' textAlign="center" mb="25px">
          What people are saying
        </Heading>
        <Flex justifyContent="center" alignItems="center" gap='4'>
          <Avatar src='/images/silvestre-review1.png' />
          <Text color='white' fontSize="24px" width="800px">
            "I'm a vegetarian and was pleasantly surprised by the variety of
            options available at Silvestre Restaurant. The salads were so fresh
            and flavorful. I'll definitely be back!" - Emily G.
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CommentSilvestre;
