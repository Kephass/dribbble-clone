import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { FolderAddFilled, HeartFilled } from '@ant-design/icons/lib/icons';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';

import { auth, likePost } from '../firebase';

export function Card({
  item,
  width = '100%',
  height = 'auto',
  objectFit = 'contain',
  borderRadius = '10px',
}) {
  const [isVisible, setIsVisible] = useState(false);

  const [user] = useAuthState(auth);
  const { images, title } = item;
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
        fallbackSrc="https://via.placeholder.com/150"
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
          <VStack bg="gray.300" p="2" borderRadius="10" ml="2" color="gray.600">
            <HeartFilled onClick={() => likePost(user, item.id)} />
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
