import React from 'react';
import { Link as Router } from 'react-router-dom';

import { Box, Link, Text } from '@chakra-ui/react';

export function SignInUpLink({
  url,
  text,
  linkText,
  position = { base: 'inherit', md: 'absolute' },
  top = '24px',
  right = '36px',
  color = 'purple.150',
  weight = 'normal',
}) {
  return (
    <Box position={position} top={top} right={right} fontWeight={weight}>
      <Text>
        {text}{' '}
        <Link as={Router} to={url} color={color}>
          {linkText}
        </Link>
      </Text>
    </Box>
  );
}
