import { Box, Button, Flex, Icon, Link, Text } from '@chakra-ui/react';

import { ReactComponent as Check } from '../../svg/check.svg';

export function PriceCard({
  title,
  desc,
  euro,
  dollar,
  options,
  quarterly,
  stateChanger,
  dark,
}) {
  return (
    <Box
      border="1px lightgray solid"
      p="8"
      borderRadius="xl"
      my={{ base: '5', md: '10' }}
      flex="0.5"
      maxW="375px"
      bg={dark ? '#070432' : 'white'}
      color={dark && 'white'}
    >
      <Flex direction="column" alignItems="center" gap="2" mb="8">
        <Text fontSize="xl" fontWeight="bold" align="center">
          {title}
        </Text>
        <Flex align="baseline">
          <Text fontSize="6xl" fontWeight="extrabold">
            €{euro}
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            EUR
          </Text>
        </Flex>
        <Text fontSize="sm">
          ${dollar} USD per month{quarterly && ', paid annually'}{' '}
        </Text>
        <Link
          fontWeight="medium"
          onClick={() => stateChanger(!quarterly)}
          color="#ea4c89"
        >
          Switch to {quarterly ? 'montly' : 'quarterly'} billing
        </Link>
        <Button color="white" bg="pink.500">
          Start hiring now
        </Button>
      </Flex>
      <Text whiteSpace="pre-line">{desc}</Text>
      <Flex direction="column" gap="4" ml="4" mt="8">
        {options?.map((option) => (
          <Flex gap="2" key={option} align="baseline">
            <Icon as={Check} fill={dark ? 'white' : '#4ab7bf'} />
            <Text align="left">{option}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
