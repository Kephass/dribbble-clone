import { Avatar, Box, Flex, HStack, Text } from '@chakra-ui/react';

export default function ReviewCard({ text, name }) {
  return (
    <Flex direction="column" align="center" gap="4">
      <Text fontWeight="bold" align="center">
        {text}
      </Text>
      <HStack>
        <Avatar />
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text>Freelance graphic design</Text>
        </Box>
      </HStack>
    </Flex>
  );
}
