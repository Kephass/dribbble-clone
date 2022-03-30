import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Spinner,
} from '@chakra-ui/react';
import { Card, CardText, ModalNoUser } from '@components';
import { FilterNav } from '@components/landing';
import { allPostsStateAtom, userLogInModal } from '@data/atoms';

import {
  getAllPosts,
  getNewPost,
  limitNumber,
} from '../../firestore.collections';
import Modal from '../ModalPost';

export function Body() {
  // Variables
  let { tag, filter } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [posts, setPosts] = useRecoilState(allPostsStateAtom);
  const logInModal = useRecoilValue(userLogInModal);
  const [moreShots, setMoreShots] = useState(false);
  const [moreShotsIsLoading, setMoreShotsIsLoading] = useState(false);

  useEffect(async () => {
    return getAllPosts(filter, tag).then((result) => {
      if (result.length < limitNumber) {
        setMoreShots(false);
      } else {
        setMoreShots(true);
      }
      setPosts(result);
    });
  }, [filter, tag]);

  // Functions
  const handleNewPosts = () => {
    setMoreShotsIsLoading(true);
    getNewPost(filter, tag).then((result) => {
      if (result !== undefined) {
        if (result.length <= 0) {
          setMoreShots(false);
        } else {
          setPosts((old) => [...old, ...result]);
          setMoreShots(true);
        }
        setMoreShotsIsLoading(false);
      }
    });
  };

  const close = (post) => {
    setModalOpen(false);
    setSelectedPost(post);
  };
  const open = (post) => {
    setModalOpen(true);
    setSelectedPost(post);
  };
  const checkMenuItemLabel = (f) => {
    switch (f) {
      case 'popular':
        return 'Popular';
      case 'new':
        return 'New & Noteworthy';
      default:
        return 'New & Noteworthy';
    }
  };
  return (
    <Container maxW="95%" overflow="hidden">
      <FilterNav tag={tag} filter={checkMenuItemLabel(filter)} />
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
      {logInModal && <ModalNoUser />}
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
      {moreShots && (
        <Center my="2em">
          <Button onClick={handleNewPosts}>
            {moreShotsIsLoading ? (
              <Spinner size="sm" mr="3" />
            ) : (
              <Image
                _focus={{
                  outline: 'none',
                  ring: 'none',
                }}
                width="20px"
                mr="3"
                fit="contain"
                src="/images/brand/logo-ball.svg"
                borderRadius="10"
              />
            )}
            Load more Shots
          </Button>
        </Center>
      )}
    </Container>
  );
}
