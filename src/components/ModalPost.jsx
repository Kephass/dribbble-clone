import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import InnerImageZoom from 'react-inner-image-zoom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { HeartFilled } from '@ant-design/icons';
import { ChatIcon, ExternalLinkIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  IconButton,
  Image,
  Link,
  Spacer,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { selectedPostAtom, userStateAtom } from '@data/atoms';

import { userLogInModal } from '../data/atoms';
import { deletePost, likePost, viewPost } from '../firebase';

import Backdrop from './Backdrop';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

const dropIn = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const Modal = ({ handleClose, setPosts }) => {
  const setLogInModal = useSetRecoilState(userLogInModal);
  const [selectedPost, setSelectedPost] = useRecoilState(selectedPostAtom);
  const user = useRecoilValue(userStateAtom);
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUserPost, setIsUserPost] = useState(false);
  const {
    docId,
    images,
    likes = [],
    views = 0,
    profileImg,
    displayName,
    caption,
    title,
    uid,
  } = selectedPost;
  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  }, []);

  useEffect(() => {
    const viewKey = user ? user?.localId : 'views';
    const currentViews = localStorage.getItem(viewKey);
    const currentViewsArray = currentViews ? JSON.parse(currentViews) : [];
    if (!currentViewsArray?.includes(docId)) {
      localStorage.setItem(
        viewKey,
        JSON.stringify([...currentViewsArray, docId])
      );
      viewPost(docId, setPosts, views);
    }
    // Check if is user post
    if (user) {
      if (user.localId === uid) {
        setIsUserPost(true);
      }
    }
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  useEffect(() => {
    if (user) {
      setIsLiked(likes?.includes(user?.localId));
    }
  }, [docId, likes]);

  const handleLikePost = (e) => {
    e.stopPropagation();
    if (!user) {
      handleClose();
      return setLogInModal(true);
    }
    setLoading(true);
    setIsLiked((old) => !old);
    setSelectedPost((oldPosts) => {
      const newPost = { ...oldPosts };
      if (newPost.docId === docId) {
        if (isLiked) {
          newPost.likes = newPost.likes.filter(
            (filterPost) => filterPost !== user?.localId
          );
        } else {
          const likes = newPost.likes ?? [];
          newPost.likes = [...likes, user?.localId];
        }
      }
      return newPost;
    });
    likePost(user, docId, setPosts, isLiked, likes).then((res) =>
      setLoading(false)
    );
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box position="relative" cursor="initial">
          {/* Post content */}
          <Box p={{ base: '64px 0px', md: '64px 120px' }}>
            <Container maxW="1172px" w="100%" p="0">
              {/* User */}
              <Container maxW="768px">
                <Flex direction={{ base: 'column', md: 'row' }}>
                  <Box mb={{ base: '1em', md: '0' }}>
                    <Flex>
                      <Image
                        height="48px"
                        src={profileImg}
                        borderRadius="50%"
                        mr="16px"
                      />
                      <Flex direction="column">
                        <Text fontWeight="bold">{displayName}</Text>
                        <Flex direction={{ base: 'column', md: 'row' }}>
                          <Text fontWeight="light">
                            Risang Kuncoro for Plainthing Studio • Follow •
                          </Text>
                          <Text
                            fontWeight="light"
                            color="pink.100"
                            ml={{ base: '0', md: '8px' }}
                          >
                            Hire Us
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                  <Spacer />
                  <Box>
                    <Link to="save">
                      <Button
                        variant={'solid'}
                        size={'sm'}
                        p="10px 16px"
                        h="40px"
                      >
                        Save
                      </Button>
                    </Link>

                    <Button
                      onClick={(e) => handleLikePost(e)}
                      leftIcon={
                        loading ? <Spinner size="sm" /> : <HeartFilled />
                      }
                      h="40px"
                      ml="1em"
                      variant={isLiked ? 'outline' : 'solid'}
                      _focus={{
                        ring: 'none',
                        outline: 'none',
                      }}
                      colorScheme={'pink'}
                      size={'sm'}
                      p="10px 16px"
                      minW="90px"
                    >
                      {isLiked ? likes?.length : 'Like'}
                    </Button>
                  </Box>
                </Flex>
              </Container>
              <Container maxW="925px" my="40px" p="0">
                {/* Image */}
                <Box>
                  {/* <Image width="100%" objectFit="cover" src={images} /> */}
                  <Box
                    borderRadius={{ base: '0px', md: '10px' }}
                    _hover={{ cursor: 'pointer' }}
                    overflow="hidden"
                    objectFit="cover"
                  >
                    {images && (
                      <InnerImageZoom
                        className="imageZoom"
                        borderRadius={{ base: '0px', md: '10px' }}
                        src={
                          images.length > 0
                            ? images?.[activeImage]
                            : '/images/default/default_card.svg'
                        }
                        fallbackSrc="/images/default/default_card.svg"
                      />
                    )}
                  </Box>

                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    w="100%"
                    my="36px"
                  >
                    {images.map((image, i) => (
                      <Image
                        key={`detail-${i}`}
                        width="76px"
                        height="57px"
                        objectFit="cover"
                        src={image}
                        border="2px solid"
                        mx="8px"
                        borderColor={
                          i === activeImage ? 'pink.100' : 'transparent'
                        }
                        fallbackSrc="/images/default/default_card.svg"
                        borderRadius="10px"
                        _hover={{ cursor: 'pointer' }}
                        onClick={() => setActiveImage(i)}
                      />
                    ))}
                  </Flex>
                </Box>
                {/* Description */}
                <Box p={{ base: '1em', md: '0' }}>
                  <Text>{caption}</Text>
                </Box>
                {/* USER EDIT POST */}
                {isUserPost && (
                  <Flex justifyContent="center" my="2em">
                    <Box borderRadius="10px" bg="lightgray" overflow="hidden">
                      <Button
                        color="siteGray"
                        fontWeight="normal"
                        borderRadius={0}
                        bg="lightGray"
                        py="2em"
                      >
                        Edit
                      </Button>
                      <Button
                        color="siteGray"
                        fontWeight="normal"
                        borderRadius={0}
                        bg="lightGray"
                        py="2em"
                      >
                        Edit shot details
                      </Button>
                      <Button
                        color="red.100"
                        fontWeight="normal"
                        borderRadius={0}
                        bg="lightGray"
                        py="2em"
                        onClick={async () => {
                          let result = confirm(
                            'Are you sure you want to delete this screenshot?'
                          );
                          if (result) {
                            deletePost(selectedPost).then(() => {
                              handleClose();
                              location.reload(true);
                            });
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Flex>
                )}
              </Container>
            </Container>
          </Box>
          {/* Floating user section */}
          <Box
            className="floating-user"
            display={{ base: 'none', md: 'block' }}
          >
            <Flex position="sticky" top="60px">
              <Box>
                <Flex direction="column">
                  <Image
                    height="40px"
                    src={profileImg}
                    borderRadius="50%"
                    mb="16px"
                  />
                  <IconButton
                    mb="16px"
                    variant="outline"
                    colorScheme="gray"
                    aria-label="Send email"
                    icon={<ChatIcon />}
                  />
                  <IconButton
                    mb="16px"
                    variant="outline"
                    colorScheme="gray"
                    aria-label="Send email"
                    icon={<ExternalLinkIcon />}
                  />
                  <IconButton
                    mb="16px"
                    variant="outline"
                    colorScheme="gray"
                    aria-label="Send email"
                    icon={<InfoOutlineIcon />}
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Divider />
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
