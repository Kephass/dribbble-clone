import { useEffect, useState } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';

import { auth } from '../../firebase';
import { postsCollectionRef } from '../../firestore.collections';

export const Shots = () => {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(postsCollectionRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);
  //console.log(posts[0].data);

  return (
    <Container maxW="100%" my="0" py="0">
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(334px, 1fr))"
      >
        {posts.map((item, i, likes, views) =>
          item.data.uid === user.uid ? (
            <Flex direction="column" gap="2" key={`shots-${i}`}>
              <Card
                item={item.data}
                id={item.id}
                height="250px"
                objectFit="cover"
              />
              <CardText item={item.data} />
            </Flex>
          ) : (
            ''
          )
        )}
      </Grid>
    </Container>
  );
};
