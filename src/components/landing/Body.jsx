import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Button, Center, Container, Image, Spinner } from '@chakra-ui/react';
import { ModalNoUser } from '@components';
import { FilterNav } from '@components/landing';
import { allPostsStateAtom, userLogInModal } from '@data/atoms';

import {
  getAllPosts,
  getNewPost,
  limitNumber,
} from '../../firestore.collections';
import { Shots } from '../userProfile/Shots';

export function Body() {
  // Variables
  let { tag, filter } = useParams();
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
        if (result.length <= 0) return setMoreShots(false);
        setPosts((old) => [...old, ...result]);
        setMoreShots(true);
        setMoreShotsIsLoading(false);
      }
    });
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

      <Shots posts={posts} setPosts={setPosts} />
      {logInModal && <ModalNoUser />}

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
