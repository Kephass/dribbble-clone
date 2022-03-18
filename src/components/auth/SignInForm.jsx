import React, { useState } from 'react';
import { Link as Router } from 'react-router-dom';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormLabel,
  Image,
  Input,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { GoogleButton, SignInUpLink, TwitterButton } from '@components/auth';
import { InputUi } from '@components/ui';

import { logInWithEmailAndPassword } from '../../firebase';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
                    <Link as={Router} to="/forgotpassword" color="purple.150">
                      Forgot password?
                    </Link>
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
                width={{ base: '100%', md: 'auto' }}
              >
                Sign in
              </Button>
            </Box>
          </Flex>
        </Container>
        <Center width="100%">
          <SignInUpLink
            url="/signup"
            text="Not a member?"
            linkText="Sign up now"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
