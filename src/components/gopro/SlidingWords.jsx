import { motion } from 'framer-motion';

import { Box, Text } from '@chakra-ui/react';

const MotionBox = motion(Box);

export function SlidingWords({ moveRight, secondList }) {
  const direction = moveRight ? [-2500, 0] : [0, -2500];

  const arr = [
    'Graphic Design',
    'Visual Design',
    'Catalog Design',
    'Print Design',
    'Brochure Design',
    'Illustration',
    'Product Design',
    'Graphic Design',
    'Visual Design',
    'Catalog Design',
    'Print Design',
    'Brochure Design',
    'Illustrations',
    'Product Design',
  ];
  const arr2 = [
    'AI Design',
    'Graphic Design',
    'iOS Design',
    'Animation',
    'UX/UI Design',
    'Animation',
    'Product Design',
    'Illustration',
    'AI Design',
    'Graphic Design',
    'iOS Design',
    'Animation',
    'UX/UI Design',
    'Animation',
    'Product Design',
    'Illustration',
  ];

  return (
    <MotionBox
      position="relative"
      left="0"
      animate={{ x: direction }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      height={{ base: '55px', lg: '70px' }}
    >
      <Box
        display="flex"
        width="5000px"
        letterSpacing="tighter"
        justifyContent="space-around"
        whiteSpace="nowrap"
        fontSize="5xl"
        fontWeight="bold"
        color="gray.200"
      >
        {secondList
          ? arr2.map((item,i) => <Text key={`slidingwordlist1${i}`}>{item}</Text>)
          : arr.map((item,i) => <Text key={`slidingwordlist2${i}`}>{item}</Text>)}
      </Box>
    </MotionBox>
  );
}
