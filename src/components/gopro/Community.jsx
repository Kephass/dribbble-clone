import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export function Community() {
  return (
    <Box>
      <Text
        fontWeight="bold"
        fontSize={{ base: 'xl', lg: '3xl' }}
        mb="4"
        align="center"
      >
        Dribbble is the heart of the design community
      </Text>
      <Text
        fontWeight="medium"
        fontSize={{ base: 'md', lg: 'lg' }}
        mb="4"
        align="center"
      >
        No matter your discipline, Dribbble's got you covered for your unique
        career.
      </Text>
      {/* <MotionBox
        position="absolute"
        left="0"
        display="flex"
        gap="5"
        flexShrink="0"
        whiteSpace="nowrap"
        animate={{ x: [0, 100] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        overflowX="none"
      >
        <Text>Graphic Design</Text>
        <Text>Visual Design</Text>
        <Text>Catalog Design</Text>
        <Text>Print Design</Text>
        <Text>Brochure Design</Text>
        <Text>Illustration</Text>
        <Text>Product Design</Text>
        <Text>Graphic Design</Text>
        <Text>Catalog Design</Text>
        <Text>Visual Design</Text>
        <Text>Print Design</Text>
        <Text>Brochure Design</Text>
        <Text>Illustration</Text>
        <Text>Product Design</Text>
      </MotionBox> */}
    </Box>
  );
}
