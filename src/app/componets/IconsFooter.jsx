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
            width:"70px",
            height:"90px",
            position:"relative",
            left:"20px"
          }}
          />
          <Box borderX="2px solid #ffffff" h="100px" w="200px">
            <FaMapMarkerAlt
              color="#ffffff"
              style={{
                width: '150px',
                height: '90px',
                position: 'relative',
                left: '25px',
              }}
            />
          </Box>
          <FaEnvelope 
          color="#ffffff" 
          style={{
            width:"70px",
            height:"90px",
            position:"relative",
            right:"20px"
          }}
          />
        </Box>
    </>
  );
};

export default IconContact;
