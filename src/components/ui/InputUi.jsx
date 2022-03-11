import { Box, FormLabel, Input } from '@chakra-ui/react';

export const InputUi = ({ label, placeholder, name }) => {
  return (
    <Box>
      <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
        {label}
      </FormLabel>
      <Input placeholder={placeholder} name={name} />
    </Box>
  );
};
