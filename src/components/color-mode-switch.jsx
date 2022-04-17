import {
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <FormControl
      bg={bg}
      w="100%"
      display="inline-flex"
      alignItems="center"
      position="fixed"
      bottom={0}
      left={0}
      p={4}
      borderTopWidth="1px"
      transitionDuration="200ms"
    >
      <FormLabel htmlFor="color-mode-switch" mb="0">
        Dark Mode
      </FormLabel>
      <Switch
        id="color-mode-switch"
        colorScheme="messenger"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </FormControl>
  );
};

export default ColorModeSwitch;
