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

export function PriceCard({ title, desc, price, options, percentage }) {
  console.log(options);
  return (
    <Box
      border="1px lightgray solid"
      p="4"
      borderRadius="xl"
      my="10"
      flex="0.5"
    >
      <Flex direction="column" alignItems="center" gap="4">
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
        <Text>{desc}</Text>
        <Flex align="baseline" gap="1">
          <Text fontSize="6xl" fontWeight="bold">
            €{price}
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            EUR
          </Text>
        </Flex>
        <HStack color="#ea4c89">
          <Text
            fontWeight="medium"
            py="2"
            px="3"
            bg="pink.50"
            borderRadius="3xl"
          >
            {percentage}% Savings
          </Text>
          <Icon fontSize="3xl" as={Arrow} />
        </HStack>
        <Link color="#ea4c89">Switch to montly billing</Link>
        <Button
          my="5"
          color="white"
          bgGradient="linear(to-r, orange.400, pink.400)"
        >
          Get started
        </Button>
      </Flex>
      <Flex direction="column" gap="4" ml="4">
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
