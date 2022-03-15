import React, { useRef, useState } from 'react';

import { DeleteIcon } from '@chakra-ui/icons';
import {
  Center,
  Container,
  Flex,
  Image,
  Link,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

// const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;
const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

// const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

export function FileUpload({
  updateFiles,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFiles(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };
  return (
    <>
      <input
        type="file"
        ref={fileInputField}
        hidden
        onChange={handleNewFileUpload}
        multiple
      />
      <Center my="26px">
        <Flex
          align="center"
          justifyContent="center"
          border="2px dashed #e7e7e9"
          borderRadius="10px"
          maxW="800px"
          width="90%"
          height="500px"
          direction="column"
          p="16px"
          onClick={handleUploadBtnClick}
          type="button"
          cursor="pointer"
        >
          <Image src="images/default/image-upload.png" width="80px" />
          <Text mt="12px" fontWeight="medium" fontSize="md">
            Drag and drop an image, or <Link color="pink.100">Browse</Link>
          </Text>
          <Text color="siteGray" mt="6px">
            1600x1200 or higher recommended. Max 10MB each (20MB for videos)
          </Text>

          <Flex mt="32px" justifyContent="space-evenly" w="100%">
            <UnorderedList color="siteGray" fontSize="sm" lineHeight="taller">
              <ListItem>High resolution images (png, jpg, gif)</ListItem>
              <ListItem>Animated gifs (4:3, 800x600 - 1600x1200)</ListItem>
            </UnorderedList>
            <UnorderedList color="siteGray" fontSize="sm" lineHeight="taller">
              <ListItem>
                Videos (mp4, 4:3, 60 secs){' '}
                <Tag
                  bg="pink.100"
                  fontSize="xs"
                  color="white"
                  fontWeight="semibold"
                  size="sm"
                >
                  PRO
                </Tag>
              </ListItem>
              <ListItem>Only upload media you own the rights to</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Center>

      <Container maxW="800px" width="90%">
        <Flex>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isImageFile = file.type.split('/')[0] === 'image';
            return (
              <section key={fileName}>
                {isImageFile && (
                  <div position="relative">
                    {isImageFile && (
                      <Flex align="center" direction="column" mr="12px">
                        <Image
                          alt={`file preview ${index}`}
                          src={URL.createObjectURL(file)}
                          height="65px"
                          width="85px"
                          objectFit="cover"
                          borderRadius="10px"
                        />
                        <DeleteIcon
                          cursor="pointer"
                          onClick={() => removeFile(fileName)}
                          p="1"
                          width="25px"
                          height="25px"
                          border
                          borderRadius="5px"
                          color="pink.100"
                        />
                      </Flex>
                    )}
                    <div>
                      {/* <span>{file.name}</span> */}
                      {/* <aside>
                        <span>{convertBytesToKB(file.size)} kb</span>
                      </aside> */}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </Flex>
      </Container>
    </>
  );
}
