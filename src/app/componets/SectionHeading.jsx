import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ title }) => {
  return (
    <Heading textAlign="center" fontSize="x-large" pos="relative" right="661px" color="#ffffff" mb="5px">
      {title}
    </Heading>
  );
};

export default SectionHeading;
