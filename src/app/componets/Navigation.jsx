'use client'

import { Box, Link } from '@chakra-ui/react';
import { Link as NextLink, usePathname } from 'next/navigation';

const MainNavigation = () => {
  const pathname = usePathname();

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      p={4}
      justifyContent="space-between"
    >
      <Box display="flex" flex="1" justifyContent="center">
        <NavLink href="/" currentPath={pathname}>
          Home
        </NavLink>
        <NavLink href="/destinies" currentPath={pathname}>
          Destinies
        </NavLink>
        <NavLink href="/contact" currentPath={pathname}>
          Contact Us
        </NavLink>
      </Box>
    </Box>
  );
};

const NavLink = ({ href, currentPath, children }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{
        color: '#427FDF',
      }}
      borderBottom={currentPath === href ? '2px solid #427FDF' : 'none'}
      px={4}
      py="2"
      mx="1"
    >
      {children}
    </Link>
  );
};


export default MainNavigation;
