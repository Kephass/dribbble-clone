import React, { useState } from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { NavButton } from '@components/';
import { InputUi } from '@components/ui';

import { sendPasswordReset } from '../../firebase';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  return (
    <Box minH="100vh" width="70%" bg="white">
      <Flex flex-grow="0" width="100%" alignItems="center" p="30px 30px 0">
        <NavButton></NavButton>
        <Spacer />
        <Text flex-grow="1" text-align="right">
          Not a member?{' '}
          <Link to="/signup" color="purple.150">
            Sign up now
          </Link>
        </Text>
      </Flex>
      <Flex
        width="100%"
        minH="calc(100vh - 70px)"
        align="center"
        justifyContent="center"
      >
        <Container maxW="500px">
          <Flex direction="column">
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
              >
                Send Reset Instructions
              </Button>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
