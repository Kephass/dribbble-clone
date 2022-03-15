import { Carousel } from 'react-responsive-carousel';

import { Button, Container, Flex, Text } from '@chakra-ui/react';

import { Person } from './Person';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export function Testimonial() {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 35px)',
    cursor: 'pointer',
  };

  return (
    <Container maxW="5xl" my={{ base: '20px', md: '40px' }}>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        renderArrowNext={(onClickHandler) => (
          <Button
            display={{ base: 'none', md: 'flex' }}
            bg="none"
            border="1px solid black"
            borderRadius="3xl"
            onClick={onClickHandler}
            style={{ ...arrowStyles, right: 2 }}
          >
            &gt;
          </Button>
        )}
        renderArrowPrev={(onClickHandler) => (
          <Button
            display={{ base: 'none', md: 'flex' }}
            bg="none"
            border="1px solid black"
            borderRadius="3xl"
            onClick={onClickHandler}
            style={{ ...arrowStyles, left: 2 }}
          >
            &lt;
          </Button>
        )}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <Flex direction="column" align="center" gap="4">
          <Text fontSize="2xl" fontWeight="light">
            “Dribbble has been the best source we&apos;ve found to hire great
            designers. We&apos;ve literally stopped using anything else for
            design hiring.”
          </Text>
          <Person
            name="Lee Munroe"
            job="Head of Design, OneSignal"
            small
            left
          />
        </Flex>
        <Flex direction="column" align="center" gap="4">
          <Text fontSize="2xl" fontWeight="light">
            “Dribbble has been the best source we&apos;ve found to hire great
            designers. We&apos;ve literally stopped using anything else for
            design hiring.”
          </Text>
          <Person name="Flo Crivello" job="CEO, TeamFlow" small left />
        </Flex>
      </Carousel>
    </Container>
  );
}
