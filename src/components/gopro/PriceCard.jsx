import { CheckCircleFilled } from '@ant-design/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';

export function PriceCard({
  title,
  desc,
  euro,
  dollar,
  options,
  percentage,
  yearly,
  stateChanger,
}) {
  console.log(options);
  return (
    <Box
      border="1px lightgray solid"
      p="8"
      borderRadius="xl"
      my={{ base: '5', md: '10' }}
      flex="0.5"
      maxW="350px"
    >
      <Flex direction="column" alignItems="center" gap="2">
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Text>{desc}</Text>
        <Flex align="baseline">
          <Text fontSize="6xl" fontWeight="extrabold">
            €{euro}
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            EUR
          </Text>
        </Flex>
        <Text fontSize="sm">
          ${dollar} USD per month{yearly && ', paid annually'}{' '}
        </Text>
        {yearly && (
          <Flex color="#ea4c89" alignItems="center">
            <Text py="2" px="3" bg="pink.50" borderRadius="3xl">
              {percentage}% Savings
            </Text>
            <Icon fontSize="3xl" as={Arrow} />
          </Flex>
        )}
        <Link
          fontWeight="medium"
          onClick={() => stateChanger(!yearly)}
          color="#ea4c89"
        >
          Switch to {yearly ? 'montly' : 'yearly'} billing
        </Link>
        <Button color="white" bgGradient="linear(to-r, orange.400, pink.400)">
          Get started
        </Button>
      </Flex>
      <Flex direction="column" gap="4" ml="4" mt="8">
        {options?.map((option) => (
          <Flex gap="2" key={option}>
            <Icon fontSize="2xl" color="#4bb7bf" as={CheckCircleFilled} />
            <Text align="left">{option}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
