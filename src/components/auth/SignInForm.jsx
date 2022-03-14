import React, { useState } from 'react';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormLabel,
  Input,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { GoogleButton, TwitterButton } from '@components/auth';
import { InputUi } from '@components/ui';

import { logInWithEmailAndPassword } from '../../firebase';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box minH="100vh" width="70%" bg="white">
      <Flex width="100%" minH="100vh" align="center" justifyContent="center">
        <Container maxW="500px">
          <Flex direction="column">
            <Text fontSize="2xl" fontWeight="bold" mb="40px">
              Sign in to Dribbble
            </Text>
            <Box display="flex">
              <GoogleButton></GoogleButton>
              <TwitterButton></TwitterButton>
            </Box>
            <Divider
              textAlign="center"
              borderColor="gray"
              className="divider"
              width="100%"
              mt="40px"
              _after={{
                content: '"Or"',
                display: 'inline-block',
                position: 'relative',
                top: '-10px',
                padding: '0 16px',
                fontSize: '14px',
                background: 'white',
              }}
            />
            <Box mt="40px">
              <Flex direction="column">
                <Box mb="40px">
                  <InputUi
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    label="Username or Email Address"
                    inputStyle={{
                      backgroundColor: '#f3f3f4',
                    }}
                  ></InputUi>
                </Box>
                <Box>
                  <Flex>
                    <FormLabel
                      htmlFor="first-name"
                      fontWeight="bold"
                      fontSize="md"
                    >
                      Password
                    </FormLabel>
                    <Spacer />
                    <Link color="purple.150">Forgot password?</Link>
                  </Flex>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    bg="btnGray"
                  />
                </Box>
              </Flex>
              <Button
                my="40px"
                colorScheme="pink"
                onClick={() => logInWithEmailAndPassword(email, password)}
                disabled={email && password ? false : true}
              >
                Sign in
              </Button>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
