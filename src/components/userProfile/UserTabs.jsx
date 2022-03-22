import { AnimatePresence, motion } from 'framer-motion';

import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { LikedShots, Shots } from '@components/userProfile';

export const UserTabs = () => {
  return (
    <Container maxW="9xl" p="3rem">
      <Tabs pb="4rem" isLazy>
        <TabList>
          <Tab>Shots</Tab>
          <Tab>Boosted Shots</Tab>
          <Tab>Collections</Tab>
          <Tab>Liked Shots</Tab>
          <Tab>About</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                <Shots />
              </motion.div>
            </AnimatePresence>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <LikedShots />
          </TabPanel>
          <TabPanel>
            <p>Five</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
