import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { getPosts } from '@features/listSlice';

export function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        dispatch(getPosts(data));
      });
  }, []);

  const posts = useSelector((state) => state.list.posts);
  return (
    <Container maxW="8xl">
      <Grid
        p="5"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {posts.map((item, i) => (
          <Flex direction="column" gap="2" key={`projects${i}`}>
            <Card title={item.title} img={item.url} />
            <CardText
              text={item.title}
              img={item.thumbnailUrl}
              likes={item.id}
              views={item.id}
            />
          </Flex>
        ))}
      </Grid>
    </Container>
  );
}
