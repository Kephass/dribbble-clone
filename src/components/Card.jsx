import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FolderAddFilled, HeartFilled } from '@ant-design/icons/lib/icons';
import { Box, Flex, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { userStateAtom } from '@data/atoms';
import { DuplicateIcon } from '@heroicons/react/solid';

import { userLogInModal } from '../data/atoms';
import { likePost } from '../firebase';

export function Card({
  item,
  width = '100%',
  height = 'auto',
  objectFit = 'contain',
  borderRadius = '10px',
  setPosts = null,
}) {
  const user = useRecoilValue(userStateAtom);
  const { docId, images, title, likes = [] } = item;
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const setLogInModal = useSetRecoilState(userLogInModal);

  useEffect(() => {
    if (user) {
      setIsLiked(likes?.includes(user?.localId));
    }
  }, [docId, likes]);

  const handleLikePost = (e) => {
    e.stopPropagation();
    if (!user) return setLogInModal(true);
    setIsLiked((old) => !old);
    likePost(user, docId, setPosts, isLiked, likes);
  };

  return (
    <Box
      background="gray"
      position="relative"
      onMouseOver={() => {
        setIsVisible(true);
        images.length > 1 && setActiveIndex(1);
      }}
      borderRadius={borderRadius}
      onMouseOut={() => {
        setIsVisible(false);
        images.length > 1 && setActiveIndex(0);
      }}
    >
      {images?.length > 1 && (
        <Box position="absolute" zIndex={1} right={1} top={1}>
          <DuplicateIcon color="white" width="28px" />
        </Box>
      )}
      <Box overflow={'hidden'} borderRadius={borderRadius}>
        <Flex position="relative" height={height}>
          {images?.map((image, i) => (
            <Box
              position="absolute"
              key={`cardImage${i}`}
              height={height}
              width={width}
            >
              <Image
                width={width}
                height={height}
                objectFit={objectFit}
                src={image}
                transition="0.3s ease-in-out "
                opacity={i !== activeIndex && '0'}
                fallbackSrc="/images/default/default_card.svg"
                borderRadius={borderRadius}
                transform={isVisible && 'scale(1.05)'}
                _hover={{ cursor: 'pointer' }}
              />
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex
        opacity={isVisible ? '1' : '0'}
        cursor={isVisible ? 'pointer' : 'default'}
        borderRadius="10"
        position="absolute"
        alignItems="flex-end"
        alignContent="space-between"
        transition="0.25s ease-in-out "
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
      </Flex>
    </Box>
  );
}
