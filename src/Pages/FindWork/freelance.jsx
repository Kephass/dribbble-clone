import React from 'react';
import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Footer, Banner } from '@components';
import { Body, Filter } from '@components/findwork';
import './style.scss';
import {links} from './index';

export const Freelance = () => {
  return (
    <Box>
      <Filter links={links}/>
      <Banner
        title={'Freelance Graphic Design Jobs'}
        description="The project board is an exclusive resource for contract work. It’s perfect for freelancers, agencies, and moonlighters on Dribbble."
        image="images/banners/freelance.png"
        buttons={[
          { text: 'Create a project - Free', link: '/create-project' },
          { text: 'Are you a freelancer?', color: 'gray', link: '/projects' }
        ]}
        titleOptions={{
          fontSize: { base: '2xl', md: '2xl', lg: '2rem' },
          align: 'left',
          fontWeight: 'extrabold'
        }}
        descriptionOptions={{
          fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
          align: 'left',
          fontWeight: 'medium'
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
          <Flex mb="2" align="center">
            <Image
              width="20px"
              mr="3"
              fit="contain"
              src="images/brand/logo-ball.svg"
              borderRadius="10"
            />
            <Text
              align={{ base: 'center', md: 'left' }}
              fontSize="xs"
              lineHeight="normal"
              fontWeight="bold"
            >
              DRIBBBLE
            </Text>
            <Spacer />
            <Text
              align={{ base: 'center', md: 'left' }}
              fontSize="xs"
              lineHeight="normal"
              fontWeight="normal"
            >
              now
            </Text>
          </Flex>
          <Flex direction="column">
            <Text
              align={{ base: 'center', md: 'left' }}
              fontSize="md"
              lineHeight="normal"
              fontWeight="extrabold"
            >
              New freelance projects posted
            </Text>
            <Text
              mt="2"
              align={{ base: 'center', md: 'left' }}
              fontSize="sm"
              lineHeight="normal"
              fontWeight="normal"
            >
              FocusLab, Cuberto, Unfold, amongst others, just posted new
              freelance projects.
            </Text>
          </Flex>
        </Box>
      </Banner>
      <Body />
      <Footer />
    </Box>
  );
};
