import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';

import { auth, postsCollectionRef } from '../../firestore.collections';

export const LikedShots = () => {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    if (user) {
      const unsubscribe = onSnapshot(
        postsCollectionRef('likes'),
        (snapshot) => {
          setPosts(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        }
      );
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return (
    <Container maxW="100%" my="0" py="0">
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(334px, 1fr))"
      >
        {posts.map((item, i) => (
          <Flex direction="column" gap="2" key={`shots-${i}`}>
            <Card item={item.data} height="250px" objectFit="cover" />
            <CardText item={item.data} />
          </Flex>
        ))}
      </Grid>
    </Container>
  );
};
