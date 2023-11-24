import { Box, Text, Heading } from '@chakra-ui/react';

const Attraction = ({title, text, imgSrc}) => {
  return (
    <>
      <Box color="#ffffff" mt="100px" ml="220px">
        <Heading w="355px" mb="30px">{title}</Heading>
        <Text w="424px" mb="30px">{text}</Text>
        <Box backgroundImage={imgSrc} 
        backgroundRepeat="no-repeat"
        w="700px" 
        h="310px"></Box>
      </Box>
    </>
  )
}

export default Attraction