import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

export const Banner = ({
  title,
  titleOptions = null,
  descriptionOptions = null,
  description,
  image = null,
  video = null,
  mediaOptions = null,
  buttons = [],
  children = null,
}) => {
  return (
    <Box py={{ base: '0', md: '10' }}>
      <Container maxW="7xl">
        <Flex
          minH="30vh"
          align="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <VStack
            width={{ base: '100%', lg: '50%' }}
            h="full"
            py="10"
            pr={{ base: '0', md: '20' }}
            spacing="8"
            alignItems="flex-start"
          >
            <Text
              align={titleOptions?.align || 'left'}
              fontSize={
                titleOptions?.fontSize || { base: '2xl', md: '2xl', lg: '2rem' }
              }
              lineHeight={titleOptions?.lineHeight || 'normal'}
              fontWeight={titleOptions?.fontWeight || 'extrabold'}
            >
              {title}
            </Text>

            <Text
              align={descriptionOptions?.align || 'left'}
              fontSize={
                descriptionOptions?.fontSize || {
                  base: 'lg',
                  md: 'xl',
                  lg: '2xl',
                }
              }
              lineHeight={descriptionOptions?.lineHeight || 'normal'}
              fontWeight={descriptionOptions?.fontWeight || 'medium'}
              mt="0px"
            >
              {description}
            </Text>
            <Flex>
              {buttons &&
                buttons.map((btn, i) => (
                  <NavLink to={btn.link || '/'} key={`btn${i}`}>
                    <Button
                      colorScheme={btn.color || 'pink'}
                      variant={btn.variant || 'solid'}
                      mr="3"
                    >
                      {btn.text}
                    </Button>
                  </NavLink>
                ))}
            </Flex>
          </VStack>
          <Box
            px="10"
            width={{ base: '100%', md: '50%' }}
            borderRadius="10"
            position="relative"
          >
            {children}

            {video && (
              <AspectRatio
                width={mediaOptions?.width || '100%'}
                ratio={mediaOptions?.ratio || 1}
              >
                <iframe
                  title={mediaOptions?.title || ''}
                  src={video}
                  allowFullScreen
                />
              </AspectRatio>
            )}
            {image && (
              <Image
                width={mediaOptions?.width || '100%'}
                fit={mediaOptions?.width || 'contain'}
                src={image}
                alt={mediaOptions?.title || ''}
                borderRadius={mediaOptions?.borderRadius || '32'}
              />
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleOptions: PropTypes.object,
  descriptionOptions: PropTypes.object,
  image: PropTypes.string,
  video: PropTypes.string,
  mediaOptions: PropTypes.object,
  buttons: PropTypes.array,
  children: PropTypes.node,
};
