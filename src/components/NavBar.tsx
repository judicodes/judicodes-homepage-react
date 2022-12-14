import { Flex, Spacer, Text } from '@chakra-ui/react';

function NavBar() {
  return (
    <Flex
      as='header'
      bg='gray.300'
      position='sticky'
      height='28'
      top='-14'
      align='center'
      shadow='md'
      zIndex={1}
    >
      <Flex position='sticky' top='0' height='14' paddingX='8' width='full' align='center'>
        <Text fontSize='2xl' fontWeight='100'>
          judicodes
        </Text>
        <Spacer />
        <Text>LI</Text>
        <Text>GH</Text>
      </Flex>
    </Flex>
  );
}

export default NavBar;
