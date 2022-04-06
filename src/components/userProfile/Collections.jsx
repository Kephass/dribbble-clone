import { Box, Container, Heading, Text } from '@chakra-ui/react';

export const Collections = () => {
  return (
    <>
      <Container>
        <Box justifyContent="space-evenly">
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <br />
            <Text as={'span'}>COLLECTIONS ...</Text>
            <br />
          </Heading>
        </Box>
      </Container>
    </>
  );
};
