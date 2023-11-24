import { Box, Input, Button } from '@chakra-ui/react';

const FormBoxes = () => {
  return (
    <> 
      <Box display="flex" flexDirection="column">
      <Input
        placeholder='Name'
        border="2px solid #799176"
        w="650px"
        h="110px"
        backgroundColor="quoteBgColor"
        mx="auto"
        mt="15px"
        mb="20px"
        _placeholder={{ color: 'rgba(255, 255, 255, 0.5)'  }}
      />
      <Input
        placeholder='Email'
        border="2px solid #799176"
        w="650px"
        h="110px"
        backgroundColor="quoteBgColor"
        mx="auto"
        mt="15px"
        mb="20px"
        _placeholder={{ color: 'rgba(255, 255, 255, 0.5)'  }}
      />
      <Input
        placeholder='Phone'
        border="2px solid #799176"
        w="650px"
        h="110px"
        backgroundColor="quoteBgColor"
        mx="auto"
        mt="15px"
        mb="20px"
        _placeholder={{ color: 'rgba(255, 255, 255, 0.5)'  }}
      />
      <Input
        placeholder='Message'
        border="2px solid #799176"
        w="650px"
        h="155px"
        backgroundColor="quoteBgColor"
        mx="auto"
        mt="15px"
        mb="20px"
        _placeholder={{ color: 'rgba(255, 255, 255, 0.5)' }}
      />
      <Button color="#799176" border="2px solid #799176" mx="auto" my="40px" variant="outline">
        Send
      </Button>
      </Box>
    </>
  )
}

export default FormBoxes