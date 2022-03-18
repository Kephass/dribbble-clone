import React from 'react';

import { Box } from '@chakra-ui/react';

export function Banner({ color = 'pink.25' }) {
  return (
    <Box
      minH="100vh"
      width="30%"
      bg={color}
      display={{ base: 'none', md: 'flex' }}
    ></Box>
  );
}
