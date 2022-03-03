import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Stack,
  Spacer,
  Button,
  Avatar,
  Image,
} from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      bg="#white"
      h="5rem"
      fontSize="1.1rem"
      maxW="1440px"
      margin="auto"
      fontWeight="bold"
      color="siteGray"
      fontSize="1rem"
    >
      <Stack direction={['column', 'row']} spacing="1.5rem" alignSelf="center">
        <NavLink to="/">
          <Image src="logo.svg" height="25px" />
        </NavLink>
        <NavLink to="inspiration">Inspiration</NavLink>
        <NavLink to="findWork">Find Work</NavLink>
        <NavLink to="learnDesign">Learn Design</NavLink>
        <NavLink to="goPro">GoPro</NavLink>
        <NavLink to="marketPlace">Marketplace</NavLink>
        <NavLink to="hireDesigners">Hire Designers</NavLink>
      </Stack>
      <Spacer />
      <Stack direction={['column', 'row']} spacing="1.5rem" alignSelf="center">
        <NavLink to="user">
          <Avatar name="Felix" src="avatarr.jpeg" height="35px" />
        </NavLink>
        <NavLink to="upload">
          <Button>Upload</Button>
        </NavLink>
      </Stack>
    </Flex>
  );
};

export default Header;
