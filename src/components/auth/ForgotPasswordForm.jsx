import React, { useState } from 'react';
import { Link as Router } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { NavButton } from '@components/';
import { SignInUpLink } from '@components/auth';
import { InputUi } from '@components/ui';

import { sendPasswordReset } from '../../firebase';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  return (
    <Flex
      minH="100vh"
      width={{ base: '100%', md: '70%' }}
      bg="white"
      align={{ base: 'flex-start', md: 'center' }}
      justifyContent="center"
    >
      <Flex
        width={{ base: '90%', md: '100%' }}
        minH={{ base: 'auto', md: '100vh' }}
        mt={{ base: '3em', md: '0' }}
        align={{ base: 'flex-start', md: 'center' }}
        justifyContent="center"
        direction="column"
        position="relative"
      >
        <Container maxW="500px">
          <Flex direction="column">
            <Link as={Router} to="/">
              <Image
                src={`${process.env.REACT_APP_DOMAIN}/images/brand/logo.svg`}
                height="25px"
                mb="12px"
                display={{ md: 'none' }}
              />
            </Link>
            <Text fontSize="2xl" fontWeight="bold" mb="20px">
              Forgot Password?
            </Text>
            <Text mb="20px">
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </Text>
            <Text>
              For security reasons, we do NOT store your password. So rest
              assured that we will never send your password via email.
            </Text>
            <Box mt="40px">
              <Flex direction="column">
                <Box mb="20px">
                  <InputUi
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email Address"
                    inputStyle={{
                      backgroundColor: '#f3f3f4',
                    }}
                  ></InputUi>
                </Box>
              </Flex>
              <Button
                colorScheme="pink"
                onClick={() => sendPasswordReset(email)}
                disabled={email ? false : true}
                width={{ base: '100%', md: 'auto' }}
              >
                Send Reset Instructions
              </Button>
            </Box>
          </Flex>
        </Container>
        <Flex
          width={{ base: '90%', md: 'calc(100% - 72px)' }}
          minH={{ base: 'auto', md: '100vh' }}
          justifyContent="center"
          direction="column"
          position={{ base: 'inherit', md: 'absolute' }}
          top="24px"
          left="36px"
          right="36px"
          display={{ base: 'none', md: 'flex' }}
        >
          <NavButton></NavButton>
          <Spacer />
          <SignInUpLink
            url="/signup"
            text="Not a member?"
            linkText="Sign up now"
            top="0"
            right="0"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
