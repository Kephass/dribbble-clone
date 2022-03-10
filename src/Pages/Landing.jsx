import { Box } from '@chakra-ui/react';
import { Footer } from '@components';
import { Banner, Body } from '@components/landing';

function Landing() {
  return (
    <Box>
      <Banner />
      <Body />
      <Footer />
    </Box>
  );
}

export default Landing;
