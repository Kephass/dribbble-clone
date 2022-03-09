import React from 'react';
import { Box, Flex, VStack, Text, Container, Spacer } from '@chakra-ui/react';
import { Footer, Banner } from '@components';
import { Body, Filter } from '@components/findwork';
import './style.scss';

export const DesignerSearch = () => {
  return (
    <Container maxW="8xl">
      <Flex>
        {/* LEFT */}
        <Box
          position="sticky"
          top="0px"
          minHeight="100vh"
          py="48px"
          px="32px"
          borderRight="1px solid lightGray"
        >
          <VStack bg="gray.300" p="2" borderRadius="10" ml="2" color="gray.600">
            <Text>TYPE OF SEARCH</Text>
          </VStack>
        </Box>
        <Spacer />
        {/* BODY */}
        <Box position="sticky" top="0px" minHeight="100vh" py="48px" px="32px">
          <VStack bg="gray.300" p="2" borderRadius="10" ml="2" color="gray.600">
            <Text>TYPE OF SEARCH</Text>
          </VStack>
        </Box>
        {/* RIGHT */}
        <Spacer />
        <Box
          position="sticky"
          top="0px"
          minHeight="100vh"
          py="48px"
          px="32px"
          borderLeft="1px solid lightGray"
        >
          <VStack bg="gray.300" p="2" borderRadius="10" ml="2" color="gray.600">
            <Text>TYPE OF SEARCH</Text>
          </VStack>
        </Box>
      </Flex>
      <Footer />
    </Container>
  );
};
