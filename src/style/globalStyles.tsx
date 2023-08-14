import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: '#D87D4A',
    secondary: '#101010',
    lightGray: '#F1F1F1',
    offWhite: '#FAFAFA',
    accent: '#FBAF85',
    white: '#FFF',
    black: '#000',
  },
  fontFamily: 'Manrope, sans-serif',
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.offWhite};
    color: ${props => props.theme.colors.black};
  }
`;

export default theme;