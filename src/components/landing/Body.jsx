import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';
import { FilterNav } from '@components/landing';

import { getPosts } from '../../firebase';

export function Body() {
  let { tag } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts(tag).then((data) => setPosts(data));
  }, [tag]);

  return (
    <Container maxW="95%" overflow="hidden">
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
              img={item.images}
              height="250px"
              objectFit="cover"
            />
            <CardText
              text={item?.displayName}
              img={item?.profileImg}
              likes={item?.likes?.length}
              views={item?.views?.length}
            />
          </Flex>
        ))}
      </Grid>
    </Container>
  );
}
