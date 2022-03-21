import { useAuthState } from 'react-firebase-hooks/auth';

import { EyeFilled, HeartFilled } from '@ant-design/icons';
import { Flex, HStack, Icon, Image, Text } from '@chakra-ui/react';

import { auth } from '../firebase';

export function CardText({ item }) {
  const [user] = useAuthState(auth);
  const { profileImg, displayName, likes, views } = item;

  return (
    <Flex alignItems="center" justify="space-between">
      <HStack isTruncated alignItems="center">
        <Image height="25px" width="25px" src={profileImg} borderRadius="2xl" />
        <Text fontWeight="bold" isTruncated>
          {displayName}
        </Text>
      </HStack>
      <HStack>
        <HStack>
          <Icon
            color={likes.includes(user.uid) && 'pink.500'}
            as={HeartFilled}
          />
          <Text>{likes?.length}</Text>
        </HStack>
        <HStack>
          <EyeFilled />
          <Text>{views?.length}</Text>
        </HStack>
      </HStack>
    </Flex>
  );
}
