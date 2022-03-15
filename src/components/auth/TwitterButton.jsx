import React from 'react';

import { Button } from '@chakra-ui/react';

import { ReactComponent as TwitterLogo } from '../../svg/twitterlogo.svg';

export function TwitterButton() {
  return (
    <Button
      display="flex"
      className="register__btn register__twitter"
      bg="#f2f2f2"
      width="47px"
      p="10px 16px"
      ml="16px"
      color="#6e6d7a"
    >
      <TwitterLogo />
    </Button>
  );
}
