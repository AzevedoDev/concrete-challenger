import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
  }

  body, input, button{
    color: ${colors.black};
    background-color: ${colors.white};
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
