import { Box } from '@chakra-ui/react';
import RoomInfo from "../content/HotelRoomsInfo"
import ImageRoomBox from './DetailRoomBox';

const RoomDetail = () => {
  return (
    <>
      <Box ml="170px" mb="100px" display="flex">
        <Box backgroundImage={RoomInfo.NewYork.room1Img} 
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius="30px"
          w="410px"
          h="360px"
          >
        </Box>
        <Box>
          <ImageRoomBox backgroundImage={RoomInfo.NewYork.room2Img} />
          <ImageRoomBox backgroundImage={RoomInfo.NewYork.room3Img} />
        </Box>
      </Box>
    </>
  )
}

export default RoomDetail