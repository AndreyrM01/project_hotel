import { Box, Link } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';

const Navigation = () => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      p={4}
      justifyContent="space-between"
    >
      <Box display="flex" flex="1" justifyContent="center">
        <Link
          as={NextLink}
          href="/"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Home
        </Link>
        <Link
          as={NextLink}
          href="/destinies"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Destinies
        </Link>
        <Link
          as={NextLink}
          href="/contact"
          _hover={{ textDecoration: 'underline' }}
          px={4}
          py="2"
          mx="1"
        >
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Navigation;
