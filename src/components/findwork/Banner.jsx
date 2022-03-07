import {
  Button,
  Image,
  Box,
  Container,
  Flex,
  VStack,
  Text,
} from '@chakra-ui/react';

export const Banner = () => (
  <Box py={10}>
    <Container maxW="container.xl" centerContent>
      <Flex
        minH="30vh"
        align="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          width={{ base: '100%', lg: '50%' }}
          h="full"
          py="10"
          px={{ base: '0', md: '10' }}
          spacing="10"
          alignItems="flex-start"
        >
          <Text
            align="left"
            fontSize={{ base: '2xl', md: '2xl', lg: '2rem' }}
            lineHeight="normal"
            fontWeight="extrabold"
          >
            The #1 Job Board for Graphic Design Jobs
          </Text>
          <Text
            fontWeight="medium"
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            align="left"
          >
            Dribbble is the heart of the design community and the best resource
            to discover and connect with designers and jobs worldwide.
          </Text>
          <Flex>
            <Button colorScheme="pink" variant="solid" mr="3">
              Post a job—Starting at $249/mo
            </Button>
            <Button colorScheme="gray" variant="solid">
              Learn more
            </Button>
          </Flex>
        </VStack>
        <Box
          px="10"
          width={{ base: '100%', md: '50%' }}
          borderRadius="10"
          position="relative"
        >
          <Box
            borderRadius="14"
            bg="white"
            maxW="300px"
            py="5"
            px="3"
            position="absolute"
            top="10%"
            left="-2"
            boxShadow="10px 10px 30px rgb(0 0 0 / 10%)"
          >
            <Flex>
              <Image
                width="50px"
                mr="3"
                fit="contain"
                src="images/brand/logo-ball.svg"
                borderRadius="10"
              />
              <Text
                align={{ base: 'center', md: 'left' }}
                fontSize="md"
                lineHeight="normal"
                fontWeight="extrabold"
              >
                Dribbble is looking to hire a product design manager
              </Text>
            </Flex>
          </Box>
          <Image
            width="100%"
            fit="contain"
            src="images/banners/findwork.png"
            borderRadius="32"
          />
        </Box>
      </Flex>
    </Container>
  </Box>
);
