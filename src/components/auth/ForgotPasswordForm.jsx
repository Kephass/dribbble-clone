import React, { useState } from 'react';
import { Link as Router } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { InputUi } from '@components/ui';

import { sendPasswordReset } from '../../firebase';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  return (
    <Box minH="100vh" width="70%" bg="white">
      <Flex flex-grow="0" width="100%" alignItems="center" p="30px 30px 0">
        <Link
          as={Router}
          to="/signin"
          align-self="flex-start"
          align-items="center"
          width="40px"
          height="40px"
          borderRadius="50%"
          border="1px solid #e0e0e0"
          fontSize="10px"
          left="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <svg
            fill="#6e6d7a"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            role="img"
            className="icon caret-left"
          >
            <path d="m13.532 4.585-7.532 7.415 7.532 7.415c.792.779 2.081.779 2.873 0s.792-2.049 0-2.829l-4.659-4.586 4.659-4.587c.384-.378.595-.88.595-1.414s-.211-1.036-.595-1.414c-.792-.78-2.082-.78-2.873 0z"></path>
          </svg>
        </Link>
        <Spacer />
        <Text flex-grow="1" text-align="right">
          Not a member?{' '}
          <Link as={Router} to="/signup" color="purple.150">
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
