import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { FilterNav } from '@components/landing';
import { getPosts } from '@features/listSlice';

export function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          item.image = `https://source.unsplash.com/random/?${item.title}`;
        });
        dispatch(getPosts(data));
      });
  }, []);

  const posts = useSelector((state) => state.list.posts);
  return (
    <Container maxW="95%">
      <FilterNav />
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {posts.map((item, i) => (
          <Flex direction="column" gap="2" key={`projects${i}`}>
            <Card
              title={item.title}
              img={item.image}
              height="250px"
              objectFit="cover"
            />
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
