import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';

import { auth } from '../../firebase';

export const Shots = () => {
  const [user] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <Container maxW="100%" my="0" py="0">
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(334px, 1fr))"
      >
        {posts.map((item, i) =>
          item.uid === user.uid ? (
            <Flex direction="column" gap="2" key={`shots-${i}`}>
              <Card
                title={item.title}
                img={item.images}
                height="250px"
                objectFit="cover"
              />
              <CardText
                likes={item?.likes?.length}
                views={item?.views?.length}
              />
            </Flex>
          ) : (
            ''
          )
        )}
      </Grid>
    </Container>
  );
};
