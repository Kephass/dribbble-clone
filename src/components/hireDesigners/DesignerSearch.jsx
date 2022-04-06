import { Button, Flex, Image, Text } from '@chakra-ui/react';

export function DesignerSearch() {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
      my={{ base: '5', md: '10' }}
      gap="20"
      justify="space-between"
    >
      <Image
        minW="600px"
        src="images/hiring/designer-search.png"
        display={{ base: 'none', md: 'initial' }}
      />
      <Flex
        pr={{ base: '10', xl: '20' }}
        pl={{ base: '10', xl: '0' }}
        direction="column"
        gap="4"
      >
        <Text color="purple.600" fontWeight="bold" fontSize="sm">
          DESIGNER SEARCH
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
          Hire faster & smarter with Designer Search
        </Text>
        <Text fontWeight="bold">Seamless search</Text>
        <Text>
          Search for your next freelancer or full-time creative by using our
          powerful search engine with filters like specialty, location,
          experience level, and more.
        </Text>
        <Text fontWeight="bold">Quality candidates available for hire</Text>
        <Text>
          With the largest professional creative community online, simply search
          through our thousands of designers available for hire with a few
          clicks.
        </Text>
        <Button width="fit-content" bg="pink.500" color="white">
          Start started today
        </Button>
      </Flex>
    </Flex>
  );
}
