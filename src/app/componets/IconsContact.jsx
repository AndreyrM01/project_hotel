import { Box } from '@chakra-ui/react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const IconContact = () => {
  return (
    <>
        <Box
          width="100%"
          h="20rem"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          marginTop="-90px"
        >
          <FaPhone 
          color="#ffffff" 
          style={{
            width:"55px",
            height:"90px",
            position:"relative",
            left:"145px"
          }}
          />
          <Box borderX="2px solid #ffffff" h="100px" w="200px">
            <FaMapMarkerAlt
              color="#ffffff"
              style={{
                width: '55px',
                height: '90px',
                position: 'relative',
                left: '68px',
              }}
            />
          </Box>
          <FaEnvelope 
          color="#ffffff" 
          style={{
            width:"55px",
            height:"90px",
            position:"relative",
            right:"145px"
          }}
          />
        </Box>
    </>
  );
};

export default IconContact;
