import React from 'react';

import { Box } from '@chakra-ui/react';

export function Banner({ color = '#f1cdd7' }) {
  return <Box minH="100vh" width="30%" bg={color}></Box>;
}
