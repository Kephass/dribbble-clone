import React from 'react';
import { Banner } from '@components';
import { Box, Heading } from '@chakra-ui/react';

export const CoursesBanner = () => {
  return (
    <Box mt="7rem">
      <Heading as="h1" align="center">
        Upcoming certified courses
      </Heading>
      <Banner
        title="12 Week Product Design Course"
        description="Our 12 week zero-to-career-ready Product Design course teaches students everything they need to land their first job in Product Design. Our flexible curriculum allows you to study on your schedule with on-demand video, while also gaining live feedback and insights from weekly sessions with an expert mentor. Learn the tools and practices and develop your first product design portfolio projects in the process. Graduate and get connected to hiring managers looking for product designers. Get ready to launch your career with us."
        button="Learn more"
        video="https://cdn.dribbble.com/uploads/32123/original/6815bf8a61d6062437c2cbc91865510f.mp4"
      />
    </Box>
  );
};
