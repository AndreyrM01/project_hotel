import { Box } from '@chakra-ui/react';
import CardsD from './CardsDestinies';

export default function CardsList ({destinies}){
  return(
    <>
    {destinies?.length > 0 ? (
      <Box mb="16px" w="50%" display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" pos="relative" left="23%">
        {destinies.map(({id, name, temperature, rating, imgSrc, enlace }) => {
          return(
            <CardsD
            key={id}
            name={name}
            temperature={temperature}
            rating={rating}
            imgSrc={imgSrc}
            enlace={enlace}
            />
          );
        })}
      </Box>
    ) : null}
    </>
  );
}