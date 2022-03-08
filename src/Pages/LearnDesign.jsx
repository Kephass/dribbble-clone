import React from 'react';
import {
  Box,
  Container,
  Heading,
  Flex,
  Stack,
  VStack,
  Image,
  Button,
  Text,
} from '@chakra-ui/react';

const LearnDesign = () => {
  return (
    <Box>
      <Container maxW="container.xl" my="4rem" mx="auto">
        <Stack direction={['column', 'row']} spacing="1.5rem" width="100%">
          <VStack flex={1} maxW="520px" mr="6rem">
            <Heading as="h1" size="2xl" lineHeight="56px">
              Learn design alongside industry leaders
            </Heading>
            <Text fontSize="lg">
              Looking to level up your design skills? Dribbble offers multiple
              ways for you to enrich and expand your design skills - from live
              workshops to comprehensive 12 week courses all with your favorite
              design leaders.
            </Text>
            <Button fontSize=".9rem">Browse upcoming courses</Button>
          </VStack>
          <Box
            flex={1}
            objectFit="cover"
            bgRepeat="no-repeat"
            bgImage="url('learn-design-hero.png')"
            height="600px"
          >
            <Image
              boxSize="100px"
              position="relative"
              src="sprinkle-doodle.png"
              top="-40px"
              left="1px"
            />
            <Image
              boxSize="100px"
              position="absolute"
              src="tornado-doodle.png"
              mt="20rem"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default LearnDesign;
