import { Box, Heading, Text } from '@chakra-ui/react';

const PageHeading = ({ title, text }) => {
  return (
    <Box position="relative" top="100px" left="220px" w="500px" color="#ffffff">
      <Heading>{title}</Heading>
      <Text mt="20px">{text}</Text>
    </Box>
  );
};

export default PageHeading;
