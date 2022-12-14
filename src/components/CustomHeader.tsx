import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import source from '../assets/images/judi.webp';

function CustomHeader() {
  return (
    <Flex direction='column' align='center' paddingY={8} bg='gray.200'>
      <Heading paddingBottom={4}>JUDITH BOEHLERT</Heading>
      <Text paddingBottom={4}>Full-Stack | Automation | Developer Experience</Text>
      <Image src={source} alt='Judi in cold cold Canada' boxSize='xs' borderRadius='full' />
    </Flex>
  );
}

export default CustomHeader;
