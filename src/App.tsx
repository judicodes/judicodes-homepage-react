import { Box, ChakraProvider } from '@chakra-ui/react';
import CustomHeader from './components/CustomHeader';
import InfoCardStack from './components/InfoCardStack';
import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider>
      <Box bg='gray.100' height='full' minHeight='100vh'>
        <NavBar />
        <CustomHeader paddingBottom={36} />
        <InfoCardStack paddingBottom={8} marginTop={-24} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
