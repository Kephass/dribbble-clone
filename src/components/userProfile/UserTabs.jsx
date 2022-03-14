import { useAuthState } from 'react-firebase-hooks/auth';

import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

import { auth } from '../../firebase';

export const UserTabs = () => {
  const [user] = useAuthState(auth);
  return (
    <Container maxW="8xl" py="2rem">
      <Tabs pb="4rem">
        <TabList>
          <Tab>Shots{}</Tab>
          <Tab>Boosted Shots</Tab>
          <Tab>Collections</Tab>
          <Tab>Liked Shots</Tab>
          <Tab>About</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>Four</p>
          </TabPanel>
          <TabPanel>
            <p>Five</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
