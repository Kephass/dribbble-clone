import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Button, Container, Flex } from '@chakra-ui/react';

export function FilterTabs({ links }) {
  return (
    <div>
      {links && (
        <Container maxW="container.xl" mt="5">
          <Flex>
            {links.map((link, i) => (
              <NavLink to={link.url || '/'} key={`filternav${i}`}>
                <Button
                  fontSize={link.textSize || 'sm'}
                  mr="2"
                  className="filter-btn"
                >
                  {link.title}
                </Button>
              </NavLink>
            ))}
          </Flex>
        </Container>
      )}
    </div>
  );
}

FilterTabs.propTypes = {
  links: PropTypes.array.isRequired
};
