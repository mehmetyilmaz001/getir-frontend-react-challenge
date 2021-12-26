import React from 'react';
import styled from 'styled-components';
import mainThememe from '../../../../style/Theme';
import FormattedLabel from '../../../common/FormattedLabel/FormattedLabel';
import { ReactComponent as BasketIcon } from '../../../../assets/basket-icon.svg';
import { useSelector } from 'react-redux';
import { Store } from '../../../../redux';
import { mq } from '../../../../style/Mixins';


interface BasketTotalProps {
    showBasketIcon: boolean;
    theme: 'light' | 'dark';
}
const Total = styled.div<{
    theme: Pick <BasketTotalProps, "theme">;
}>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({theme}) => theme === 'light' ? '2px' : 0} solid ${mainThememe.palette.primary.main};
    color: ${({theme}) => theme === 'light' ? mainThememe.palette.primary.main : mainThememe.palette.primary.text};
    background-color: ${({theme}) => theme === 'light' ? mainThememe.palette.primary.text : mainThememe.palette.accent.main};
    font-size: 14px;
    font-weight: 600;
    gap: 13px;

    ${mq('mobile')} {
       flex-direction : column;
    }
`;
 
export const BasketTotal: React.FunctionComponent<BasketTotalProps> = ({showBasketIcon, theme}) => {
    const { total, items } = useSelector((s:Store) => s.basket);
    if(items.length === 0) {
        return <></>
    }
    return ( 
        <Total theme={theme}>
            {showBasketIcon && <BasketIcon />}
            <FormattedLabel price={total} />
        </Total>
     );
}

export default BasketTotal;