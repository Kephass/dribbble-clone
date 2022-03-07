import Card from '../Card';
import { getPosts } from '../../features/listSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@chakra-ui/react';

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
  console.log(posts);
  return (
    <Grid p="5" gap="4" templateColumns="repeat(auto-fill, minmax(350px, 1fr))">
      {posts.map((item) => (
        <Card title={item.title} key={item.id} img={item.url} />
      ))}
    </Grid>
  );
}

