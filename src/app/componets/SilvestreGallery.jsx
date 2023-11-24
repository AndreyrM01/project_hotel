import { Box, Heading, Image } from '@chakra-ui/react';

const SilvestreGallery = () => {
  return (
    <>
      <Box>
        <Heading color="#ffffff" textAlign="center">Gallery</Heading>
        <Box display="flex" justifyContent="center" mb="15px">
          <Image w="165px" h="200px" ml="20px" src='/images/spaguetti-img-gallery.png' alt='' />
          <Image w="345px" h="200px" ml="20px" src='/images/chicken-img-gallery.png' alt='' />
          <Image w="120px" h="200px" ml="20px" src='/images/salad-img-gallery.png' alt='' />
          <Image w="235px" h="200px" ml="20px" src='/images/icecream-img-gallery.png' alt='' />
        </Box>
        <Box display="flex" justifyContent="center" mb="15px">
          <Image w="345px" h="200px" ml="20px" src='/images/coffe-img-gallery.png' alt='' />
          <Image w="165px" h="200px" ml="20px" src='/images/avocado-img-gallery.png' alt='' />
          <Image w="235px" h="200px" ml="20px" src='/images/hamburger-img-galllery.png' alt='' />
          <Image w="120px" h="200px" ml="20px" src='/images/pizza-img-gallery.png' alt='' />
        </Box>
      </Box>
    </>
  )
}

export default SilvestreGallery