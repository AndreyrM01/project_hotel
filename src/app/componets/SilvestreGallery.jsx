import { Box, Heading, Image } from '@chakra-ui/react';

const SilvestreGallery = () => {
  return (
    <>
      <Box ml="170px">
        <Heading color="#ffffff" textAlign="center">Gallery</Heading>
        <Box display="flex" justifyContent="center" mb="15px">
          <Image w="240px" h="250px" ml="20px" src='/images/spaguetti-img-gallery.png' alt='' />
          <Image w="450px" h="250px" ml="20px" src='/images/chicken-img-gallery.png' alt='' />
          <Image w="180px" h="250px" ml="20px" src='/images/salad-img-gallery.png' alt='' />
          <Image w="335px" h="250px" ml="20px" src='/images/icecream-img-gallery.png' alt='' />
        </Box>
        <Box display="flex" justifyContent="center" mb="15px">
          <Image w="455px" h="250px" ml="20px" src='/images/coffe-img-gallery.png' alt='' />
          <Image w="240px" h="250px" ml="20px" src='/images/avocado-img-gallery.png' alt='' />
          <Image w="335px" h="250px" ml="20px" src='/images/hamburger-img-galllery.png' alt='' />
          <Image w="180px" h="250px" ml="20px" src='/images/pizza-img-gallery.png' alt='' />
        </Box>
      </Box>
    </>
  )
}

export default SilvestreGallery