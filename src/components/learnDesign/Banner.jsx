import React from 'react';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Hide,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

export const Banner = () => {
  return (
    <Container maxW={'7xl'} marginBottom="20">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 17, md: 24 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <br />
            <Text as={'span'}>Learn design alongside industry leaders</Text>
            <br />
          </Heading>
          <Text>
            Looking to level up your design skills? Dribbble offers multiple
            ways for you to enrich and expand your design skills - from live
            workshops to comprehensive 12 week courses all with your favorite
            design leaders.
          </Text>
          <Link href="#courses" _hover={{ textDecoration: 'none' }}>
            <Button fontSize=".9rem" alignSelf="flex-start">
              Browse upcoming courses
            </Button>
          </Link>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={{ base: '577px', md: '500px' }}
            // width="464px"
            objectFit="cover"
            bgRepeat="no-repeat"
            width={'full'}
            overflow={'hidden'}
            bgImage="url('/images/learn-design/learn-design-hero.png')"
          >
            <Hide below="md">
              <Image
                boxSize="100px"
                src="/images/learn-design/sprinkle-doodle.png"
              />

              <Image
                boxSize="100px"
                float="right"
                position="absolute"
                right="5rem"
                bottom="100px"
                src="/images/learn-design/tornado-doodle.png"
              />
            </Hide>
          </Box>
        </Flex>
      </Stack>
      <Divider orientation="horizontal" />
    </Container>
  );
};
