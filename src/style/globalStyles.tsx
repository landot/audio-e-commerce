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
  html, body {
    height: 100%;
    width: 100%;
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.offWhite};
    color: ${props => props.theme.colors.black};
    max-width: 100vw;
    overflow-x: hidden;
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  input, textarea, button {font-family: inherit}

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    user-select: none;
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`;

export default theme;