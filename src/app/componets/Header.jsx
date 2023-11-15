import { FaSearch } from 'react-icons/fa';
import { Box, Flex, Text } from '@chakra-ui/react';
import MainNavigation from './Navigation';

const Header = () => {
  return (
    <>
      <Flex
      alignItems="center"
      justifyContent="center"
      display="space-between"
      w="100%"
      ml="auto"
      mr="auto"
      borderBottom="2px solid #000000"
      >
        <Box position="relative" left="-200px">
          <Text cursor="default">Travel to Sky</Text>
        </Box>
        <Box position="relative" right="20px">
        <MainNavigation />
        </Box>
        <Box position="relative" left="220px">
          <FaSearch size={20} color="#333" />
        </Box>
      </Flex>
    </>
  );
};

export default Header;
