import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { CheckCircleIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { userStateAtom } from '@data/atoms';

import {
  handleUpdateUserPremium,
  handleUserFromFirestore,
} from '../firestore.collections';

function Premium() {
  const navigate = useNavigate();
  const user = useRecoilValue(userStateAtom);

  useEffect(() => {
    if (user) {
      handleUserFromFirestore(user.localId).then((res) => {
        handleUpdateUserPremium(res.docId).then(() => navigate);
      });
    }
  }, [user]);
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      flexDirection={'row'}
    >
      <CheckCircleIcon color="green" fontSize="6xl" mr="12px" />
      <Text fontSize="4xl">Bedankt dat je je hebt geabonneerd!</Text>
    </Flex>
  );
}

export default Premium;
