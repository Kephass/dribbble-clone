import { Flex, Grid } from '@chakra-ui/react';
import { Card } from '@components/gopro';
import { ReactComponent as Medal } from '../../svg/medal.svg';
import { ReactComponent as Target } from '../../svg/target.svg';
import { ReactComponent as Speaker } from '../../svg/speaker.svg';
import { ReactComponent as Filter } from '../../svg/filter.svg';

export const Benefits = () => (
  <Grid
    my="40"
    gap="4"
    gridTemplateColumns="repeat(4, minmax(300px, 1fr))"
    overflowX="auto"
  >
    <Card
      title="The #1 Creative Community Online:"
      desc="With millions of visitors every month, Dribbble is where designers find new opportunities"
      img={<Medal />}
    />
    <Card
      title="Create an Instant Portfolio in Minutes:"
      desc="When you share your work on Dribbble, your Playbook Portfolio gets automatically updated."
      img={<Target />}
    />
    <Card
      title="Promote your goods seamlessly:"
      desc="When you create a Dribbble account, you can easily promote and sell your design goods."
      img={<Speaker />}
    />
    <Card
      title="Exclusive Access to 1000's of Leads:"
      desc="Never worry about finding new clients with access to 1000's new freelance projects every month."
      img={<Filter />}
    />
  </Grid>
);
