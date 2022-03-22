import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { FilterNav } from '@components/landing';
import { allPostsStateAtom } from '@data/atoms';

import { getAllPosts } from '../../firestore.collections';

export function Body() {
  let { tag } = useParams();
  const [posts, setPosts] = useRecoilState(allPostsStateAtom);

  useEffect(() => {
    return getAllPosts(tag).then((result) => {
      setPosts(result);
    });
  }, [tag]);
  return (
    <Container maxW="95%" overflow="hidden">
      <FilterNav />
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {posts.map((item) => (
          <Flex direction="column" gap="2" key={item.docId}>
            <Card
              item={item}
              id={item.docId}
              height="250px"
              objectFit="cover"
            />
            <CardText item={item} id={item.docId} />
          </Flex>
        ))}
      </Grid>
    </Container>
  );
}
