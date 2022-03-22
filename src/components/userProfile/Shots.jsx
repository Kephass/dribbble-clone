import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { useRecoilValue } from 'recoil';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';

import { userStateAtom } from '../../data/atoms';
import { postsCollectionRef } from '../../firestore.collections';

export const Shots = () => {
  const user = useRecoilValue(userStateAtom);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user) {
      return onSnapshot(postsCollectionRef('user', user), (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
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
