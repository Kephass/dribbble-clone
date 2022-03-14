import React from 'react';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon
} from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer
} from '@chakra-ui/react';
import { FilterTabs } from '@ui';

import { links } from './index';

export function FilterNav() {
  return (
    <Flex align="end" mt="2">
      <Menu isLazy>
        {({ isOpen }) => (
          <>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="4px"
              _hover={{
                outline: 'none',
                border: '4px solid #fef6f9'
              }}
              outline="none"
              _expanded={{ border: '4px solid #fef6f9', outline: 'none' }}
              _active={{ border: '4px solid #fef6f9', outline: 'none' }}
              _focus={{
                boxShadow: 'outline',
                border: '4px solid #fef6f9',
                outline: 'none'
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
      <FilterTabs links={links} />
      <Spacer />
      <Button variant="outline" leftIcon={<HamburgerIcon />}>
        {' '}
        Filters
      </Button>
    </Flex>
  );
}
