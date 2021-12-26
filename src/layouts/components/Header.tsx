import { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from '../../style/Theme';

import logo from '../../assets/market-logo.svg';
import BasketTotal from '../../components/BasketCard/components/BasketTotal';

interface HeaderProps {
    
}

const StyledHeader = styled.header`
    display: flex;
    // flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${theme.palette.primary.main};
    height: 76.64px;
`;


const HeaderInnerContainer = styled.div`
    display: flex;  
    height: 100%;
    justify-content: center;
    align-items: center;
    width: ${theme.desktop.containerSize};
    position: relative;
`;


const BasketContainer = styled.div`
    position: absolute;
    width: 129px;
    height: 100%;
    right: 0;
`;
 
const Header: FunctionComponent<HeaderProps> = () => {
    return ( 
        <StyledHeader>
            <HeaderInnerContainer>
                <img src={logo} alt="Market" />
                <BasketContainer>
                    <BasketTotal theme='dark' showBasketIcon={true} />
                </BasketContainer>
            </HeaderInnerContainer>
        </StyledHeader>
     );
}
 
export default Header;