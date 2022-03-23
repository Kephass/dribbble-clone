import React, { useEffect, useState } from 'react';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FolderAddFilled, HeartFilled } from '@ant-design/icons/lib/icons';
import { Box, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react';
import { allPostsStateAtom, userStateAtom } from '@data/atoms';

import { db } from '../firebase';

export function Card({
  item,
  id,
  width = '100%',
  height = 'auto',
  objectFit = 'contain',
  borderRadius = '10px',
}) {
  const user = useRecoilValue(userStateAtom);
  const setPosts = useSetRecoilState(allPostsStateAtom);
  const [isVisible, setIsVisible] = useState(false);

  const { docId, images, title, likes = [] } = item;

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLiked(likes?.includes(user?.localId));
    }
  }, [docId]);

  // Like POST
  const likePost = async () => {
    const docRef = doc(db, 'posts', docId);
    if (!user) return console.log('Please log in first');
    if (isLiked) {
      setIsLiked((old) => !old);
      await updateDoc(docRef, {
        likes: arrayRemove(user.localId),
      });
      setPosts((oldPosts) => {
        const newPosts = [...oldPosts].map((post) => {
          const newPost = { ...post };
          if (newPost.docId === docId) {
            newPost.likes = newPost.likes.filter(
              (filterPost) => filterPost !== user?.localId
            );
          }
          return newPost;
        });
        return newPosts;
      });
    } else {
      setIsLiked((old) => !old);
      await updateDoc(docRef, {
        likes: arrayUnion(user.localId),
      });
      setPosts((oldPosts) => {
        const newPosts = [...oldPosts].map((post) => {
          const newPost = { ...post };
          if (newPost.docId === docId) {
            newPost.likes = [...newPost.likes, user?.localId];
          }
          return newPost;
        });
        return newPosts;
      });
    }
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
            onClick={() => likePost(id)}
            bg="gray.300"
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
