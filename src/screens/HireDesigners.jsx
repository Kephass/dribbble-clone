import { Box } from '@chakra-ui/react';
import {
  Banner,
  Companies,
  DesignerSearch,
  JobBoard,
  Pricing,
  Testimonial,
} from '@components/hireDesigners';
import { Faqs } from '@components/learnDesign';

import data from '../data/hireDesigners.json';

export default function HireDesigners() {
  return (
    <Box>
      <Banner />
      <Companies />
      <Pricing />
      <Testimonial />
      <JobBoard />
      <DesignerSearch />
      <Pricing text />
      <Faqs data={data} />
    </Box>
  );
}
