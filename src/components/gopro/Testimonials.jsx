import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import ReviewCard from './ReviewCard';

export function Testimonials() {
  return (
    <Box my="20">
      <Text
        fontWeight="bold"
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        my="4"
        align="center"
      >
        What top designers are saying
      </Text>
      <Grid
        gridTemplateColumns={{ base: 'repeat(3, 100%)', md: 'repeat(3, 1fr)' }}
        direction="column"
        columnGap={{ base: '10', lg: '20' }}
        rowGap="4"
        overflowX="auto"
        py="4"
      >
        <ReviewCard
          text="“Just hit six weeks with a startup I got connected with through Dribbble.”"
          name="Greg Corby"
        />
        <ReviewCard
          text="“Dribbble Pro is one of the best deals in the design industry, IMHO.”"
          name="Joseph Brueggen"
        />
        <ReviewCard
          text="“90% of my contracts come from clients who have seen my work on Dribbble.”"
          name="Marie Bergeron"
        />
      </Grid>
    </Box>
  );
}
