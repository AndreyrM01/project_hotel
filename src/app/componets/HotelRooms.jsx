import { Box } from '@chakra-ui/react';
import HRoomsInfo from "../content/HotelRoomsInfo"
import ImageBox from './ImgRoomsBox';

const HotelRoom = () => {
  return (
    <>
      <Box ml="150px" mr="100px" mb="100px" display="flex">
        <ImageBox backgroundImage={HRoomsInfo.NewYork.room1Img} />
        <ImageBox backgroundImage={HRoomsInfo.NewYork.room2Img} />
        <ImageBox backgroundImage={HRoomsInfo.NewYork.room3Img} />
        <ImageBox backgroundImage={HRoomsInfo.NewYork.room4Img} />
      </Box>
    </>
  )
}

export default HotelRoom