import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';

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
  Text,
} from '@chakra-ui/react';
import { userStateAtom } from '@data/atoms';

import Backdrop from './Backdrop';

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
    title,
    likes = [],
    profileImg,
    displayName,
    caption,
  } = item;
  const user = useRecoilValue(userStateAtom);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box position="relative">
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
                        <Text fontWeight="light">
                          Risang Kuncoro for Plainthing Studio • Follow • Hire
                          Us
                        </Text>
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
                    <Link to="Like" ml="12px">
                      <Button
                        leftIcon={<HeartFilled />}
                        h="40px"
                        variant={'solid'}
                        colorScheme={'pink'}
                        size={'sm'}
                        p="10px 16px"
                      >
                        Like
                      </Button>
                    </Link>
                  </Box>
                </Flex>
              </Container>
              <Container maxW="925px" my="40px">
                {/* Image */}
                <Box>
                  <Image
                    width="100%"
                    objectFit="cover"
                    src={images}
                    fallbackSrc="/images/default/default_card.svg"
                    borderRadius="10px"
                    _hover={{ cursor: 'pointer' }}
                  />
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
                        borderColor={
                          i === activeImage ? 'pink.100' : 'transparent'
                        }
                        fallbackSrc="/images/default/default_card.svg"
                        borderRadius="10px"
                        _hover={{ cursor: 'pointer' }}
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
