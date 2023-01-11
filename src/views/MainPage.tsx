import { Box, useColorModeValue } from '@chakra-ui/react';
import CustomHeader from '../components/CustomHeader';
import InfoCardStack from '../components/InfoCardStack';
import NavBar from '../components/NavBar';

function MainPage() {
  const bgGradient = useColorModeValue(
    'linear(to-b, gray.50 0%, gray.50 50%, gray.100 50%)',
    'linear(to-b, gray.600 0%, gray.600 50%, gray.700 50%)'
  );

  return (
    <Box
      bgGradient={bgGradient}
      position='fixed'
      top={0}
      overflowY='scroll'
      height='full'
      width='full'
      minHeight='100vh'
    >
      <NavBar />
      <CustomHeader paddingTop={8} paddingBottom={36} />
      <InfoCardStack paddingBottom={8} marginTop={-24} />
    </Box>
  );
}

export default MainPage;
