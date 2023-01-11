import { Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import source from '../assets/images/judi.webp';

function CustomHeader({ ...rest }) {
  const colorTitle = useColorModeValue('customBlue.700', 'customPink.200');
  const colorSubtitle = useColorModeValue('customBlue.700', 'customPink.200');

  return (
    <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='center' {...rest}>
      <Image
        src={source}
        alt='Judi in cold cold Canada'
        boxSize='xs'
        borderRadius='full'
        marginRight={{ md: 8 }}
        marginBottom={{ base: 8, md: 0 }}
      />
      <Flex direction='column' align={{ base: 'center', md: 'flex-start' }}>
        <Heading
          as='h1'
          textTransform='uppercase'
          paddingBottom={4}
          fontSize='4xl'
          fontWeight=''
          fontFamily='Azeret Mono'
          color={colorTitle}
        >
          Judith Boehlert
        </Heading>
        <Text as='h2' paddingBottom={4} fontSize='xl' color={colorSubtitle}>
          Full-Stack | Automation | Developer Experience
        </Text>
      </Flex>
    </Flex>
  );
}

export default CustomHeader;
