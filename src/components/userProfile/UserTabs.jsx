import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
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
  let { tab } = useParams();
  const [defaultIndex, setDefaultIndex] = useState(0);

  const navigate = useNavigate();
  const user = useRecoilValue(userStateAtom);
  const [userPosts, setUserPosts] = useRecoilState(userPostsStateAtom);
  const [userLikedPosts, setUserLikedPosts] = useRecoilState(
    userLikedPostsStateAtom
  );
  const [tabs, setTabs] = useState([
    { key: 0, value: 'shots', title: `Shots`, shotsLength: 0 },
    { key: 1, value: 'boosted', title: `Boosted` },
    { key: 2, value: 'collections', title: 'Collections' },
    { key: 3, value: 'likes', title: `Liked Shots`, shotsLength: 0 },
    { key: 4, value: 'about', title: 'About' },
  ]);

  useEffect(() => {
    const newTabs = [...tabs].map((tab) => {
      if (tab.value === 'shots') tab.shotsLength = userPosts.length;
      if (tab.value === 'likes') tab.shotsLength = userLikedPosts.length;

      return tab;
    });
    setTabs(newTabs);
  }, [userPosts, userLikedPosts]);

  useEffect(() => {
    tabs.forEach((currentTab) => {
      if (currentTab.value === tab) setDefaultIndex(currentTab.key);
    });
  }, [tab, tabs]);

  useEffect(() => {
    if (user) {
      getUserAndLikedPosts(user).then((result) => {
        setUserPosts(result.filter((posts) => posts.uid === user.localId));
        setUserLikedPosts(
          result.filter((posts) => posts.likes?.includes(user.localId))
        );
      });
    }
  }, [user]);
  return (
    <Container maxW="9xl" p="3rem">
      <Tabs pb="4rem" fontWeight="medium" isLazy index={defaultIndex}>
        <TabList>
          {tabs.map(({ key, value, title, shotsLength }) => (
            <Tab
              key={key}
              onClick={() =>
                navigate(`/users/${user?.displayName.split(' ')[0]}/${value}`)
              }
              id={value}
              _focus={{
                outline: 'none',
                ring: 'none',
              }}
            >
              {title} {shotsLength}
            </Tab>
          ))}
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
                <Shots posts={userPosts} setPosts={setUserPosts} />
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
            <AnimatePresence exitBeforeEnter>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                <Shots posts={userLikedPosts} setPosts={setUserLikedPosts} />
              </motion.div>
            </AnimatePresence>
          </TabPanel>
          <TabPanel p={0}>
            <About user={user} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
