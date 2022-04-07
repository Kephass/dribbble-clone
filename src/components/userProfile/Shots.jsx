import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSetRecoilState } from 'recoil';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { selectedPostAtom } from '@data/atoms';

import Modal from '../ModalPost';

export const Shots = ({ posts, setPosts }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const setSelectedPost = useSetRecoilState(selectedPostAtom);
  const close = () => {
    setModalOpen(false);
  };
  const open = (post) => {
    setModalOpen(true);
    setSelectedPost(post);
  };
  return (
    <Container maxW="100%" my="0" p="0">
      <Grid
        py="32px"
        gap="10"
        templateColumns={{
          base: 'repeat(auto-fill, minmax(250px, 1fr))',
          md: 'repeat(auto-fill, minmax(350px, 1fr))',
        }}
      >
        {posts.map((post, i) => (
          <AnimatePresence key={`${post.docId}${i}`} exitBeforeEnter>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
            >
              <Flex
                width="100%"
                direction="column"
                gap="2"
                key={`${post.docId}${i}`}
                onClick={() => (modalOpen ? close() : open(post))}
              >
                <Card
                  item={post}
                  id={post.docId}
                  height="250px"
                  objectFit="cover"
                  setPosts={setPosts}
                />
                <CardText item={post} setPosts={setPosts} />
              </Flex>
            </motion.div>
          </AnimatePresence>
        ))}
      </Grid>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            setPosts={setPosts}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};
