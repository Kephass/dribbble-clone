import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';

import { Person } from './Person';

export function Banner() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      overflowX="hidden"
      py="20"
      gap="40"
      pl={{ base: '10', xl: '20' }}
    >
      <Box minW="450px">
        <Text
          mb="2"
          lineHeight="normal"
          fontSize={{
            base: '3xl',
            md: '4xl',
            lg: '5xl',
          }}
          fontWeight="extrabold"
        >
          Hire the world&apos;s top designers
        </Text>
        <Text
          fontSize={{
            base: 'md',
            lg: 'xl',
          }}
        >
          With Dribbble Hiring you can attract, engage, and connect with a
          community of high quality designers faster than ever. Find out why the
          world&apos;s most innovative companies trust Dribbble when they are
          looking for top design talent.
        </Text>
        <Button mt="5" bg="pink.500" color="white" width="fit-content">
          Get started today
        </Button>
      </Box>
      <Grid rowGap="8">
        <Grid templateColumns="repeat(3, max-content)" gap="8">
          <Person name="Tyler Elise" job="Designer + Illustrator" />
          <Person name="Ryan Putnam" job="Illustrator" />
          <Person name="Zinat Farahani" job="Designer" />
        </Grid>
        <Grid ml="10" mr="-10" templateColumns="repeat(3, max-content)" gap="8">
          <Person name="Lilla Bardenova" job="Brand Designer + Illustrator" />
          <Person name="Maya Ealey" job="Designer + Illustrator" />
          <Person name="Tyler Elise" job="Designer + Illustrator" />
        </Grid>
        <Grid ml="5" mr="-5" templateColumns="repeat(3, max-content)" gap="8">
          <Person name="Robert Mayer" job="Art Director" />
          <Person name="Andrew Baygulov" job="Product Designer" />
          <Person name="木木夕" job="Illustrator" />
        </Grid>
      </Grid>
    </Flex>
  );
}
