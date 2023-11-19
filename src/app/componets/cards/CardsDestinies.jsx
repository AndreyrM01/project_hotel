import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import { FaBookmark, FaStar } from 'react-icons/fa';

const CardsD = ({ name, temperature, rating, imgSrc }) => {
  return (
    <>
      <Card
       border="2px solid #799176"
       w="300px"
       height="450px"
       backgroundColor="quoteBgColor"
       color="textQuote"
       borderRadius="5px"
       >
        <CardHeader pos="relative" left="20px">
          <Flex>
            <Box  pos="relative" top="20px">
              <Heading size="sm">{name}</Heading>
              <Text as="span">{temperature}</Text>
            </Box>
           <Box pos="relative" top="30px" left="25px">
           <FaBookmark
              color="#ffffff"
              style={{ width: '80px', height: '20px' }}
            />
           </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <Box
            backgroundImage={imgSrc}
            w="225px"
            h="200px"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            mr="auto"
            ml="auto"
            position="relative"
            top="30px"
            right="2.5px"
            borderRadius="10px"
          ></Box>
        </CardBody>
        <CardFooter pos="relative" left="15px">
          <Text pos="relative" bottom="40px" left="20px">Rating</Text>
          <FaStar
            style={{ width: '50px', position: 'relative', right:'50px', bottom:'10px' }}
            color="#A2B5A0"
          />
          <Text as="span" pos="relative" bottom="12px" right="60px" fontSize="16px">{rating}</Text>
          <Button
            pos="relative"
            bottom="20px"
            w="80px"
            h="30px"
            fontSize="10px"
            backgroundColor="#354834"
            borderRadius="10px"
            border="2px solid #799176"
            color="#ffffff"
          >
            Explore
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardsD;
