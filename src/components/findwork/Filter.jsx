import { Container, Flex, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
export function Filter() {
  return (
    <Container maxW="container.xl" mt="5">
      <Flex>
        <NavLink to="/jobs">
          <Button bg="btnGray" fontSize="sm" mr="2">
            Full-Time Job Board
          </Button>
        </NavLink>

        <NavLink to="/freelance-jobs">
          <Button bg="white" fontSize="sm" mr="2">
            Freelance Jobs
          </Button>
        </NavLink>

        <NavLink to="/designers">
          <Button bg="white" fontSize="sm">
            Designer Search
          </Button>
        </NavLink>
      </Flex>
    </Container>
  );
}
