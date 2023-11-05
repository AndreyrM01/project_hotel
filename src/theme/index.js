import { extendTheme } from '@chakra-ui/react';
import typography from './foundation/typography';
import colors from './foundation/colors';

const overrides = {
  ...typography,
  colors,
};

export default extendTheme(overrides);
