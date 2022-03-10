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
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

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
              <Image src="images/brand/logo.svg" height="25px" />
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
                  name="Felix"
                  src="images/default/avatar.jpeg"
                  size={'sm'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Edit Profile</MenuItem>
                <MenuItem>Edit Work Preferences</MenuItem>
                <MenuDivider />
                <MenuItem>My Likes</MenuItem>
              </MenuList>
            </Menu>
            <Link to="uploads">
              <Button variant={'solid'} colorScheme={'pink'} size={'sm'}>
                Upload
              </Button>
            </Link>
          </Flex>
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
