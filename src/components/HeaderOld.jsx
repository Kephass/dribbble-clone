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
import { motion } from 'framer-motion';

export const Header = () => {
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
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Stack direction={['column', 'row']} spacing="1.5rem" alignSelf="center">
        <NavLink to="/">
          <Image src="images/brand/logo.svg" height="25px" />
        </NavLink>
        <NavLink to="shots">Inspiration</NavLink>
        <NavLink to="jobs">Find Work</NavLink>
        <NavLink to="learn">Learn Design</NavLink>
        <NavLink to="pro">GoPro</NavLink>
        <NavLink to="marketPlace">Marketplace</NavLink>
        <NavLink to="hiring">Hire Designers</NavLink>
      </Stack>
      <Spacer />
      <Stack direction={['column', 'row']} spacing="1.5rem" alignSelf="center">
        <NavLink to="user">
          <Avatar name="Felix" src="images/default/avatar.jpeg" height="35px" />
        </NavLink>
        <NavLink to="uploads">
          <Button colorScheme="pink">Upload</Button>
        </NavLink>
      </Stack>
    </Flex>
  );
};
