import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './Theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  *, *:before, *:after {  box-sizing: border-box; }
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  }
  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};
  }
`;

export default GlobalStyle;