import { Box, Container, Text, VStack } from '@chakra-ui/react';
import { SlidingWords } from './SlidingWords';

export function Community() {
  return (
    <Box my="32">
      <Container maxW="7xl">
        <Text
          fontWeight="bold"
          fontSize={{ base: 'xl', lg: '3xl' }}
          mb="4"
          align="center"
        >
          Dribbble is the heart of the design community
        </Text>
        <Text
          fontWeight="medium"
          fontSize={{ base: 'md', lg: 'lg' }}
          mb="4"
          align="center"
        >
          No matter your discipline, Dribbble's got you covered for your unique
          career.
        </Text>
      </Container>
      <Box overflow="hidden" mx="-5" py="5">
        <SlidingWords secondList />
        <SlidingWords moveRight />
        <SlidingWords />
        <SlidingWords moveRight secondList />
      </Box>
    </Box>
  );
}
