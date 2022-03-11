import React from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/react';
import { AccordionNav, DesignerList, SearchDesign } from '@components/findwork';

import './style.scss';

const lists = [
  {
    title: 'Halo UI/UX',
    location: 'Ukraine',
    logo:
      'https://cdn.dribbble.com/users/6234/avatars/normal/25f8d3c2ac3fbb8686429a19219ddfe7.png?1645955093',
    projects: [
      {
        img:
          'https://cdn.dribbble.com/users/6234/screenshots/16989869/rello_website_1x.png',
        title: ''
      },
      {
        img:
          'https://cdn.dribbble.com/users/6234/screenshots/17378032/amateur_website_1x.png',
        title: ''
      }
    ],
    price: 'The Graphic Standard',
    isPro: true,
    url: '',
    timeStamp: new Date()
  },
  {
    title: 'tubik UX',
    location: 'Dnipro, Ukraine',
    projects: [
      {
        img:
          'https://cdn.dribbble.com/users/22691/screenshots/17109835/tubik_momatu_web_redesign_1x.jpg',
        title: ''
      }
    ],
    logo:
      'https://cdn.dribbble.com/users/22691/avatars/normal/a0ed2c2d2594923d0d2c22705c3b6d05.png?1636992114',
    url: '',
    isPro: false,
    timeStamp: new Date()
  }
];

export const DesignerSearch = () => {
  return (
    <Box>
      <Container maxW="1600px">
        <Flex>
          {/* LEFT */}
          <Box
            minWidth="300px"
            position="sticky"
            top="0px"
            minHeight="100vh"
            py="48px"
            px="32px"
            borderRight="1px solid"
            borderColor="gray.200"
          >
            <VStack align="left">
              <Flex width="100%" mb="10px" direction="column">
                <Text fontSize="sm" fontWeight="bold" color="gray">
                  TYPE OF SEARCH
                </Text>
                <Box my="12px">
                  <AccordionNav />
                </Box>
              </Flex>
            </VStack>
          </Box>
          <Spacer />

          {/* BODY */}
          <Box
            position="sticky"
            top="0px"
            minHeight="100vh"
            py="48px"
            px="32px"
            width="100%"
          >
            <VStack align="left">
              <Flex width="100%" mb="10px" direction="column">
                <Text
                  fontSize={{ base: '2xl', md: '2xl', lg: '2rem' }}
                  fontWeight={'extrabold'}
                >
                  Designers for Hire
                </Text>
                <Text fontWeight={'normal'} color="gray">
                  Find the world’s best designers on Dribbble – the largest
                  independent community for digital designers.
                </Text>
              </Flex>
              <Box
                width="100%"
                bg="purple.100"
                px="22px"
                py="28px"
                borderRadius="10px"
              >
                <Flex color="white" align="center">
                  <Flex align="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: '30px', height: '30px' }}
                      viewBox="0 0 20 20"
                      fill="orange"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <Text fontWeight={'extrabold'} ml="2">
                      Want to browse more? Subscribe to access all designers
                    </Text>
                  </Flex>
                  <Spacer />
                  <Button bg="gradient">Get Started</Button>
                </Flex>
              </Box>
              <Text fontWeight={'normal'}>
                Viewing 12 of 10,000+ designers available for hire
              </Text>

              <DesignerList lists={lists} />
            </VStack>
          </Box>

          {/* RIGHT */}
          <Spacer />
          <Box
            position="sticky"
            top="0px"
            minHeight="100vh"
            borderLeft="1px solid"
            borderColor="gray.200"
          >
            <VStack>
              <SearchDesign width="100%" />
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
