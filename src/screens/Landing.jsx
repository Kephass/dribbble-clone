import { useAuthState } from 'react-firebase-hooks/auth';

import { Box } from '@chakra-ui/react';
import { Banner, Body } from '@components/landing';

import { auth } from '../firebase';

function Landing() {
  const [user] = useAuthState(auth);
  return (
    <Box mt={{ base: '62px', md: '0px' }}>
      {!user && <Banner />}
      <Body />
    </Box>
  );
}

export default Landing;
