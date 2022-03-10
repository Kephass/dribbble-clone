import { Box, Button,Container, Flex, Spacer, Text } from '@chakra-ui/react';

import { List } from './List';
import { Search } from './Search';

export const Body = () => {
  const jobsDummy = [
    {
      title: 'Web & Product Designer',
      location: 'Austin TX',
      logo: 'https://cdn.dribbble.com/users/732492/avatars/normal/7bb885b4424533a2d8806b1f90f97704.png?1613640457&compress=1&resize=96x96',
      post: 'The Graphic Standard',
      type: 'Full-time',
      url: '',
      timeStamp: new Date(),
    },
    {
      title: 'Junior Motion Designer (f/m/d)',
      location: 'MUNICH',
      logo: 'https://cdn.dribbble.com/users/9087000/avatars/normal/c17b734294f990fdc39eedf98fc9f780.png?1631056561&compress=1&resize=84x84',
      post: 'BDA Creative GmbH',
      type: 'Full-time',
      url: '',
      timeStamp: new Date(),
    },
  ];

  return (
    <Container maxW="container.xl" mt="5">
      <Flex>
        <Box>
          <Text fontWeight="black" fontSize="2xl">
            Recent new opportunities
          </Text>
          <Text fontWeight="light" fontSize="sm" mb="1">
            {jobsDummy.length} new opportunities posted today!
          </Text>
        </Box>
        <Spacer />
        <Button
          colorScheme="pink"
          variant="solid"
          mt="5"
          display={{ base: 'block', md: 'none' }}
        >
          Filter
        </Button>
      </Flex>

      <Flex my="10" width="100%">
        <List jobs={jobsDummy} />
        <Box ml="5">
          <Search border="1px solid" />
        </Box>
      </Flex>
    </Container>
  );
};
