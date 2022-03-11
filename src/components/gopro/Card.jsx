import { Flex, Text } from '@chakra-ui/react';

export function Card({ img, title, desc }) {
  return (
    <Flex direction="column" gap="4">
      {img}
      <Text fontWeight="bold" fontSize="xl" m="0">
        {title}
      </Text>
      <Text>{desc}</Text>
    </Flex>
  );
}
