import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react';
import { InputUi } from '@components/ui';

export const SearchDesign = ({
  width,
  border = '0px solid',
  borderColor = 'gray.200'
}) => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      minWidth="300px"
      width={width}
      border={border}
      borderColor={borderColor}
      borderRadius="10"
      p="32px"
    >
      <FormControl>
        <Box my="2">
          <InputUi placeholder="Search keywords..." label="Keyword Search" />
        </Box>

        <Box my="2">
          <InputUi placeholder="Select specialties..." label="Specialties" />
        </Box>
        <Box my="2">
          <InputUi placeholder="Enter location..." label="Location" />
        </Box>
        <Box my="2">
          <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
            Experience Level
          </FormLabel>
          <CheckboxGroup colorScheme="pink">
            <Stack spacing={3} direction={'column'}>
              <Flex>
                <Checkbox size="lg" value="animation">
                  <Text fontSize="md">1–2 years</Text>
                </Checkbox>
                <Spacer />
                <Checkbox size="lg" value="brand-graphic-design">
                  <Text fontSize="md">3–5 years</Text>
                </Checkbox>
              </Flex>
              <Flex>
                <Checkbox size="lg" value="illustration">
                  <Text fontSize="md">6–8 years</Text>
                </Checkbox>
                <Spacer />
                <Checkbox size="lg" value="mobile-desgin">
                  <Text fontSize="md">9+ years</Text>
                </Checkbox>
              </Flex>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Divider my="4" />
        <Box my="2">
          <InputUi placeholder="Enter Location…" label="Location" />
          <Checkbox size="lg" value="open-to-remote" mt="4">
            Open to remote
          </Checkbox>
        </Box>
        <Divider my="4" />
        <Box my="2">
          <CheckboxGroup colorScheme="pink">
            <Stack spacing={3} direction={'column'}>
              <Checkbox size="lg" value="full-Time">
                Full-Time
              </Checkbox>
              <Checkbox size="lg" value="freelance-contract">
                Freelance/Contract
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </Box>
        <Button colorScheme="pink" variant="solid" mt="5" width="100%" disabled>
          Filter
        </Button>
      </FormControl>
    </Box>
  );
};

SearchDesign.propTypes = {
  width: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string
};
