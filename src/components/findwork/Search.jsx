import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  FormControl,
  FormLabel,
  Stack
} from '@chakra-ui/react';
import { InputUi } from '@components/ui';

export const Search = ({
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
          <InputUi placeholder="Company, skill, tag..." label="Filter" />
        </Box>
        <Divider my="4" />
        <Box my="2">
          <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
            Specialties
          </FormLabel>
          <CheckboxGroup colorScheme="pink">
            <Stack spacing={3} direction={'column'}>
              <Checkbox size="lg" value="animation">
                Animation
              </Checkbox>
              <Checkbox size="lg" value="brand-graphic-design">
                Brand / Graphic Design
              </Checkbox>
              <Checkbox size="lg" value="illustration">
                Illustration
              </Checkbox>
              <Checkbox size="lg" value="mobile-desgin">
                Mobile Design
              </Checkbox>
              <Checkbox size="lg" value="ui-visual-design">
                UI / Visual Design
              </Checkbox>
              <Checkbox size="lg" value="product-design">
                Product Design
              </Checkbox>
              <Checkbox size="lg" value="ux-design-research">
                UX Design / Research
              </Checkbox>
              <Checkbox size="lg" value="web-design">
                Web Design
              </Checkbox>
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

Search.propTypes = {
  width: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string
};
