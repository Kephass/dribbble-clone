import { Avatar, Flex, Text } from '@chakra-ui/react';

export function Person({ name, job, small, left }) {
  return (
    <Flex
      boxShadow="sm"
      align="center"
      gap="4"
      p="4"
      bg="white"
      borderRadius="2xl"
    >
      <Avatar size={small ? 'md' : 'lg'} name={name} />
      <Flex direction="column">
        <Text align={left ? 'left' : 'center'} fontWeight="bold">
          {name}
        </Text>
        <Text>{job}</Text>
      </Flex>
    </Flex>
  );
}
