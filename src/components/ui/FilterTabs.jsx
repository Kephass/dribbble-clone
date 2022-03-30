import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Container, Flex } from '@chakra-ui/react';

export function FilterTabs({ links, display = { base: 'flex', md: 'flex' } }) {
  const ref = useRef(null);
  const [canGoToLeft, setCanGoToLeft] = useState(false);
  const [canGoToRight, setCanGoToRight] = useState(true);
  const location = useLocation();
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;

    const width = ref.current.offsetWidth;
    const scrollWidth = ref.current.scrollWidth;
    const scrollLeft = ref.current.scrollLeft;

    if (scrollLeft === 0) {
      setCanGoToLeft(false);
      setCanGoToRight(true);
    } else if (scrollWidth - width <= scrollLeft) {
      setCanGoToLeft(true);
      setCanGoToRight(false);
    } else {
      setCanGoToLeft(true);
      setCanGoToRight(true);
    }
  };

  return (
    <div>
      {links && (
        <Container
          className="hide-overflow-scroll-bar"
          maxW="container.xl"
          pt="5"
          pb={{ base: '5', md: '0' }}
          display={display}
          overflow="auto"
          ref={ref}
          px={0}
        >
          {canGoToLeft && (
            <Button
              onClick={() => scroll(-150)}
              position="absolute"
              left="0px"
              zIndex={1}
              leftIcon={<ChevronLeftIcon />}
              fontSize="2xl"
              width="50px"
              borderRadius={0}
              backgroundColor="transparent"
              display={{ base: 'flex', md: 'none' }}
              backgroundImage="linear-gradient(to right ,rgba(255,0,0,0),  rgba(255,255,255,1))"
              _active={{ backgroundColor: 'transparent', outline: 'none' }}
              _focus={{
                backgroundColor: 'transparent',
                outline: 'none',
                ring: 'none',
              }}
              _hover={{
                backgroundImage:
                  'linear-gradient(to right ,rgba(255,0,0,0),  rgba(255,255,255,1))',
                outline: 'none',
              }}
              outline="none"
            ></Button>
          )}
          <Flex position="relative">
            {links.map((link, i) => (
              <NavLink
                to={link.url || '/'}
                key={`filternav${i}`}
                className={
                  link.url === '/' && location.pathname === '/shots' && 'active'
                }
              >
                <Button
                  fontSize={link.textSize || 'sm'}
                  mr="2"
                  _focus={{
                    outline: 'none',
                    ring: 'none',
                  }}
                  className="filter-btn"
                >
                  {link.title}
                </Button>
              </NavLink>
            ))}
          </Flex>
          {canGoToRight && (
            <Button
              onClick={() => scroll(150)}
              position="absolute"
              right="0"
              zIndex={1}
              leftIcon={<ChevronRightIcon />}
              fontSize="2xl"
              width="50px"
              borderRadius={0}
              display={{ base: 'flex', md: 'none' }}
              backgroundImage="linear-gradient(to left  ,rgba(255,0,0,0),  rgba(255,255,255,1 ))"
              backgroundColor="transparent"
              _active={{ backgroundColor: 'transparent', outline: 'none' }}
              _focus={{ backgroundColor: 'transparent', outline: 'none' }}
              _hover={{
                backgroundImage:
                  'linear-gradient(to left ,rgba(255,0,0,0),  rgba(255,255,255,1))',
                outline: 'none',
              }}
              outline="none"
            ></Button>
          )}
        </Container>
      )}
    </div>
  );
}

FilterTabs.propTypes = {
  links: PropTypes.array.isRequired,
};
