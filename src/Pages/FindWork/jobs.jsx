import React from 'react';
import { Box } from '@chakra-ui/react';
import { Footer } from '@components';
import { Banner, Body, Filter } from '@components/findwork';
import './style.scss';
export const Jobs = () => {
  return (
    <Box>
      <Filter />
      <Banner />
      <Body />
      <Footer />
    </Box>
  );
};

