import { Container, Flex, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export function Filter({ links }) {
  return (
    <div>
      {links && (
        <Container maxW="container.xl" mt="5">
          <Flex>
            {links.map((link, i) =>  <NavLink to={link.url || '/'} key={`filternav${i}`}>
              <Button fontSize={link.textSize || 'sm'} mr="2" className="filter-btn" >
                {link.title}
              </Button>
            </NavLink> )}

          </Flex>
        </Container>
      )}
    </div>
  );
}
