import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FileUpload } from '@components';

function Upload() {
  const [newPostInfo, setNewPostInfo] = useState({
    images: [],
  });
  const [hasImages, setHasImages] = useState(false);

  const updateFiles = (files) => {
    setNewPostInfo({ ...newPostInfo, images: files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new post...
  };

  useEffect(() => {
    setHasImages(newPostInfo?.images?.length > 0);
  }, [newPostInfo]);

  return (
    <Container maxW="95%">
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
            disabled={!hasImages}
            colorScheme="pink"
            ml="12px"
            onClick={handleSubmit}
          >
            Continue
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
            <Container maxW="800px" width="100%">
              <Input
                width="100%"
                isRequired
                p="0"
                fontSize="20px"
                fontWeight="normal"
                placeholder="Write what went into this shot, and anything else you’d like to mention"
                size="lg"
                border="none"
                outline="none"
                _focus={{ outline: 'none' }}
                _placeholder={{
                  fontWeight: '400',
                  color: 'gray',
                  fontSize: '20px',
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