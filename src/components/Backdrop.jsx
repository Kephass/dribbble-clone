import React from 'react';
import { motion } from 'framer-motion';

import { CloseButton } from '@chakra-ui/react';

function Backdrop({ children, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CloseButton
        onClick={onClick}
        color="white"
        right={1.5}
        top={1.5}
        position="absolute"
      />
      {children}
    </motion.div>
  );
}

export default Backdrop;
