import { Search2Icon } from '@chakra-ui/icons';
import { Flex, Icon, Image, Link, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      align="center"
      gap="16"
      justify="space-between"
      my={{ base: '20', md: '40' }}
    >
      <Flex
        gap="10"
        px="10"
        direction="column"
        maxW={{ base: '100%', lg: '45%' }}
      >
        <Text
          fontWeight="bold"
          fontSize={{ base: '3xl', lg: '3xl', xl: '5xl' }}
          lineHeight="normal"
        >
          Streamline your design projects with digital goods made by creators
          like you
        </Text>
        <Text lineHeight="7">
          Our marketplace of digital assets helps independent designers earn a
          living doing what they love while giving you the perfect building
          blocks for your creative projects, all powered by our sister site
          Creative Market.
        </Text>
        <Flex
          align="center"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          p="7"
          gap="5"
          borderRadius="md"
        >
          <Icon as={Search2Icon} color="gray.400" />
          <input
            style={{ outline: 'none' }}
            placeholder="Search marketplace..."
          />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align="center"
        mx={{ base: '5', md: '20' }}
      >
        <Image
          px={{ base: '5', md: '16' }}
          src="images/banners/support-ukraine.png"
        />
        <Flex
          align="center"
          borderRadius="xl"
          direction="column"
          gap="5"
          bg="blue.100"
          px={{ base: '5', md: '16' }}
          py="10"
          color="blue.600"
        >
          <Text fontSize="4xl" fontWeight="bold" align="center">
            Supporting Ukraine
          </Text>
          <Text align="center">
            We are donating $50,000 USD to the International Rescue Committee,
            which provides emergency aid for refugees.
          </Text>
          <Link align="center">Learn how we&apos;re supporting Ukraine</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
