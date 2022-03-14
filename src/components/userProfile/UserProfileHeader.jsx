import { useAuthState } from 'react-firebase-hooks/auth';

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

import { auth } from '../../firebase';

export const UserProfileHeader = () => {
  const [user] = useAuthState(auth);
  const title = user?.displayName;
  return (
    <HStack justifyContent="center" spacing="12" p="4rem">
      <Box>
        <Image
          borderRadius="full"
          boxSize="130px"
          src={user?.photoURL}
          alt="Dan Abramov"
        />
      </Box>
      <VStack alignSelf="flex-start">
        <Heading align="center">{title}</Heading>
        <Text alignSelf="flex-start" color="siteGray">
          Antwerp
        </Text>
        <HStack alignSelf="flex-start">
          <Button
            fontSize=".9rem"
            bgColor="white"
            border="1px solid"
            borderColor="gray.200"
          >
            Edit Profile
          </Button>
          <Button
            fontSize="1rem"
            alignItems="center"
            bgColor="white"
            border="1px solid"
            borderColor="gray.200"
          >
            ...
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};
