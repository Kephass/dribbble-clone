import React from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Banner,Footer } from '@components';
import { Body, Filter } from '@components/findwork';

import { links } from './index';

import './style.scss';

export const Jobs = () => {
  return (
    <Box>
      <Filter links={links} />
      <Banner
        title={'The #1 Job Board for Graphic Design Jobs'}
        description="Dribbble is the heart of the design community and the best resource
            to discover and connect with designers and jobs worldwide."
        image="images/banners/jobs.png"
        buttons={[
          { text: 'Post a job—Starting at $249/mo' },
          { text: 'Learn more', color: 'gray' },
        ]}
        titleOptions={{
          fontSize: { base: '2xl', md: '2xl', lg: '2rem' },
          align: 'left',
          fontWeight: 'extrabold',
        }}
        descriptionOptions={{
          fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
          align: 'left',
          fontWeight: 'medium',
        }}
      >
        <Box
          borderRadius="14"
          bg="white"
          maxW="300px"
          py="5"
          px="3"
          position="absolute"
          top="10%"
          left="-2"
          boxShadow="10px 10px 30px rgb(0 0 0 / 10%)"
        >
          <Flex>
            <Image
              width="50px"
              mr="3"
              fit="contain"
              src="images/brand/logo-ball.svg"
              borderRadius="10"
            />
            <Text
              align={{ base: 'center', md: 'left' }}
              fontSize="md"
              lineHeight="normal"
              fontWeight="extrabold"
            >
              Dribbble is looking to hire a product design manager
            </Text>
          </Flex>
        </Box>
      </Banner>
      <Body />
      <Footer />
    </Box>
  );
};
