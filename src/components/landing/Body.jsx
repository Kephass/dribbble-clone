import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Container, Flex, Grid, Text } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { FilterNav } from '@components/landing';
import { allPostsStateAtom } from '@data/atoms';

import { getAllPosts, getNewPost } from '../../firestore.collections';
import Modal from '../ModalPost';

export function Body() {
  let { tag } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [scrollToBottom, setScrollToBottom] = useState(0);
  const [bottomReached, setBottomReached] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [posts, setPosts] = useRecoilState(allPostsStateAtom);

  useEffect(async () => {
    return getAllPosts(tag).then((result) => {
      if (result !== undefined) setPosts(result);
    });
  }, [tag]);

  useEffect(() => {
    if (posts.length > 0) {
      setHasContent(true);
    }
    setBottomReached(false);
  }, [posts]);
  useEffect(async () => {
    return getNewPost(tag).then((result) => {
      if (result !== undefined) return setPosts((old) => [...old, ...result]);
    });
  }, [bottomReached]);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollToBottom(window.scrollY);
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        setBottomReached(true);
      }
    };
    if (!bottomReached && hasContent) {
      window.addEventListener('scroll', onScroll);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollToBottom, hasContent]);

  const close = (post) => {
    setModalOpen(false);
    setSelectedPost(post);
  };
  const open = (post) => {
    setModalOpen(true);
    setSelectedPost(post);
  };
  return (
    <Container maxW="95%" overflow="hidden">
      <FilterNav />
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {posts.map((post) => (
          <Flex
            direction="column"
            gap="2"
            key={post.docId}
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
          />
        )}
      </AnimatePresence>
      {bottomReached && <Text>Loading...</Text>}
    </Container>
  );
}
