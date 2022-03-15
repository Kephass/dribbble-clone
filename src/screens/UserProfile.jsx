import React from 'react';

import { VStack } from '@chakra-ui/react';
import { UserProfileHeader, UserTabs } from '@components/userProfile';

const UserProfile = () => {
  return (
    <VStack>
      <UserProfileHeader />
      <UserTabs />
    </VStack>
  );
};

export default UserProfile;
