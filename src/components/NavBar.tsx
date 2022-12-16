import { Flex, Icon, Spacer, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function NavBar() {
  return (
    <Flex
      as='header'
      bg='orange.200'
      position='sticky'
      height='28'
      top='-14'
      align='center'
      shadow='md'
      zIndex={1}
    >
      <Flex position='sticky' top='0' height='14' paddingX='8' width='full' align='center'>
        <Text fontSize='3xl' fontWeight='thin'>
          judicodes
        </Text>
        <Spacer />
        <a
          href='https://github.com/judicodes'
          title="Go to Judith's GitHub"
          aria-label="Go to Judith's GitHub"
          target='_blank'
          rel='noreferrer'
        >
          <Icon as={FaGithub} boxSize={8} marginRight={6} />
        </a>
        <a
          href='https://linkedin.com/in/jboehlert'
          title="Go to Judith's LinkedIn"
          aria-label="Go to Judith's LinkedIn"
          target='_blank'
          rel='noreferrer'
        >
          <Icon as={FaLinkedin} boxSize={8} borderRadius='lg' />
        </a>
      </Flex>
    </Flex>
  );
}

export default NavBar;
