import React from 'react';
import { Link as Router } from 'react-router-dom';

import { Flex, Image, Link, Text } from '@chakra-ui/react';

export function Banner({ color = 'pink.25' }) {
  return (
    <Flex
      minH="100vh"
      width="450px"
      bg={color}
      display={{ base: 'none', md: 'flex' }}
      direction="column"
      justifyContent="flex-start"
      p="2em"
    >
      <Link as={Router} to="/">
        <Image
          src={`${process.env.REACT_APP_DOMAIN}/images/brand/logo.svg`}
          height="25px"
          mb="12px"
          display={{ base: 'none', md: 'flex' }}
        />
      </Link>
      <Text
        mt="1em"
        mb="3em"
        color="purple.200"
        fontSize="2xl"
        fontWeight="black"
        lineHeight="26px"
      >
        Discover the world’s top Designers & Creatives.
      </Text>

      <Image
        src={`${process.env.REACT_APP_DOMAIN}/images/banners/sign_in.jpeg`}
        mb="12px"
        width="450px"
        display={{ base: 'none', md: 'flex' }}
      />
      <Text mt="1em" color="purple.200" fontSize="sm" lineHeight="26px">
        Art by <Link textDecoration="underline">Irina Valeeva</Link>
      </Text>
    </Flex>
  );
}
