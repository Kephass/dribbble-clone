import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Shots } from '@components/userProfile';

export const UserTabs = () => {
  return (
    <Container maxW="9xl" p="3rem">
      <Tabs pb="4rem">
        <TabList>
          <Tab>Shots</Tab>
          <Tab>Boosted Shots</Tab>
          <Tab>Collections</Tab>
          <Tab>Liked Shots</Tab>
          <Tab>About</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Shots />
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
