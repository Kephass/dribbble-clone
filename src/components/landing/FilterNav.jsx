import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
  Search2Icon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import { ColorSwatchIcon } from '@heroicons/react/solid';
import { FilterTabs } from '@ui';

import { links } from './index';

export function FilterNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <Flex align="end" mt="2">
        <Menu isLazy>
          {({ isOpen }) => (
            <>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                border="4px solid transparent"
                _hover={{
                  outline: 'none',
                  border: '4px solid #fef6f9',
                  boxShadow: 'none',
                }}
                boxShadow="lightgray 0px 0px 0px 1px;"
                outline="none"
                _expanded={{
                  border: '4px solid #fef6f9',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                _active={{
                  border: '4px solid #fef6f9',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                _focus={{
                  boxShadow: 'none',
                  border: '4px solid #fef6f9',
                  outline: 'none',
                }}
                fontSize="sm"
                color="grey"
                whiteSpace="nowrap"
              >
                Following {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList>
                <MenuItem>Following</MenuItem>
                <MenuItem>Popular</MenuItem>
                <MenuItem>New & Noteworthy</MenuItem>
                <MenuDivider />
                <MenuItem>Goods for Sale</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
        <Spacer />
        <FilterTabs links={links} display={{ base: 'none', md: 'flex' }} />
        <Spacer />

        <Button
          variant="outline"
          onClick={toggleOpen}
          leftIcon={<HamburgerIcon />}
          _focus={{
            outline: 'none',
            ring: 'none',
          }}
        >
          Filters
        </Button>
      </Flex>
      <Divider my="1em" display={{ base: 'flex', md: 'none' }} />
      <FilterTabs links={links} display={{ base: 'flex', md: 'none' }} />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ height: '0', opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ display: 'none' }}
    >
      <Flex
        mt={{ base: '1em', md: '2em' }}
        gap={{ base: '8px', md: '24px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box width="100%">
          <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
            Tags
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input type="text" backgroundColor="#f3f3f4" />
          </InputGroup>
        </Box>
        <Spacer />
        <Box width="100%">
          <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
            Color
          </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ColorSwatchIcon color="lightgray" width="24px" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Enter hex or select"
              backgroundColor="#f3f3f4"
            />
          </InputGroup>
        </Box>
        <Spacer />

        <Box width="100%">
          <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
            Made With
          </FormLabel>
          <Menu isLazy>
            {({ isOpen }) => (
              <>
                <MenuButton
                  width="100%"
                  height="40px"
                  transition="all 0.2s"
                  borderRadius="md"
                  border="4px solid transparent"
                  _hover={{
                    outline: 'none',
                    border: '4px solid #fef6f9',
                    boxShadow: 'none',
                  }}
                  boxShadow="lightgray 0px 0px 0px 1px;"
                  outline="none"
                  _expanded={{
                    border: '4px solid #fef6f9',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  _active={{
                    border: '4px solid #fef6f9',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  _focus={{
                    boxShadow: 'none',
                    border: '4px solid #fef6f9',
                    outline: 'none',
                  }}
                  fontSize="sm"
                  color="grey"
                  whiteSpace="nowrap"
                  display="flex"
                >
                  <Flex p={1} alignItems="center">
                    All Apps <Spacer />
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>All Apps</MenuItem>
                  <MenuItem>Adobe XD</MenuItem>
                  <MenuItem>Figma</MenuItem>
                  <MenuItem>Sketch</MenuItem>
                  <MenuItem>Unsplash</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
        <Spacer />
        <Box width="100%">
          <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
            Downloads
          </FormLabel>
          <Menu isLazy>
            {({ isOpen }) => (
              <>
                <MenuButton
                  width="100%"
                  height="40px"
                  transition="all 0.2s"
                  borderRadius="md"
                  border="4px solid transparent"
                  _hover={{
                    outline: 'none',
                    border: '4px solid #fef6f9',
                    boxShadow: 'none',
                  }}
                  boxShadow="lightgray 0px 0px 0px 1px;"
                  outline="none"
                  _expanded={{
                    border: '4px solid #fef6f9',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  _active={{
                    border: '4px solid #fef6f9',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  _focus={{
                    boxShadow: 'none',
                    border: '4px solid #fef6f9',
                    outline: 'none',
                  }}
                  fontSize="sm"
                  color="grey"
                  whiteSpace="nowrap"
                  display="flex"
                >
                  <Flex p={1} alignItems="center">
                    All Shots <Spacer />
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>All Shots</MenuItem>
                  <MenuItem>Adobe Illustrator</MenuItem>
                  <MenuItem>Adobe Photoshop</MenuItem>
                  <MenuItem>Adobe XD</MenuItem>
                  <MenuItem>Figma</MenuItem>
                  <MenuItem>Invision Studio</MenuItem>
                  <MenuItem>Sketch</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Flex>
    </motion.div>
  );
}
