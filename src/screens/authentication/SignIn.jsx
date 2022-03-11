import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';
import { Banner, SignInForm } from '@components/auth';

import { auth } from '../../firebase';

export function SignIn() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/');
  }, [user, loading]);
  return (
    <Box>
      <Flex>
        <Banner />
        <SignInForm />
      </Flex>
    </Box>
  );
}
