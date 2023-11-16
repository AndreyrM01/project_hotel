import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Avatar,
  Box,
  Heading,
} from '@chakra-ui/react';

const Comments = ({ name, quote, avatarSrc }) => {
  return (
    <Card maxW="40%" m="1" bgColor="quoteBgColor" borderRadius="30px" border="2px solid #799176">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar size="md" name={name} src={avatarSrc} />
            <Box>
              <Heading as="h3" color="textQuote" size="sm">
                {name}
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody pt="0">
        <Text color="textQuote">{quote}</Text>
      </CardBody>
    </Card>
  );
};

export default Comments;
