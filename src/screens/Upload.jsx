import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Input,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FileUpload } from '@components';

import { auth, createPost } from '../firebase';

const options = [
  { value: 'animation', label: 'Animation' },
  { value: 'branding', label: 'Branding' },
  { value: 'illustration', label: 'Illustration' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'product', label: 'Product' },
  { value: 'design', label: 'Design' },
  { value: 'typography', label: 'Typography' },
  { value: 'web', label: 'Web' },
  { value: 'web-design', label: 'Web-Design' },
];
const animatedComponents = makeAnimated();
function Upload() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [newPostInfo, setNewPostInfo] = useState({
    title: '',
    caption: '',
    likes: [],
    comments: [],
    images: [],
    tags: [],
  });
  const [hasImages, setHasImages] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateFiles = (files) => {
    setNewPostInfo({ ...newPostInfo, images: files });
  };

  useEffect(() => {
    setHasImages(newPostInfo?.images?.length > 0);
  }, [newPostInfo]);

  return (
    <Container maxW="95%" mt={{ base: '80px', md: '0px' }}>
      <Box my="32px">
        <Flex>
          <Link href="/">
            <Button fontSize="sm" variant="outline">
              Cancel
            </Button>
          </Link>
          <Spacer />
          <Button fontSize="sm" disabled={!hasImages}>
            Save as draft
          </Button>
          <Button
            fontSize="sm"
            disabled={!hasImages || loading ? true : false}
            colorScheme="pink"
            ml="12px"
            onClick={async () => {
              setLoading(true);
              await createPost(newPostInfo, user, loading).then(() => {
                setLoading(false);
                navigate(`/users/${user.displayName.split(' ')[0]}`);
              });
            }}
          >
            {loading ? 'Uploading...' : 'Save'}
          </Button>
        </Flex>
        {!hasImages ? (
          <Box>
            <Text
              align="center"
              fontSize="3xl"
              fontWeight="extrabold"
              mt="24px"
            >
              What are you working on?
            </Text>
            <Text
              align="center"
              fontSize="base"
              color="siteGray"
              fontWeight="medium"
              mt="12px"
            >
              Upload your design. This will also be used as the thumbnail in
              feeds.
            </Text>
          </Box>
        ) : (
          <Container maxW="800px" width="100%" mt="24px">
            <Input
              onChange={(e) =>
                setNewPostInfo({ ...newPostInfo, title: e.target.value })
              }
              isRequired
              p="0"
              fontSize="26px"
              fontWeight="bold"
              placeholder="Give me a name"
              size="lg"
              border="none"
              outline="none"
              _focus={{ outline: 'none' }}
              width="400px"
              _placeholder={{
                fontWeight: '900',
                color: 'gray',
                fontSize: '26px',
              }}
            />
          </Container>
        )}

        {/* IMAGE UPLOAD CONTAINER */}
        <form>
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label="Profile Image(s)"
            multiple
            updateFiles={updateFiles}
          />
          {hasImages && (
            <Container maxW="800px" width="100%" my="12px">
              <FormLabel htmlFor="Description" fontWeight="bold" fontSize="md">
                Description
              </FormLabel>
              <Input
                onChange={(e) =>
                  setNewPostInfo({ ...newPostInfo, caption: e.target.value })
                }
                width="100%"
                isRequired
                fontSize="20px"
                fontWeight="normal"
                placeholder="Write what went into this shot, and anything else you’d like to mention"
                size="lg"
                outline="none"
                _focus={{ outline: 'none' }}
                _placeholder={{
                  fontWeight: '400',
                  color: 'gray',
                  fontSize: '20px',
                }}
                mb="12px"
              />
              <FormLabel htmlFor="Tags" fontWeight="bold" fontSize="md">
                Tags
              </FormLabel>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                onChange={(tags) => {
                  tags = tags.map((tag) => tag.value);
                  setNewPostInfo({ ...newPostInfo, tags: tags });
                }}
              />
            </Container>
          )}
        </form>
      </Box>
    </Container>
  );
}

export default Upload;
