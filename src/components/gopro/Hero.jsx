import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';

export function Hero() {
  return (
    <VStack my={{ base: '20', md: '40' }}>
      <Text
        maxW="3xl"
        fontWeight="bold"
        fontSize={{
          base: '2xl',
          md: '3xl',
          lg: '5xl',
        }}
        align="center"
        lineHeight="normal"
        mb="8"
      >
        Build your brand with Dribbble Pro & Pro Business
      </Text>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        gap="20"
        alignItems="center"
      >
        <Box flex="0.5">
          <Image borderRadius="3xl" src="images/gopro/woman-after-pc.png" />
        </Box>
        <Box
          flex="0.5"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight={{ base: 'normal', md: 'medium' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text mb="4">
            Want to unlock the key to the next stage of your career in design?
            Whether you're freelancing or need an always up to date portfolio,
            Dribbble Pro has something for you.
          </Text>
          <Text>
            With Dribbble Pro & Pro Business you can create an Instant
            portfolio, receive a daily newsletter with the latest{' '}
            <Link color="pink.500" href="#">
              freelance design jobs
            </Link>
            , and win new projects with{' '}
            <Link color="pink.500" href="#">
              Pitch
            </Link>
            - your very own personalized video that lives on your Dribbble
            profile.
          </Text>
        </Box>
      </Flex>
    </VStack>
  );
}
