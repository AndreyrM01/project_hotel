import { Card, CardBody, Image, Heading, Text, Stack } from '@chakra-ui/react';

const HotelCard = ({imgSrc, title, text}) => {
  return (
    <Card maxW="md" mb="20px" h="40rem" bg="cardBgColor" color="#ffffff">
      <Image src={imgSrc} alt="Hotel" borderRadius="lg" objectFit="cover" h="20rem"/>
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text w="100%" display="flex" justifyContent="center" alignItems="center">{text}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HotelCard;
