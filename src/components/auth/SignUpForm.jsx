import React, { useState } from 'react';
import { Link as Router } from 'react-router-dom';

import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { GoogleButton, SignInUpLink, TwitterButton } from '@components/auth';
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
                width={{ base: '100%', md: 'auto' }}
              >
                Create Account
              </Button>
            </Box>
          </Flex>
        </Container>
        <Center width="100%">
          <SignInUpLink
            url="/signin"
            text="Already a member?"
            linkText="  Sign in"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
