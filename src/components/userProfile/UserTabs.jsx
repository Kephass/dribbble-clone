import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { About, Shots } from '@components/userProfile';
import {
  userLikedPostsStateAtom,
  userPostsStateAtom,
  userStateAtom,
} from '@data/atoms';

import { getUserAndLikedPosts } from '../../firestore.collections';

export const UserTabs = () => {
  const user = useRecoilValue(userStateAtom);
  const [userPosts, setUserPosts] = useRecoilState(userPostsStateAtom);
  const [userLikedPosts, setUserLikedPosts] = useRecoilState(
    userLikedPostsStateAtom
  );

  useEffect(() => {
    if (user) {
      getUserAndLikedPosts(user).then((result) => {
        setUserPosts(result.filter((posts) => posts.uid === user.localId));
        setUserLikedPosts(
          result.filter((posts) => posts.likes.includes(user.localId))
        );
      });
    }
  }, [user]);

  console.log(user);
  return (
    <Container maxW="9xl" p="3rem">
      <Tabs pb="4rem" fontWeight="medium" isLazy>
        <TabList>
          <Tab>Shots {userPosts.length}</Tab>
          <Tab>Boosted Shots</Tab>
          <Tab>Collections</Tab>
          <Tab>Liked Shots {userLikedPosts.length}</Tab>
          <Tab>About</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                <Shots posts={userPosts} />
              </motion.div>
            </AnimatePresence>
          </TabPanel>
          <TabPanel p={0}>
            <p>two!</p>
          </TabPanel>
          <TabPanel p={0}>
            <p>three!</p>
          </TabPanel>
          <TabPanel p={0}>
            <Shots posts={userLikedPosts} />
          </TabPanel>
          <TabPanel p={0}>
            <About user={user} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
