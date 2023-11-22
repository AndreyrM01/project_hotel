import { Box } from '@chakra-ui/react';

const ImageRoomBox = ({ backgroundImage, ...props }) => {
  return (
    <Box
      backgroundImage={backgroundImage}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius="30px"
      w="350px"
      h="200px"
      ml="20px"
      {...props}
    ></Box>
  );
};

export default ImageRoomBox;
