import { Container, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as Amazon } from '../../svg/amazon.svg';
import { ReactComponent as Asana } from '../../svg/asana.svg';
import { ReactComponent as FaceBook } from '../../svg/facebook.svg';
import { ReactComponent as Fantasy } from '../../svg/fantasy.svg';
import { ReactComponent as MailChimp } from '../../svg/mailchimp.svg';
import { ReactComponent as StarBucks } from '../../svg/starbucks.svg';
import { ReactComponent as Walmart } from '../../svg/walmart.svg';

export function Companies() {
  return (
    <Container maxW="8xl">
      <Text align="center" fontWeight="bold" fontSize="xl" mb="8">
        We&apos;ve helped some of the world&apos;s best design-forward companies
        hire expert creatives
      </Text>
      <Flex
        columnGap="16"
        rowGap="8"
        flexWrap="wrap"
        align="center"
        justify="center"
      >
        <StarBucks />
        <FaceBook />
        <Amazon />
        <MailChimp />
        <Walmart />
        <Asana />
        <Fantasy />
      </Flex>
    </Container>
  );
}
