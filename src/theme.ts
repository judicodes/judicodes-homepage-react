import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true
};

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`
  },
  themeConfig
});

export default theme;
