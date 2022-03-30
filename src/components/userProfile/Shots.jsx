import { Container, Flex, Grid } from '@chakra-ui/react';
import { Card, CardText } from '@components';

export const Shots = ({ posts, setPosts }) => {
  return (
    <Container maxW="100%" my="0" p="0">
      <Grid
        py="32px"
        gap="10"
        templateColumns="repeat(auto-fill, minmax(334px, 1fr))"
      >
        {posts.map((post, i) => (
          <Flex direction="column" gap="2" key={`shots-${i}`}>
            <Card
              item={post}
              id={post.docId}
              height="250px"
              objectFit="cover"
              setPosts={setPosts}
            />
            <CardText item={post} id={post.docId} />
          </Flex>
        ))}
      </Grid>
    </Container>
  );
};
