import { Container } from '@chakra-ui/react';
import {
  Banner,
  Benefits,
  Community,
  Hero,
  Pricing,
  Testimonials,
} from '@components/gopro';

function GoPro() {
  return (
    <>
      <Container maxW="7xl">
        <Banner />
        <Benefits />
        <Hero />
        <Pricing />
        <Testimonials />
      </Container>
      <Community />
    </>
  );
}

export default GoPro;
