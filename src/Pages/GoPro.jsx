import { Container } from '@chakra-ui/react';
import { Banner, Hero, Benefits, Pricing } from '@components/gopro';

function GoPro() {
  return (
    <Container maxW="7xl">
      <Banner />
      <Benefits />
      <Hero />
      <Pricing />
    </Container>
  );
}

export default GoPro;
