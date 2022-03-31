import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';

import Modal from '../ModalPost';

export const Shots = ({ posts, setPosts }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const close = (post) => {
    setModalOpen(false);
    setSelectedPost(post);
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
          <Flex
            width="100%"
            direction="column"
            gap="2"
            key={`${post.docId}${i}`}
            onClick={() => (modalOpen ? close(post) : open(post))}
          >
            <Card
              item={post}
              id={post.docId}
              height="250px"
              objectFit="cover"
              setPosts={setPosts}
            />
            <CardText item={post} id={post.docId} />
          </Flex>
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
            item={selectedPost}
            setPosts={setPosts}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};
