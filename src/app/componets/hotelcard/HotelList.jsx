import { Box, Grid } from '@chakra-ui/react';
import HotelCard from './HotelCard';

export default function HotelsList({ hotels }) {
  return (
    <Box mb="16">
      {hotels?.length > 0 && (
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, .25fr)' }}
          ml="33%"
          gap={3}
        >
          {hotels.map(({ id, title, text, imgSrc }) => (
            <HotelCard key={id} title={title} text={text} imgSrc={imgSrc} />
          ))}
        </Grid>
      )}
    </Box>
  );
}
