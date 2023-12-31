import { Box } from '@chakra-ui/react';

export default function Grid({ columns, children }) {
  return (
    <Box display="grid" gridTemplateColumns={`repeat(${columns})`}>
      {children}
    </Box>
  );
}