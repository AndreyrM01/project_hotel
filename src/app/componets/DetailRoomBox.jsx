import { Box } from '@chakra-ui/react';

const ImageRoomBox = ({ backgroundImage, ...props }) => {
  return (
    <Box
      backgroundImage={backgroundImage}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius="30px"
      w="300px"
      h="175px"
      ml="20px"
      mb="15"
      {...props}
    ></Box>
  );
};

export default ImageRoomBox;
