import React from 'react';
import { Link as Router } from 'react-router-dom';

import { Link } from '@chakra-ui/react';

export function NavButton() {
  return (
    <Link
      as={Router}
      to="/signin"
      align-self="flex-start"
      align-items="center"
      width="40px"
      height="40px"
      borderRadius="50%"
      border="1px solid #e0e0e0"
      fontSize="10px"
      left="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <svg
        fill="#6e6d7a"
        width="16px"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        role="img"
        className="icon caret-left"
      >
        <path d="m13.532 4.585-7.532 7.415 7.532 7.415c.792.779 2.081.779 2.873 0s.792-2.049 0-2.829l-4.659-4.586 4.659-4.587c.384-.378.595-.88.595-1.414s-.211-1.036-.595-1.414c-.792-.78-2.082-.78-2.873 0z"></path>
      </svg>
    </Link>
  );
}
