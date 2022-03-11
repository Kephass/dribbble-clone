import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Spacer,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';

export function DesignerList({ lists }) {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      align="stretch"
      width="100%"
    >
      {lists.map(({ title, location, price, logo, projects }, i) => (
        <Box
          key={`jobs${i}`}
          width="100%"
          py="24px"
          px="24px"
          position="relative"
        >
          <Flex align="center">
            {/* LOGO */}
            {logo && (
              <Box mr="5">
                <Image
                  src={logo}
                  borderRadius="50%"
                  width="60px"
                  height="60px"
                />
              </Box>
            )}
            {/* LEFT */}
            <Box>
              <Text fontWeight="bold" fontSize="xl" mb="1">
                {title}
              </Text>
              <Flex align="center" justify="flex-end">
                <Text
                  display="flex"
                  fontSize="lg"
                  fontWeight="bold"
                  color="siteGray"
                >
                  {location}
                </Text>
                <Text ml="1" fontWeight="light" color="gray">
                  • {price}
                </Text>
              </Flex>
            </Box>
            <Spacer />
            {/* RIGHT */}
            <Box>
              <Button>Message</Button>
            </Box>
          </Flex>

          <Flex my="24px">
            {projects.map(({ img }, index) => (
              <Link mr="24px" key={`${img}${index}`} w="25%">
                <Image src={img} w="100%" borderRadius="10px" />
              </Link>
            ))}
          </Flex>
        </Box>
      ))}
    </VStack>
  );
}

DesignerList.propTypes = {
  lists: PropTypes.array.isRequired
};
