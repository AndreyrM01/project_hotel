import { FaSearch } from 'react-icons/fa';
import { Box, Flex, Text} from '@chakra-ui/react';
import MainNavigation from './Navigation';
import PageHeadingInfo from '../content/PageHeading';
import PageHeading from './PageHeading';

const Header = () => {
  return (
    <>
      <Box
        backgroundImage={PageHeadingInfo.Home.imgSrc}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"  // Ajustado al 100% del ancho
        ml="auto"
        mr="auto"
        minHeight="30rem"
      >
      <Flex
      alignItems="center"
      justifyContent="center"
      display="space-between"
      w="auto"
      borderBottom="2px solid #ffffff"
      >
        <Box position="relative" left="-200px">
          <Text cursor="default" color="#ffffff">Travel to Sky</Text>
        </Box>
        <Box position="relative" right="20px">
        <MainNavigation />
        </Box>
        <Box position="relative" left="220px">
          <FaSearch size={20} color="#ffffff" />
        </Box>
      </Flex>
      <PageHeading
        imgSrc={PageHeadingInfo.Home.imgSrc}
        title={PageHeadingInfo.Home.title}
        text={PageHeadingInfo.Home.text}
      />
      </Box>
    </>
  );
};

export default Header;
