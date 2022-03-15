import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link as AuthLink,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { auth, logout } from '../firebase';

const Links = [
  {
    title: 'Inspiration',
    url: 'shots',
  },
  {
    title: 'Find Work',
    url: 'jobs',
  },
  {
    title: 'Learn Design',
    url: 'learn',
  },
  {
    title: 'Go Pro',
    url: 'pro',
  },
  {
    title: 'Marketplace',
    url: 'marketplace',
  },
  {
    title: 'Hire Designers',
    url: 'hiring',
  },
];

export const Header = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        borderBottom="1px"
        borderColor="gray.200"
        fontWeight="bold"
        fontSize="sm"
        color="siteGray"
        px={4}
        py={2}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/">
              <Image
                src={`${process.env.REACT_APP_DOMAIN}/images/brand/logo.svg`}
                height="25px"
              />
            </Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link to={link.url} key={link.url}>
                  <Text _hover={{ color: '#E26D5C' }}>{link.title}</Text>
                </Link>
              ))}
            </HStack>
          </HStack>
          {user ? (
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  mr={4}
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    bg="gray"
                    name={user?.displayName}
                    src={user?.photoURL}
                    size={'sm'}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/users">Profile</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>Edit Profile</MenuItem>
                  <MenuItem>Edit Work Preferences</MenuItem>
                  <MenuDivider />
                  <MenuItem>My Likes</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </Menu>
              <Link to="uploads">
                <Button variant={'solid'} colorScheme={'pink'} size={'sm'}>
                  Upload
                </Button>
              </Link>
            </Flex>
          ) : (
            <Flex align="center">
              <AuthLink href="/signin" fontWeight="normal">
                Sign in
              </AuthLink>
              <Text mx="5px" fontSize="lg" fontWeight="normal">
                /
              </Text>
              <AuthLink href="/signup" fontWeight="normal">
                Sign up
              </AuthLink>
              <Button ml="20px" my="40px" colorScheme="pink">
                Start a free project
              </Button>
            </Flex>
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link to={link.url} key={link.url}>
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
