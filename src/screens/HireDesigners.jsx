import { Box } from '@chakra-ui/react';
import {
  Banner,
  Companies,
  DesignerSearch,
  JobBoard,
  Pricing,
  Testimonial,
} from '@components/hireDesigners';

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
    </Box>
  );
}
