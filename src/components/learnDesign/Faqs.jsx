import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';

export const Faqs = ({ data }) => {
  return (
    <Box bgColor="bgFAQ">
      <Container maxW="container.lg" py="4rem">
        <Heading as="h1" size="xl" lineHeight="56px" mb="2rem">
          FAQs
        </Heading>
        <Accordion allowMultiple>
          {data?.map((faqs) => (
            <AccordionItem key={faqs.id}>
              <h2>
                <AccordionButton p="2rem 2rem 2rem 0">
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="550"
                    fontSize="1rem"
                  >
                    {faqs.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel px="1.5rem" pb={4}>
                {faqs.description}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};
