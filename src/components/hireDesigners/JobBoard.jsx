import { Button, Flex, Image, Text } from '@chakra-ui/react';

export function JobBoard() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      overflowX="hidden"
      my={{ base: '10', md: '20' }}
      gap="40"
      justify="space-between"
    >
      <Flex
        direction="column"
        minW="500px"
        gap="4"
        pl={{ base: '10', xl: '20' }}
        pr={{ base: '10', xl: '0' }}
      >
        <Text color="purple.600" fontWeight="bold" fontSize="sm">
          JOB BOARD
        </Text>
        <Text
          lineHeight="normal"
          fontSize={{
            base: '2xl',
            md: '3xl',
            lg: '4xl',
          }}
          fontWeight="bold"
        >
          The #1 job board for top design talent
        </Text>
        <Text fontWeight="bold">
          Get in front of 1M+ top designers worldwide
        </Text>
        <Text>
          Our job board postings on average receive 1.1k targeted clicks per
          month, so you can rest assured that your role is in front of the best
          in the design community.
        </Text>
        <Text fontWeight="bold">Proven results for recruiters</Text>
        <Text>
          Join the 60,000 companies that have hired designers with Dribbble.
          Spend less time sorting through unqualified candidates, and more time
          hiring amazing creatives.
        </Text>
        <Button width="fit-content" bg="pink.500" color="white">
          Start hiring now
        </Button>
      </Flex>
      <Image minW="600px" src="images/hiring/jobboard.png" />
    </Flex>
  );
}
