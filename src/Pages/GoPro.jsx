import { Container } from '@chakra-ui/react';
import {
  Banner,
  Hero,
  Benefits,
  Pricing,
  Testimonials,
  Community,
} from '@components/gopro';
import { Footer } from '@components';

function GoPro() {
  return (
    <>
      <Container maxW="7xl">
        <Banner />
        <Benefits />
        <Hero />
        <Pricing />
        <Testimonials />
        <Community />
      </Container>
      <Footer />
    </>
  );
}

export default GoPro;
