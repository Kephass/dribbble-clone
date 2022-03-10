import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

export const WorkshopsBanner = () => {
  return (
    <Container maxW={'7xl'}>
      <Heading as="h1" align="center">
        Upcoming certified courses
      </Heading>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 17, md: 24 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              fontSize="md"
              color={'purple.600'}
            >
              Wed, March 9, 2022 & Wed, March 16, 2022
            </Text>
            <br />
            <Text as={'span'}>
              Designer/Developer Collaboration with Brad Frost & Dan Mall
            </Text>
            <br />
            <Text as={'span'} fontSize="md" color={'siteGray'}>
              Taught by Brad Frost & Dan Mall
            </Text>
          </Heading>
          <Text>
            Join world renowned designers and developers Brad Frost & Dan Mall
            for an exclusive two-part interactive workshop on designer &
            developer collaboration.
          </Text>
          <Flex gap="4">
            <Button
              fontSize=".9rem"
              alignSelf="flex-start"
              bgColor="#4bb7bf"
              color="white"
              _hover={{
                backgroundColor: 'cyan.700',
              }}
            >
              Register now
            </Button>
            <Button fontSize=".9rem" alignSelf="flex-start">
              Learn more
            </Button>
          </Flex>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'345px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              width="100%"
              height="100%"
              objectFit="fill"
              src="/images/learn-design/workshop-image.png"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
