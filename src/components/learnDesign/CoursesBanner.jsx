import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

export const CoursesBanner = () => {
  return (
    <Container maxW={'7xl'} marginBottom="20">
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
              Early March 2022
            </Text>
            <br />
            <Text as={'span'}>12 Week Product Design Course</Text>
            <br />
            <Text as={'span'} fontSize="md" color={'siteGray'}>
              Taught by Jesse Showalter
            </Text>
          </Heading>
          <Text>
            Our 12 week zero-to-career-ready Product Design course teaches
            students everything they need to land their first job in Product
            Design. Our flexible curriculum allows you to study on your schedule
            with on-demand video, while also gaining live feedback and insights
            from weekly sessions with an expert mentor. Learn the tools and
            practices and develop your first product design portfolio projects
            in the process. Graduate and get connected to hiring managers
            looking for product designers. Get ready to launch your career with
            us.
          </Text>
          <Button fontSize=".9rem" alignSelf="flex-start">
            Learn more
          </Button>
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
            <iframe
              width="100%"
              height="100%"
              src="https://cdn.dribbble.com/uploads/32123/original/6815bf8a61d6062437c2cbc91865510f.mp4"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
