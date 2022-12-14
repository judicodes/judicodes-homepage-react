import { Box, ChakraProvider } from '@chakra-ui/react';
import CustomHeader from './components/CustomHeader';
import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider>
      <Box bg='gray.100' height='full' minHeight='100vh'>
        <NavBar />
        <CustomHeader />
      </Box>
    </ChakraProvider>
  );
}

export default App;
