import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

function FooterLinks({ title, text }) {
  const arr = text.split(',');
  return (
    <Box>
      <Text fontSize="1rem" fontWeight="bold" mb="3" mt="5">
        {title}
      </Text>
      {arr.map((item) => (
        <Link fontSize="0.9rem" mb="2" display="block">
          {item}
        </Link>
      ))}
    </Box>
  );
}

export default FooterLinks;
