import {
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ReactComponent as Logo } from '../svg/logo.svg';

import { ModalSignIn } from './auth/ModalSignIn';

export function ModalNoUser() {
  return (
    <>
      <Modal blockScrollOnMount={false} motionPreset="slideInBottom" isOpen>
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalCloseButton />
          <ModalBody bg="#f4c062" borderTopRadius="2xl" color="#2a2a2b">
            <VStack my="2">
              <Text
                fontSize="sm"
                textAlign="center"
                px="4"
                py="0.5"
                width="fit-content"
                border="2px solid #2a2a2b"
                borderRadius="lg"
              >
                To like a shot, please create an account.
              </Text>
            </VStack>
            <Flex mt="10">
              <Flex direction="column" gap="8">
                <Logo width="128" fill="#2a2a2b" opacity="0.7" />
                <Text fontSize="2xl" lineHeight="normal" fontWeight="bold">
                  Discover the world&apos;s top Designers & Creatives
                </Text>
                <Text fontSize="xs">Art by Matt Carlson</Text>
              </Flex>

              <Image
                objectFit="contain"
                zIndex="0"
                src="/images/default/mario.png"
                width="40"
              />
            </Flex>
          </ModalBody>
          <Box p="5">
            <ModalSignIn />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}
