import { Box } from '@chakra-ui/react';
import {Banner, Body} from '../components/landing';
import Footer from '../components/Footer';

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
