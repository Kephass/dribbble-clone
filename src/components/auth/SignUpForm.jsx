import React, { useState } from 'react';
import { Link as Router } from 'react-router-dom';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';
import { GoogleButton, TwitterButton } from '@components/auth';
import { InputUi } from '@components/ui';

import { registerWithEmailAndPassword } from '../../firebase';

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };
  return (
    <Box minH="100vh" width="70%" bg="white">
      <Flex width="100%" minH="100vh" align="center" justifyContent="center">
        <Box position="absolute" top="24px" right="36px">
          <Text>
            Already a member?{' '}
            <Link as={Router} to="/signin" color="purple.150">
              Sign in
            </Link>
          </Text>
        </Box>
        <Container maxW="500px">
          <Flex direction="column">
            <Text fontSize="2xl" fontWeight="bold" mb="40px">
              Sign up to Dribbble
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
              <Flex mb="40px">
                <Box mr="6px" width="100%">
                  <InputUi
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                    inputStyle={{
                      backgroundColor: '#f3f3f4',
                    }}
                  ></InputUi>
                </Box>
                <Box ml="6px" width="100%">
                  <InputUi
                    //onChange={(e) => setUser(e.target.value)}
                    label="Username"
                    inputStyle={{
                      backgroundColor: '#f3f3f4',
                    }}
                  ></InputUi>
                </Box>
              </Flex>
              <Flex direction="column">
                <Box mb="40px">
                  <InputUi
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    placeholder="example@mail.com"
                    inputStyle={{
                      backgroundColor: '#f3f3f4',
                    }}
                  ></InputUi>
                </Box>
                <InputUi
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  placeholder="6+ characters"
                  inputStyle={{
                    backgroundColor: '#f3f3f4',
                  }}
                ></InputUi>
              </Flex>
              <Box mt="40px">
                <Checkbox maxW="500px">
                  Creating an account means you’re okay with our{' '}
                  <Link target="_blank" href="/terms" color="pink.100">
                    Terms of Service
                  </Link>
                  ,{' '}
                  <Link target="_blank" href="/privacy" color="pink.100">
                    Privacy Policy
                  </Link>
                  ,{' '}
                  <Link target="_blank" href="/notifications" color="pink.100">
                    Notification Settings
                  </Link>
                  .
                </Checkbox>
              </Box>
              <Button
                my="40px"
                colorScheme="pink"
                onClick={register}
                disabled={name && email && password ? false : true}
              >
                Create Account
              </Button>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
