import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FilterNav } from '@components/landing';
import { Shots } from '@components/userProfile';
import { allPostsStateAtom, userLogInModal } from '@data/atoms';

import { ModalNoUser } from '../components/ModalNoUser';
import { searchStateAtom } from '../data/atoms';
import { handleSearchResult, limitNumber } from '../firestore.collections';

export default function Search() {
  let { query } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useRecoilState(allPostsStateAtom);
  const [searchKey, setSearchKey] = useRecoilState(searchStateAtom);
  const logInModal = useRecoilValue(userLogInModal);
  const [moreShots, setMoreShots] = useState(false);
  const [moreShotsIsLoading, setMoreShotsIsLoading] = useState(false);
  useEffect(async () => {
    return handleSearchResult(query).then((result) => {
      setSearchKey(query);
      if (result.length < limitNumber) {
        setMoreShots(false);
      } else {
        setMoreShots(true);
      }
      setPosts(result);
    });
  }, [query]);
  const handleEnterPressed = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value);
    }
  };
  const handleSearch = (value) => {
    setSearchKey(value);
    navigate(`/search/${value}`);
  };
  return (
    <Box>
      <Box bg="#f3f3f4" h="80px" position="relative">
        <Flex justifyContent="center">
          <Box position="absolute" bottom="-32px">
            <InputGroup
              display={{ base: 'none', md: 'flex' }}
              mr="1em"
              alignItems="center"
            >
              <InputLeftElement pointerEvents="none" top="auto" left="1em">
                <SearchIcon color="gray.400" />
              </InputLeftElement>
              <Input
                boxShadow=" 0px 8px 20px rgb(0 0 0 / 6%)"
                type="text"
                placeholder="Search..."
                bg="white"
                border="none"
                fontSize="lg"
                color="black"
                w="628px"
                h="64px"
                pl="3em"
                fontWeight="base"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={handleEnterPressed}
                _focus={{
                  border: '1px solid pink',
                  boxShadow: ' 0 0 0 4px rgb(234 76 137 / 10%)',
                }}
              />
            </InputGroup>
          </Box>
        </Flex>
      </Box>

      <Container
        maxW="95%"
        overflow="hidden"
        mt={{ base: '100px', md: '40px' }}
      >
        <Center mt="1em" flexDirection="column">
          <Text fontSize="4xl" fontWeight="bold" textTransform="capitalize">
            {query}
          </Text>
          <Text fontSize="md" fontWeight="base" color="gray.500">
            {posts ? posts.length : 0} outstanding {query} designs
          </Text>
        </Center>
        <FilterNav />
        {posts?.length > 0 ? (
          <Box>
            <Shots posts={posts} setPosts={setPosts} />
            {logInModal && <ModalNoUser />}
            {moreShots && (
              <Center my="2em">
                <Button
                  onClick={handleNewPosts}
                  _active={{ transform: 'scale(0.95)' }}
                  transition="0.25s ease-in-out"
                >
                  {moreShotsIsLoading ? (
                    <Spinner size="sm" mr="3" />
                  ) : (
                    <Image
                      _focus={{
                        outline: 'none',
                        ring: 'none',
                      }}
                      width="20px"
                      mr="3"
                      fit="contain"
                      src="/images/brand/logo-ball.svg"
                      borderRadius="10"
                    />
                  )}
                  Load more Shots
                </Button>
              </Center>
            )}
          </Box>
        ) : (
          <Center>
            <Image
              width="800px"
              fit="contain"
              src="/images/banners/no-results.png"
            />
          </Center>
        )}
      </Container>
    </Box>
  );
}
