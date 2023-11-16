import { Box } from '@chakra-ui/react';

const MainContent = ({ children }) => {
  return (
    <Box as="main" m="0" p="0" w="auto" ml="auto" mr="auto">
      {children}
    </Box>
  );
};

export default MainContent;