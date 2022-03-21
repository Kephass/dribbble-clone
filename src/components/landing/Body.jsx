import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { FilterNav } from '@components/landing';

// import { getPosts } from '@features/listSlice';
import { postsCollectionRef } from '../../firestore.collections';

export function Body() {
  // const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(postsCollectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
