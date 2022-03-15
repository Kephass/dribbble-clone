import React from 'react';

import { Box } from '@chakra-ui/react';
import {
  Banner,
  CoursesBanner,
  Faqs,
  WorkshopsBanner,
} from '@components/learnDesign';

import data from '../data/learnDesign.json';

const LearnDesign = () => {
  return (
    <Box>
      <Banner />
      <CoursesBanner />
      <WorkshopsBanner />
      <Faqs data={data} />
    </Box>
  );
};

export default LearnDesign;
