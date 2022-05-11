import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      &::before,
      &::after {
        box-sizing: inherit;
      }
  }

  *,
  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html,
  body {
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default GlobalStyles;
