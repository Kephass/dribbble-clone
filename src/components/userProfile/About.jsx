import { useEffect, useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { useRecoilState } from 'recoil';

import { FacebookFilled, LinkOutlined, ProfileFilled } from '@ant-design/icons';
import {
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { LocationMarkerIcon } from '@heroicons/react/solid';

import { userInfoStateAtom } from '../../data/atoms';
import { handleUserFromFirestore } from '../../firestore.collections';

export const About = ({ user }) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoStateAtom);
  const [memberSince, setMemberSince] = useState(null);

  useEffect(() => {
    if (user) {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const epoch = new Date(null);
      epoch.setSeconds(new Timestamp(user.createdAt / 1000).seconds);
      const month = monthNames[epoch.getMonth()];
      const year = epoch.getFullYear();
      setMemberSince(`${month} ${year}`);
      handleUserFromFirestore(user.localId).then((res) => {
        setUserInfo(res);
      });
    }
  }, [user]);
  return (
    <Container maxW={'6xl'} marginBottom="15">
      {userInfo ? (
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 17, md: 24 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack width="100%" flex={1} spacing={{ base: 5, md: 10 }}>
            <Text fontSize="md" fontWeight="bold">
              Biography
            </Text>
            {userInfo.biography ? (
              <Text as={'span'} mt="10px !important">
                {userInfo.biography}
              </Text>
            ) : (
              <Text as={'span'} color="pink.100" mt="10px !important">
                Add biography
              </Text>
            )}
            <Text as={'span'} fontSize="md" fontWeight="bold">
              Skills
            </Text>
            <Flex flexFlow="wrap">
              {userInfo.skills ? (
                userInfo.skills.map((skill) => (
                  <Text
                    as={'span'}
                    key={skill}
                    backgroundColor="#fafafb"
                    p=".8rem"
                    mt="10px !important"
                    borderRadius="1.5rem"
                    mr=".5rem"
                  >
                    {skill}
                  </Text>
                ))
              ) : (
                <Text as={'span'} color="pink.100" mt="10px !important">
                  Add Skills
                </Text>
              )}
            </Flex>
            <Divider />
            <HStack color="siteGray" gap="5">
              <Text>0 followers</Text>
              <Text>1 following</Text>
            </HStack>
          </Stack>

          <VStack>
            <HStack
              m="1rem 0"
              justifyContent="space-around"
              width="fill-available"
            >
              <Button
                fontSize="1rem"
                alignItems="center"
                bgColor="white"
                border="1px solid"
                borderColor="gray.200"
                gap="1"
              >
                <FacebookFilled style={{ color: '#3b5998' }} />
                Share
              </Button>
              <Spacer />
              <Button
                fontSize="1rem"
                alignItems="center"
                bgColor="white"
                border="1px solid"
                borderColor="gray.200"
                gap="1"
              >
                <LinkOutlined /> Copy
              </Button>
            </HStack>
            <Flex bgColor="#fafafb" width="100%" borderRadius="8px" p="2rem">
              <VStack align="left" gap="2">
                <HStack>
                  <LocationMarkerIcon
                    style={{ marginRight: '5px', width: '20px' }}
                  />{' '}
                  <Text>{userInfo.location}</Text>
                </HStack>
                <HStack>
                  <ProfileFilled style={{ marginRight: '5px' }} align="left" />
                  <Text>Member since {memberSince}</Text>
                </HStack>
              </VStack>
            </Flex>
            <VStack width="fill-available" align="left" pt="2rem">
              <Text>Social</Text>
              <Text color="pink.100">Add social/portfolio links</Text>
            </VStack>
          </VStack>
        </Stack>
      ) : (
        'Loading'
      )}
    </Container>
  );
};
