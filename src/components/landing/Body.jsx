import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { FilterNav } from '@components/landing';

import { userStateAtom } from '../../data/atoms';
import { postsCollectionRef } from '../../firestore.collections';

export function Body() {
  let { tag } = useParams();
  const [posts, setPosts] = useState([]);
  const user = useRecoilValue(userStateAtom);
  useEffect(
    () =>
      onSnapshot(postsCollectionRef('tags', user, tag), (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }),
    [tag, user]
  );

  return (
    <Container maxW="95%" overflow="hidden">
      <FilterNav />
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {posts.map((item) => (
          <Flex direction="column" gap="2" key={item.id}>
            <Card
              item={item.data}
              id={item.id}
              height="250px"
              objectFit="cover"
            />
            <CardText item={item.data} id={item.id} />
          </Flex>
        ))}
      </Grid>
    </Container>
  );
}
