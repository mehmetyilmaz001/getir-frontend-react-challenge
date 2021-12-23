import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import theme from './Theme';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};
  }
`;

export default GlobalStyle;