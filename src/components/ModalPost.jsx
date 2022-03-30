import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import InnerImageZoom from 'react-inner-image-zoom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

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
import { allPostsStateAtom, userStateAtom } from '@data/atoms';

import { userLogInModal } from '../data/atoms';
import { likePost, viewPost } from '../firebase';

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

const Modal = ({ handleClose, item }) => {
  const {
    docId,
    images,
    likes = [],
    views = 0,
    profileImg,
    displayName,
    caption,
  } = item;
  const setPosts = useSetRecoilState(allPostsStateAtom);
  const setLogInModal = useSetRecoilState(userLogInModal);
  const user = useRecoilValue(userStateAtom);
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [loading, setLoading] = useState(false);

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
    likePost(user, docId, setPosts, isLiked).then(() => setLoading(false));
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
          <Box p="64px 120px">
            <Container maxW="1172px" w="100%">
              {/* User */}
              <Container maxW="768px">
                <Flex>
                  <Box>
                    <Flex>
                      <Image
                        height="48px"
                        src={profileImg}
                        borderRadius="50%"
                        mr="16px"
                      />
                      <Flex direction="column">
                        <Text fontWeight="bold">{displayName}</Text>
                        <Flex>
                          <Text fontWeight="light">
                            Risang Kuncoro for Plainthing Studio • Follow •
                          </Text>
                          <Text fontWeight="light" color="pink.100" ml="8px">
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
                      {isLiked ? likes.length : 'Like'}
                    </Button>
                  </Box>
                </Flex>
              </Container>
              <Container maxW="925px" my="40px">
                {/* Image */}
                <Box>
                  {/* <Image width="100%" objectFit="cover" src={images} /> */}
                  <Box
                    borderRadius="10px"
                    _hover={{ cursor: 'pointer' }}
                    overflow="hidden"
                    objectFit="cover"
                  >
                    <InnerImageZoom
                      className="imageZoom"
                      src={images[activeImage]}
                      fallbackSrc="/images/default/default_card.svg"
                    />
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
                <Box>
                  <Text>{caption}</Text>
                </Box>
              </Container>
            </Container>
          </Box>
          {/* Floating user section */}
          <Box className="floating-user">
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
