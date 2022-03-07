import React from 'react';
import { Box } from '@chakra-ui/react';
import { Footer } from '@components';
import { Banner, Body, Filter } from '@components/findwork';
import './style.scss';

const FindWork = () => {
  return (
    <Box>
      <Filter />
      <Banner />
      <Body />
      <Footer />
    </Box>
  );
};

export default FindWork;