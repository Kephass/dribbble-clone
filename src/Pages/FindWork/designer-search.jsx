import React from 'react';
import { Box } from '@chakra-ui/react';
import { Footer, Banner } from '@components';
import { Body, Filter } from '@components/findwork';
import './style.scss';
import {links} from './index';

export const DesignerSearch = () => {
  return (
    <Box>
      <Filter links={links}/>
      <Banner />
      <Body />
      <Footer />
    </Box>
  );
};
