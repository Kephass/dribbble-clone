import { Box, FormLabel, Input } from '@chakra-ui/react';

export const InputUi = ({
  label,
  placeholder,
  name,
  inputStyle,
  onChange,
  type = 'text',
}) => {
  return (
    <Box>
      <FormLabel htmlFor="first-name" fontWeight="bold" fontSize="md">
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        style={inputStyle}
        onChange={onChange}
      />
    </Box>
  );
};
