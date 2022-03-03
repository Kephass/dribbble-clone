import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function FooterLinks({ title, text }) {
  const arr = text.split(',');
  return (
    <Box>
      <Text fontSize="1rem" fontWeight="bold" my="3">
        {title}
      </Text>
      {arr.map((item) => (
        <Text fontSize="0.9rem" mb="2" cursor="pointer">
          {item}
        </Text>
      ))}
    </Box>
  );
}

export default FooterLinks;
