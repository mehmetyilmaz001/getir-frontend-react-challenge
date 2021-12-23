import { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../style/Theme';

import logo from '../../assets/market-logo.svg';

interface HeaderProps {
    
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.palette.primary.main};
    height: 76.64px;

`;
 
const Header: FunctionComponent<HeaderProps> = () => {
    return ( 
        <StyledHeader>
            <img src={logo} alt="Market" />
        </StyledHeader>
     );
}
 
export default Header;