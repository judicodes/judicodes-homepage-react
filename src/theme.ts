import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const themeConfig: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true
};

const theme = extendTheme({
  colors: {
    customBlue: {
      '50': '#E6F1FE',
      '100': '#B9D7FD',
      '200': '#8DBDFC',
      '300': '#60A3FB',
      '400': '#3389FA',
      '500': '#066FF9',
      '600': '#0559C7',
      '700': '#044395',
      '800': '#032C63',
      '900': '#011632'
    },
    customPink: {
      '50': '#FFE6F3',
      '100': '#FEB9DC',
      '200': '#FD8BC6',
      '300': '#FD5EAF',
      '400': '#FC3199',
      '500': '#FB0482',
      '600': '#C90368',
      '700': '#97024E',
      '800': '#650134',
      '900': '#32011A'
    }
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`
  },
  styles: {
    global: {
      // TODO: transition ins not working yet
      body: {
        transition: 'linear',
        transitionProperty: 'all',
        transitionDuration: 'normal'
      }
    }
  },
  config: {
    disableTransitionOnChange: false
  },
  themeConfig
});

export default theme;
