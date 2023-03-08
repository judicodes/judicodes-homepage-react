import {
  Flex,
  Icon,
  IconButton,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { FaAdjust, FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
  const iconBoxSize = 8;
  const iconMargin = 6;

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.300', 'gray.800');
  const color = useColorModeValue('customBlue.700', 'customPink.200');

  return (
    <Flex
      as='header'
      bg={bgColor}
      position='sticky'
      height='28'
      top='-14'
      align='center'
      shadow='md'
      zIndex={1}
    >
      <Flex position='sticky' top='0' height='14' paddingX='8' width='full' align='center'>
        <Text
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' }}
          fontWeight='thin'
          fontFamily='Azeret Mono'
          color={color}
        >
          judicodes
        </Text>
        <Spacer />
        <IconButton
          icon={<FaAdjust />}
          variant='unstyled'
          color={color}
          id='toggleColourModeButton'
          marginRight={iconMargin}
          aria-label='Toggle dark/light mode'
          title='Toggle dark/light mode'
          onClick={toggleColorMode}
        />
        <a
          href='https://github.com/judicodes'
          title="Go to Judith's GitHub"
          aria-label="Go to Judith's GitHub"
          target='_blank'
          rel='noreferrer'
        >
          <Icon as={FaGithub} boxSize={iconBoxSize} marginRight={iconMargin} color={color} />
        </a>
        <a
          href='https://linkedin.com/in/jboehlert'
          title="Go to Judith's LinkedIn"
          aria-label="Go to Judith's LinkedIn"
          target='_blank'
          rel='noreferrer'
        >
          <Icon as={FaLinkedin} boxSize={iconBoxSize} borderRadius='lg' color={color} />
        </a>
      </Flex>
    </Flex>
  );
}

export default NavBar;
