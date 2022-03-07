import { EyeFilled, HeartFilled } from '@ant-design/icons';
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

function CardText({ img, text, likes, views }) {
  return (
    <Flex alignItems="center" justify="space-between">
      <HStack isTruncated alignItems="center">
        <Image height="25px" width="25px" src={img} borderRadius="2xl" />
        <Text fontWeight="bold" isTruncated>
          {text}
        </Text>
      </HStack>
      <HStack>
        <HStack>
          <HeartFilled />
          <Text>{likes}</Text>
        </HStack>
        <HStack>
          <EyeFilled />
          <Text>{views}</Text>
        </HStack>
      </HStack>
    </Flex>
  );
}

export default CardText;
