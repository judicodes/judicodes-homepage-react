import { Box, ChakraProvider } from '@chakra-ui/react';
import CustomHeader from './components/CustomHeader';
import InfoCardStack from './components/InfoCardStack';
import NavBar from './components/NavBar';
import theme from './theme';
import '@fontsource/raleway/100.css';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/900.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg='orange.50' height='full' minHeight='100vh'>
        <NavBar />
        <CustomHeader paddingTop={8} paddingBottom={36} />
        <InfoCardStack paddingBottom={8} marginTop={-24} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
