'use client'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';

const TabsDandH = () => {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green" mb="200px">
        <TabList display="flex" justifyContent="space-evenly">
          <Text color="#ffffff">Discover Our Destinations and Hotels: Find Your Next Favorite Place.</Text>
          <Box display="flex">
          <Tab>DESTINIES</Tab>
          <Tab>HOTELS</Tab>
          </Box>
        </TabList>
        <TabPanels>
          <TabPanel display="flex" justifyContent="center">
            <Box>
              <Box
                w="100%"
                h="24rem"
                display="flex"
              >
                <Box
                 w="300px"
                 h="500px"
                 mx="20px"
                 position="relative"
                 _hover={{
                   '&::after': {
                     content: '"New York"',
                     position: 'absolute',
                     bottom: '220px',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     fontSize: '28px',
                     fontWeight: 'bold',
                     color: '#ffffff',
                     opacity: '100%',
                     zIndex: '2',
                   },
                 }}
                >
                  <Image
                    src="/images/newYork-bg.jpg"
                    alt=""
                    style={{ width: '300px', height: '500px' }}
                  />
                </Box>
                <Box
                 w="300px"
                 h="500px"
                 mx="20px"
                 position="relative"
                 _hover={{
                   '&::after': {
                     content: '"Canada"',
                     position: 'absolute',
                     bottom: '220px',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     fontSize: '28px',
                     fontWeight: 'bold',
                     color: '#ffffff',
                     opacity: '100%',
                     zIndex: '2',
                   },
                 }}
                >
                  <Image
                    src="/images/canada.jpg"
                    alt=""
                    style={{ width: '300px', height: '500px' }}
                  />
                </Box>
                <Box
                 w="300px"
                 h="500px"
                 mx="20px"
                 position="relative"
                 _hover={{
                   '&::after': {
                     content: '"Tokyo"',
                     position: 'absolute',
                     bottom: '220px',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     fontSize: '28px',
                     fontWeight: 'bold',
                     color: '#ffffff',
                     opacity: '100%',
                     zIndex: '2',
                   },
                 }}
                >
                  <Image
                    src="/images/tokyo-bg.jpg"
                    alt=""
                    style={{ width: '300px', height: '500px' }}
                  />
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel display="flex" justifyContent="center">
            <Box>
              <Box
                w="100%"
                h="24rem"
                display="flex"
              >
                <Box
                 w="300px"
                 h="500px"
                 mx="20px"
                 position="relative"
                 _hover={{
                   '&::after': {
                     content: '"Ritz Carlton"',
                     position: 'absolute',
                     bottom: '220px',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     fontSize: '28px',
                     fontWeight: 'bold',
                     color: '#ffffff',
                     opacity: '100%',
                     zIndex: '2',
                   },
                 }}
                >
                  <Image
                    src="/images/newYork-hotel.jpg"
                    alt=""
                    style={{ width: '300px', height: '500px' }}
                  />
                </Box>
                <Box
                 w="300px"
                 h="500px"
                 mx="20px"
                 position="relative"
                 _hover={{
                   '&::after': {
                     content: '"Chateau Frontenac"',
                     position: 'absolute',
                     bottom: '220px',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     fontSize: '28px',
                     fontWeight: 'bold',
                     color: '#ffffff',
                     opacity: '100%',
                     zIndex: '2',
                   },
                 }}
                >
                  <Image
                    src="/images/canada-hotel.jpg"
                    alt=""
                    style={{ width: '300px', height: '500px' }}
                  />
                </Box>
                <Box
                 w="300px"
                 h="500px"
                 mx="20px"
                 position="relative"
                 _hover={{
                   '&::after': {
                     content: '"Aman Hotel"',
                     position: 'absolute',
                     bottom: '220px',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     fontSize: '28px',
                     fontWeight: 'bold',
                     color: '#ffffff',
                     opacity: '100%',
                     zIndex: '2',
                   },
                 }}
                >
                  <Image
                    src="/images/tokyo-hotel.jpg"
                    alt=""
                    style={{ width: '300px', height: '500px' }}
                  />
                </Box>
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default TabsDandH;
