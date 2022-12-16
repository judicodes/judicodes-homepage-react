import { Box, useColorModeValue } from '@chakra-ui/react';
import CustomHeader from '../components/CustomHeader';
import InfoCardStack from '../components/InfoCardStack';
import NavBar from '../components/NavBar';

function MainPage() {
  const bgColor = useColorModeValue('orange.50', 'blue.700');

  return (
    <Box bg={bgColor} height='full' minHeight='100vh'>
      <NavBar />
      <CustomHeader paddingTop={8} paddingBottom={36} />
      <InfoCardStack paddingBottom={8} marginTop={-24} />
    </Box>
  );
}

export default MainPage;
