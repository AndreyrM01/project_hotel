import { Box, Heading, Text } from '@chakra-ui/react';

const Paragraph = ({ title, info} ) =>{
  return(
    <>
      <Box color="#ffffff" my="70px" w="90%" pos="relative" left="80px">
        <Heading>
          {title}
        </Heading>
        <Text>
          {info}
        </Text>
      </Box>
    </>
  )
};

export default Paragraph;