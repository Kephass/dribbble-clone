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
        <Image height="25px" src={profileImg} borderRadius="2xl" />
        <Text fontWeight="bold" isTruncated>
          {displayName}
        </Text>
      </HStack>
      <HStack>
        <HStack>
          <Icon
            color={user && likes?.includes(user.uid) && 'pink.500'}
            as={HeartFilled}
          />
          <Text
            marginInlineStart="5px !important"
            fontSize="sm"
            color="siteGray"
            fontWeight="bold"
          >
            {likes?.length ?? 0}
          </Text>
        </HStack>
        <HStack>
          <EyeFilled />
          <Text
            marginInlineStart="5px !important"
            fontSize="sm"
            color="siteGray"
            fontWeight="bold"
          >
            {views ?? 0}
          </Text>
        </HStack>
      </HStack>
    </Flex>
  );
}
