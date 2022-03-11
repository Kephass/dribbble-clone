import React from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Footer } from '@components';
import { DesignerList, Search } from '@components/findwork';

import './style.scss';

const lists = [
  {
    title: 'Web & Product Designer',
    location: 'Austin TX',
    logo: 'https://cdn.dribbble.com/users/732492/avatars/normal/7bb885b4424533a2d8806b1f90f97704.png?1613640457&compress=1&resize=96x96',
    post: 'The Graphic Standard',
    type: 'Full-time',
    url: '',
    timeStamp: new Date(),
  },
  {
    title: 'Junior Motion Designer (f/m/d)',
    location: 'MUNICH',
    logo: 'https://cdn.dribbble.com/users/9087000/avatars/normal/c17b734294f990fdc39eedf98fc9f780.png?1631056561&compress=1&resize=84x84',
    post: 'BDA Creative GmbH',
    type: 'Full-time',
    url: '',
    timeStamp: new Date(),
  },
];
export const DesignerSearch = () => {
  return (
    <Box>
      <Container maxW="8xl">
        <Flex>
          {/* LEFT */}
          <Box
            position="sticky"
            top="0px"
            minHeight="100vh"
            py="48px"
            px="32px"
            borderRight="1px solid"
            borderColor="gray.200"
          >
            <VStack
              bg="gray.300"
              p="2"
              borderRadius="10"
              ml="2"
              color="gray.600"
            >
              <Text>TYPE OF SEARCH</Text>
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
              <Search width="100%" />
            </VStack>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};
