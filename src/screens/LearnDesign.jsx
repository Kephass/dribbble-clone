import React from 'react';

import { Box, Container, Heading } from '@chakra-ui/react';
import {
  Banner,
  CoursesBanner,
  Faqs,
  WorkshopsBanner,
} from '@components/learnDesign';

const LearnDesign = () => {
  return (
    <Box>
      <Banner />
      <CoursesBanner />
      <WorkshopsBanner />
      <Box bgColor="bgFAQ">
        <Container maxW="container.lg" py="4rem">
          <Heading as="h1" size="xl" lineHeight="56px" mb="2rem">
            FAQs
          </Heading>
          <Faqs />
        </Container>
      </Box>
    </Box>
  );
};

export default LearnDesign;
