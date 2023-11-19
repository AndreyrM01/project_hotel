import { Box, Text, Heading} from '@chakra-ui/react';
import AttractionInfo from "../content/DestinyAttraction"

const Attraction = ({title, text}) => {
  return (
    <>
      <Box color="#ffffff" mt="100px" ml="220px">
        <Heading w="355px" mb="30px">{title}</Heading>
        <Text w="424px" mb="30px">{text}</Text>
        <Box backgroundImage={AttractionInfo.NewYork.imgSrc} 
        backgroundRepeat="no-repeat"
        w="700px" 
        h="310px"></Box>
      </Box>
    </>
  )
}

export default Attraction