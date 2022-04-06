import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';

import {
  Avatar,
  Box,
  Button,
  Flex,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

export function List({ jobs }) {
  return (
    <VStack
      divider={
        <StackDivider borderColor="gray.200" className="findwork-divider" />
      }
      align="stretch"
      width="100%"
    >
      {jobs.map(({ title, timeStamp, post, type, location, logo }, i) => (
        <Box
          key={`jobs${i}`}
          width="100%"
          className="findwork-item"
          py="24px"
          px="24px"
          position="relative"
        >
          <Flex align={{ base: 'start', md: 'center' }}>
            {/* LOGO */}
            {logo && (
              <Box mr="5">
                <Avatar src={logo} borderRadius="50%" size={'md'} />
              </Box>
            )}
            {/* LEFT */}
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{ width: 'md', height: 'xl' }}
                mb="1"
              >
                {title}
              </Text>
              <Flex
                align="center"
                justify={{ base: 'flex-start', md: 'flex-end' }}
              >
                <Text
                  display="flex"
                  fontSize={{ width: 'md', height: 'lg' }}
                  fontWeight="bold"
                  color="siteGray"
                >
                  {post}
                </Text>
                <Text
                  ml="1"
                  fontWeight="light"
                  color="gray"
                  display={{ base: 'none', md: 'initital' }}
                >
                  • {type}
                </Text>
              </Flex>
            </Box>
            <Spacer />
            {/* RIGHT */}
            <Box className="findwork-item-info">
              <Flex align="center" justify="flex-end">
                <Text
                  fontWeight="normal"
                  fontSize="md"
                  mb="1"
                  align="right"
                  display={{ base: 'none', md: 'initital' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '15px', height: '15px' }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Text>
                <Text
                  fontWeight="normal"
                  fontSize="md"
                  mb="1"
                  align="right"
                  ml="1"
                >
                  {location}
                </Text>
              </Flex>
              <Box
                color="siteGray"
                fontSize="md"
                fontWeight="medium"
                display={{ base: 'none', md: 'initital' }}
              >
                <TimeAgo live={false} date={timeStamp} />
              </Box>
            </Box>

            {/* HOVER */}
            <Flex
              position="absolute"
              right="0"
              h="100%"
              display="none"
              align="center"
              className="findwork-item-buttons"
            >
              <Flex>
                <Button colorScheme="gray" bg="white" variant="outline" mr="3">
                  View job
                </Button>
                <Button colorScheme="gray" bg="white" variant="outline">
                  Apply now
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
}

List.propTypes = {
  jobs: PropTypes.array.isRequired,
};
