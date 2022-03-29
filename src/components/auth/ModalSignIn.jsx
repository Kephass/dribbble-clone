import { useState } from 'react';
import { Link as Router } from 'react-router-dom';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Link,
} from '@chakra-ui/react';
import { GoogleButton, SignInUpLink, TwitterButton } from '@components/auth';
import { InputUi } from '@components/ui';

import { logInWithEmailAndPassword } from '../../firebase';

export function ModalSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email) alert('Please enter email');
    logInWithEmailAndPassword(email, password);
  };
  return (
    <Flex direction="column">
      <Container>
        <Flex direction="column" gap="4">
          <Box display="flex">
            <GoogleButton width="100%" />
            <TwitterButton />
          </Box>
          <Box>
            <Flex direction="column" gap="8">
              <Box>
                <InputUi
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  inputStyle={{
                    backgroundColor: '#f3f3f4',
                  }}
                />
              </Box>
              <InputUi
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                inputStyle={{
                  backgroundColor: '#f3f3f4',
                }}
              />
            </Flex>
            <Flex mt="4" direction="column" alignItems="flex-end">
              <Link
                fontSize="xs"
                as={Router}
                to="/forgotpassword"
                color="pink.500"
              >
                Forgot your password?
              </Link>
              <Button mt="2" width="full" colorScheme="pink" onClick={login}>
                Sign in
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Divider borderColor="gray.300" my="5" />
      <Center width="100%">
        <SignInUpLink
          position="inherit"
          url="/signup"
          text="Not a member?"
          linkText="  Sign up"
          color="pink.500"
          weight="bold"
        />
      </Center>
    </Flex>
  );
}
