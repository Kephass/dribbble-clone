import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { FolderAddFilled, HeartFilled } from '@ant-design/icons/lib/icons';
import { Box, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { userStateAtom } from '@data/atoms';

import { likePost } from '../firebase';

export function Card({
  item,
  width = '100%',
  height = 'auto',
  objectFit = 'contain',
  borderRadius = '10px',
  setPosts = null,
}) {
  const navigate = useNavigate();
  const user = useRecoilValue(userStateAtom);
  const { docId, images, title, likes = [] } = item;
  const [isVisible, setIsVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLiked(likes?.includes(user?.localId));
    }
  }, [docId, likes]);

  const handleLikePost = (e) => {
    e.stopPropagation();
    if (!user) return navigate(`/signin`);
    setIsLiked((old) => !old);
    likePost(user, docId, setPosts, isLiked);
  };

  return (
    <Box
      background="gray"
      position="relative"
      onMouseEnter={() => setIsVisible(true)}
      borderRadius={borderRadius}
      onMouseLeave={() => setIsVisible(false)}
    >
      <Image
        width={width}
        height={height}
        objectFit={objectFit}
        src={images}
        fallbackSrc="/images/default/default_card.svg"
        borderRadius={borderRadius}
        _hover={{ cursor: 'pointer' }}
      />
      <Box
        display={isVisible ? 'flex' : 'none'}
        cursor={isVisible ? 'pointer' : 'default'}
        borderRadius="10"
        position="absolute"
        alignItems="flex-end"
        alignContent="space-between"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(46,46,46,0.2) 80%, rgba(0,0,0,0.4) 100%);"
        justifyContent="space-between"
        p="4"
      >
        <Text fontWeight="bold" fontSize="lg" color="white" isTruncated mb="1">
          {title}
        </Text>
        <HStack>
          <VStack bg="gray.300" p="2" borderRadius="10" ml="2" color="gray.600">
            <FolderAddFilled />
          </VStack>
          <VStack
            onClick={(e) => handleLikePost(e)}
            bg={user && isLiked ? 'pink.50' : 'gray.200'}
            _hover={{
              transition: '0.2s ease-out',
              backgroundColor: user && isLiked ? 'pink.25' : 'gray.300',
            }}
            p="2"
            borderRadius="10"
            ml="2"
            color="gray.600"
          >
            <Icon color={user && isLiked && 'pink.500'} as={HeartFilled} />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
