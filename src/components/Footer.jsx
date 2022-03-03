import {
  DribbbleOutlined,
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons/lib/icons';
import { Box, Flex, Grid, Image, Link, Spacer, Text } from '@chakra-ui/react';
import FooterLinks from './FooterLinks';

function Footer() {
  return (
    <Box bg="gray.50" minH="50vh" p="20">
      <Flex justify="space-between" direction={{ base: 'column', xl: 'row' }}>
        <Box>
          <Image height="30px" src="logo.svg" mb="4"></Image>
          <Box mb="4">
            <Text>Dribbble is the world's leading</Text>
            <Text>community for creatives to share, grow,</Text>
            <Text>and get hired.</Text>
          </Box>
          <Spacer />
          <Box>
            <Link href="https://dribbble.com/dribbble" cursor="pointer" mr="4">
              <DribbbleOutlined />
            </Link>
            <Link href="https://twitter.com/dribbble" cursor="pointer" mr="4">
              <TwitterOutlined />
            </Link>
            <Link
              href="https://www.facebook.com/dribbble"
              cursor="pointer"
              mr="4"
            >
              <FacebookFilled />
            </Link>
            <Link
              href="https://www.instagram.com/accounts/login/?next=/dribbble/"
              cursor="pointer"
            >
              <InstagramOutlined />
            </Link>
          </Box>
        </Box>

        <Grid templateColumns="repeat(5, minmax(200px, 1fr))" gap={6}>
          <FooterLinks
            title="For designers"
            text={
              'Go Pro!, Explore design work, Design blog, Overtime podcast, Dribbble meetups, Playoffs, Weekly Warm-Up, Code of conduct '
            }
          />
          <Box>
            <FooterLinks
              title="Hire designers"
              text={
                'Post a job opening, Post a freelance project, Search for designers'
              }
            />
            <FooterLinks title="Brands" text={'Advertise with us'} />
          </Box>
          <FooterLinks
            title="Company"
            text={
              'About, Careers, Support, Media kit, Testimonials, API, Terms of service, Privacy policy'
            }
          />
          <Box>
            <FooterLinks
              title="Directories"
              text={
                'Design jobs, Designers for hire, Freelance designers, for hire, Tags, Places'
              }
            />
            <FooterLinks
              title="Design assets"
              text={'Creative Market, Fontspring, Font Squirrel'}
            />
          </Box>
          <FooterLinks
            title="Design Resources"
            text={
              'Freelancing, Design Hiring, Design Portfolio, Design Education, Creative Process, Design Industry Trends'
            }
          />
        </Grid>
      </Flex>
    </Box>
  );
}

export default Footer;
