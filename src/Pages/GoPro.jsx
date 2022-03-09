import { Container } from '@chakra-ui/react';
import {
  Banner,
  Hero,
  Benefits,
  Pricing,
  Testimonials,
} from '@components/gopro';

function GoPro() {
  return (
    <Container maxW="7xl">
      <Banner />
      <Benefits />
      <Hero />
      <Pricing />
      <Testimonials />
    </Container>
  );
}

export default GoPro;
