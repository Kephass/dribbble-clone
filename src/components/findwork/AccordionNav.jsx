import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react';

export function AccordionNav() {
  return (
    <Accordion defaultIndex={0}>
      <AccordionItem borderTop="0px" mb="1">
        <h2>
          <AccordionButton
            p="1rem 2rem 1rem 0"
            _expanded={{
              bg: 'pink.50',
              color: 'pink.100'
            }}
            borderRadius="10px"
          >
            <Box
              flex="1"
              textAlign="left"
              fontWeight="550"
              fontSize="1rem"
              p="0px 10px"
            >
              Full-Time Designers
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel
          px="1.5rem"
          fontWeight="bold"
          fontSize="sm"
          pb={4}
          color="pink.100"
        >
          Add new role
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderTop="0px" mb="1">
        <h2>
          <AccordionButton
            p="1rem 2rem 1rem 0"
            _expanded={{
              bg: 'pink.50',
              color: 'pink.100'
            }}
            borderRadius="10px"
          >
            <Box
              flex="1"
              textAlign="left"
              fontWeight="550"
              fontSize="1rem"
              p="0px 10px"
            >
              Freelance or Agency
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel
          px="1.5rem"
          fontWeight="bold"
          fontSize="sm"
          pb={4}
          color="pink.100"
        >
          Add new project
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="0px" pt="1">
        <h2>
          <AccordionButton p="1rem 2rem 1rem 0" borderRadius="10px">
            <Box
              flex="1"
              textAlign="left"
              fontWeight="550"
              fontSize="1rem"
              p="0px 10px"
            >
              Post Job
            </Box>
          </AccordionButton>
        </h2>
      </AccordionItem>
    </Accordion>
  );
}
