import { Box, Flex, Text, Tooltip, Heading } from '@chakra-ui/react';
import { FaTv, FaSnowflake, FaPhone, FaWifi } from 'react-icons/fa';

const Amenities = () => {
  return (
    <>
      <Box mt="100px" ml="170px" mb="50px">
        <Heading color="#ffffff">Another Amenities</Heading>
        <Flex align="center" color="#ffffff" mt="20px">
          <Box display="flex" flexDirection="column" alignItems="center" mr="10">
            <Tooltip label="TV" aria-label="TV tooltip">
              <FaTv size={46} />
            </Tooltip>
            <Text mt="2">TV</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" mr="10">
            <Tooltip label="Air Conditioner" aria-label="Air Conditioner tooltip">
              <FaSnowflake size={46} />
            </Tooltip>
            <Text mt="2">Air Conditioner</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" mr="10">
            <Tooltip label="Phone" aria-label="Phone tooltip">
              <FaPhone size={46} />
            </Tooltip>
            <Text mt="2">Phone</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Tooltip label="Wi-Fi" aria-label="Wi-Fi tooltip">
              <FaWifi size={46} />
            </Tooltip>
            <Text mt="2">Wi-Fi</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Amenities;
