import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

export function Banner() {
  const navigate = useNavigate();

  return (
    <Box bg="purple.25" pb="1em">
      <Container maxW="container.xl" centerContent>
        <Flex
          minH="50vh"
          align="center"
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <VStack
            w="full"
            h="full"
            py="10"
            px={{ base: '0', md: '0' }}
            spacing="10"
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Text
              align={{ base: 'center', md: 'left' }}
              fontSize={{ base: '1.2rem', md: '2rem', lg: '3rem' }}
              lineHeight="normal"
              fontWeight="extrabold"
            >
              Discover the world’s top designers & creatives
            </Text>
            <Text
              fontWeight="medium"
              fontSize="md"
              align={{ base: 'center', md: 'left' }}
              mt="12px !important"
            >
              Dribbble is the leading destination to find & showcase creative
              work and home to the world&apos;`s best design professionals.
            </Text>
            <Button
              colorScheme="pink"
              variant="solid"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button>
          </VStack>
          <Box px="10">
            <Image
              width="800px"
              fit="contain"
              src="images/banners/landing.png"
            />
            <Text
              color="gray.400"
              fontSize="xs"
              align={{ base: 'center', md: 'right' }}
            >
              Learn more about how we’re supporting Ukraine. Art by
              <Link
                href="https://dribbble.com/mergedevt"
                textDecoration="underline"
                ml="5px"
              >
                Merge Development
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
