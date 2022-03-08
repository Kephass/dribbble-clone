import { Container, Flex, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export function Filter() {
  return (
    <Container maxW="container.xl" mt="5">
      <Flex>
        <NavLink to="/jobs">
          <Button fontSize="sm" mr="2" className="filter-btn">
            Full-Time Job Board
          </Button>
        </NavLink>

        <NavLink to="/freelance-jobs">
          <Button fontSize="sm" mr="2" className="filter-btn">
            Freelance Jobs
          </Button>
        </NavLink>

        <NavLink to="/designers">
          <Button fontSize="sm" className="filter-btn">
            Designer Search
          </Button>
        </NavLink>
      </Flex>
    </Container>
  );
}
