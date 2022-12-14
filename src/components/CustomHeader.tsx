import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import source from '../assets/images/judi.webp';

function CustomHeader({ ...rest }) {
  return (
    <Flex direction='column' align='center' bg='gray.200' {...rest}>
      <Heading as='h1' textTransform='uppercase' paddingBottom={4} fontSize='4xl' fontWeight='thin'>
        Judith Boehlert
      </Heading>
      <Text as='h2' paddingBottom={4} fontSize='xl'>
        Full-Stack | Automation | Developer Experience
      </Text>
      <Image src={source} alt='Judi in cold cold Canada' boxSize='xs' borderRadius='full' />
    </Flex>
  );
}

export default CustomHeader;
