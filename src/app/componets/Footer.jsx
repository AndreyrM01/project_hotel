import { Box, Flex, IconButton, Divider } from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <Divider borderColor="gray.300" w="auto" borderWidth="1px" my="2" mt="20px"  mb="20px" />
      <Flex align="center" justify="center" height="100%" mb="20px">
        <Box>
          <Flex justify="center">
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              colorScheme="purple"
              size="lg"
              mx="4"
            />
            <IconButton
              aria-label="YouTube"
              icon={<FaYoutube />}
              colorScheme="red"
              size="lg"
              mx="4"
            />
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              colorScheme="blue"
              size="lg"
              mx="4"
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              colorScheme="green"
              size="lg"
              mx="4"
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Footer;