import {
  FacebookFilled,
  LinkOutlined,
  ProfileFilled,
  PushpinFilled,
} from '@ant-design/icons';
import {
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export const About = ({ user }) => {
  console.log(user);
  return (
    <Container maxW={'7xl'} marginBottom="15">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 17, md: 24 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text fontSize="md" fontWeight="bold">
            Biography
          </Text>
          <Text color="pink.100">{user.localId}</Text>
          <Text fontSize="md" fontWeight="bold">
            Skills
          </Text>
          <Text color="pink.100">Add Skills</Text>
          <Divider />
          <HStack color="siteGray" gap="5">
            <Text>0 followers</Text>
            <Text>1 following</Text>
          </HStack>
        </Stack>

        <VStack w="30%">
          <HStack
            m="1rem 0"
            justifyContent="space-around"
            width="fill-available"
          >
            <Button
              fontSize="1rem"
              alignItems="center"
              bgColor="white"
              border="1px solid"
              borderColor="gray.200"
              gap="1"
            >
              <FacebookFilled style={{ color: '#3b5998' }} />
              Share
            </Button>
            <Spacer />
            <Button
              fontSize="1rem"
              alignItems="center"
              bgColor="white"
              border="1px solid"
              borderColor="gray.200"
              gap="1"
            >
              <LinkOutlined /> Copy
            </Button>
          </HStack>
          <Flex bgColor="#fafafb" width="100%" borderRadius="8px" p="2rem">
            <VStack align="left" gap="2">
              <Text>
                <PushpinFilled style={{ marginRight: '5px' }} />
                {} Antwerp
              </Text>
              <Text>
                <ProfileFilled style={{ marginRight: '5px' }} />
                Member since
                {}
              </Text>
            </VStack>
          </Flex>
          <VStack width="fill-available" align="left" pt="2rem">
            <Text>Social</Text>
            <Text color="pink.100">Add social/portfolio links</Text>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};
