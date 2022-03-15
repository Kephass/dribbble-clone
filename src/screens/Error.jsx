import { Link } from 'react-router-dom';

import { Box, Button } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box
      textAlign="center"
      py={10}
      px={20}
      h="40rem"
      bgImage="url('/images/error/undraw_404.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Link to="/">
        <Button
          colorScheme={'pink'}
          bgGradient="linear(to-r, pink.400, pink.500, pink.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Link>
    </Box>
  );
}
