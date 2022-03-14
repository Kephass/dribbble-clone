import { useState } from 'react';

import { Box, Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { PriceCard } from '@components/hireDesigners';

import { ReactComponent as Arrow } from '../../svg/arrow.svg';

export function Pricing() {
  const [quarterly, setQuarterly] = useState(true);

  const handleChange = () => {
    setQuarterly(!quarterly);
  };
  return (
    <Box my={{ base: '10', md: '20' }}>
      <FormControl
        display="flex"
        justifyContent="center"
        gap="3"
        alignItems="center"
      >
        <FormLabel htmlFor="toggle-pricing" m="0">
          Monthly
        </FormLabel>
        <Switch
          id="toggle-pricing"
          colorScheme="pink"
          isChecked={quarterly}
          onChange={handleChange}
        />
        <FormLabel htmlFor="toggle-pricing" m="0">
          Quarterly
        </FormLabel>
      </FormControl>
      <Flex
        fontSize="sm"
        my="4"
        gap="2"
        align="baseline"
        justify="center"
        color="pink.500"
      >
        Save Up To 30%
        <Arrow width="25px" />
      </Flex>
      <Flex
        gap="4"
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justify="center"
      >
        <PriceCard
          stateChanger={setQuarterly}
          quarterly={quarterly}
          title="Job Board"
          desc={
            'Are you looking to post your job and let the creative talent come to you? \n \n Post your job in just few clicks.'
          }
          euro={quarterly ? '227' : '272'}
          dollar={quarterly ? '249' : '299'}
          options={[
            'Swap out listings as needed',
            'Average of 1.1K targeted clicks/mo',
            'Full-Time or Freelance Hiring',
          ]}
        />
        <PriceCard
          stateChanger={setQuarterly}
          quarterly={quarterly}
          title="Designer Search"
          desc="Want to simply search through our talent pool of top creative professionals for the right candidate but don't want to post publicly?"
          euro={quarterly ? '227' : '272'}
          dollar={quarterly ? '249' : '299'}
          options={[
            'Instantly find available designers',
            'Powerful search & filtering',
            'Unlimited messages',
            'Easily save criteria & bookmark designers for future needs',
          ]}
        />
        <PriceCard
          dark
          stateChanger={setQuarterly}
          quarterly={quarterly}
          title="Job Board + Designer Search"
          desc={
            'Do you want to post your role and search through a diverse pool of talent at the same time? \n \n Our most powerful solution to get your role filled now.'
          }
          euro={quarterly ? '455' : '318'}
          dollar={quarterly ? '499' : '349'}
          options={[
            "Everything in 'Job Board'",
            "Everything in 'Designer Search'",
          ]}
        />
      </Flex>
    </Box>
  );
}
