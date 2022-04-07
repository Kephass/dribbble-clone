import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { EyeFilled, HeartFilled } from '@ant-design/icons';
import { Flex, HStack, Icon, Image, Text } from '@chakra-ui/react';
import { userLogInModal, userStateAtom } from '@data/atoms';

import { likePost } from '../firebase';

export function CardText({ item, setPosts = null }) {
  const user = useRecoilValue(userStateAtom);
  const { docId, profileImg, displayName, likes, views } = item;
  const [isLiked, setIsLiked] = useState(false);
  const setLogInModal = useSetRecoilState(userLogInModal);
  const handleLikePost = (e) => {
    e.stopPropagation();
    if (!user) return setLogInModal(true);
    setIsLiked((old) => !old);
    likePost(user, docId, setPosts, isLiked, likes);
  };
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
            color={user && isLiked && 'pink.500'}
            as={HeartFilled}
            onClick={(e) => handleLikePost(e)}
            _hover={{
              transition: '0.2s ease-out',
              backgroundColor: user && isLiked ? 'pink.25' : 'gray.300',
            }}
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
