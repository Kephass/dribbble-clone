import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { userStateAtom } from '../../data/atoms';
import {
  handleUpdateUserProfile,
  handleUserFromFirestore,
} from '../../firestore.collections';

export const UserProfileHeader = () => {
  //Get user from recoil
  const user = useRecoilValue(userStateAtom);

  //Open user info form modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();

  //User info
  const [userInfo, setUserInfo] = useState(null);
  const title = user?.displayName;
  const avatar = user?.photoUrl;

  //set user information
  const [biography, setBiography] = useState();

  let handleBiographyChange = (e) => {
    let inputValue = e.target.value;
    setBiography(inputValue);
    console.log(biography);
  };
  useEffect(() => {
    if (user) {
      handleUserFromFirestore(user.localId).then((res) => {
        setUserInfo(res);
      });
    }
  }, [user]);
  console.log(userInfo);

  return (
    <>
      {userInfo ? (
        <HStack justifyContent="center" spacing="12" p="4rem">
          <Box>
            <Image
              borderRadius="full"
              boxSize="130px"
              src={avatar}
              alt={title}
            />
          </Box>
          <VStack alignSelf="flex-start">
            <Heading align="center">{title}</Heading>
            <Text alignSelf="flex-start" color="siteGray">
              {userInfo.location}
            </Text>
            <HStack alignSelf="flex-start">
              <Button
                fontSize=".9rem"
                bgColor="white"
                border="1px solid"
                borderColor="gray.200"
                onClick={onOpen}
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
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Profile</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Biography</FormLabel>
                  <Textarea
                    ref={initialRef}
                    defaultValue={userInfo.biography}
                    onChange={handleBiographyChange}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Skills</FormLabel>
                  <Textarea defaultValue={userInfo.skills} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Location</FormLabel>
                  <Input defaultValue={userInfo.location} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="pink"
                  mr={3}
                  onClick={handleUpdateUserProfile}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      ) : (
        'Getting user info'
      )}
    </>
  );
};
