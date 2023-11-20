import { Card, Text, Box, CardBody} from '@chakra-ui/react';
import HAttractionInfo from "../content/HotelAttraction"

const HotelAttraction = ({text}) => {
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        backgroundColor="quoteBgColor"
        color="#ffffff"
        w="730px"
        border="2px solid #799176"
        ml="220px"
        mt="100px"
        mb="100px"
        borderRadius="30px"
      >
        <Box backgroundImage={HAttractionInfo.NewYork.imgSrc} 
          backgroundRepeat="no-repeat"
          w="600px"
          h="352px"
          ml="-1px"
          mt="-1px">
        </Box>
          <CardBody>
            <Text w="300px" ml="-214px" mt="50px">{text}</Text>
          </CardBody>
      </Card>
    </>
  )
}

export default HotelAttraction