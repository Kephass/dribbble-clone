import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export function Banner() {
  return (
    <Flex
      my="40"
      direction={{
        base: 'column',
        md: 'row',
      }}
      gap="4"
      justify="space-between"
      alignItems={{ base: 'flex-start', md: 'center' }}
    >
      <Flex direction="column" gap="4" flex="1">
        <Text
          fontSize="xs"
          fontWeight="bold"
          bgClip="text"
          bgGradient="linear(to-r, orange.400, pink.400)"
          width="fit-content"
        >
          DRIBBBLE PRO
        </Text>
        <Text
          mb="2"
          lineHeight="normal"
          fontSize={{
            base: '2xl',
            md: '3xl',
            lg: '6xl',
          }}
          fontWeight="bold"
        >
          Invest in your design career with Dribbble Pro.
        </Text>
        <Text
          fontSize={{
            base: 'xl',
            lg: '2xl',
          }}
        >
          With Pro and Pro Business you get the tools you need to build your
          design career.
        </Text>
        <Button
          color="white"
          bgGradient="linear(to-r, orange.400, pink.400)"
          my="4"
          width="fit-content"
        >
          Learn More
        </Button>
      </Flex>
      <Box ml={{ base: '0', md: '10' }} width="100%" flex="1">
        <Image borderRadius="3xl" src="images/gopro/man-holding-papers.jpg" />
      </Box>
    </Flex>
  );
}
