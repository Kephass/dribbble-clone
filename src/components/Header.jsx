import { from } from 'form-data';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Stack, Spacer, Button } from '@chakra-ui/react';
import { SmileOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <Flex bg="#white" h="4rem" fontSize="1.1rem" mx="2rem">
      <Stack direction={['column', 'row']} spacing="1.5rem">
        <NavLink to="/">Logo</NavLink>
        <NavLink to="inspiration">Inspiration</NavLink>
        <NavLink to="findWork">Find Work</NavLink>
        <NavLink to="learnDesign">Learn Design</NavLink>
        <NavLink to="goPro">GoPro</NavLink>
        <NavLink to="marketPlace">Marketplace</NavLink>
        <NavLink to="hireDesigners">Hire Designers</NavLink>
      </Stack>
      <Spacer />
      <Stack direction={['column', 'row']} spacing="1.5rem">
        <NavLink to="upload">
          <SmileOutlined />
        </NavLink>
        <NavLink to="upload">
          <Button>Upload</Button>
        </NavLink>
      </Stack>
    </Flex>
  );
};

export default Header;
