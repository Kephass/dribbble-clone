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
  const history = useNavigate();

  return (
    <Box bg="purple.50" pb="10">
      <Container maxW="container.xl" centerContent>
        <Flex
          minH="50vh"
          align="flex-end"
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <VStack
            w="full"
            h="full"
            py="10"
            px={{ base: '0', md: '10' }}
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
            >
              Dribbble is the leading destination to find & showcase creative
              work and home to the world&apos;`s best design professionals.
            </Text>
            <Button
              colorScheme="pink"
              variant="solid"
              onClick={() => history.push('/signup')}
            >
              Sign up
            </Button>
          </VStack>
          <Box px="10">
            <Image
              width="800px"
              height="522px"
              fit="contain"
              src="images/banners/landing.png"
              mb="-14"
            />
            <Text color="gray.400" align={{ base: 'center', md: 'right' }}>
              Art by{' '}
              <Link href="https://dribbble.com/romainbriaux">
                Romain Briaux
              </Link>
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
