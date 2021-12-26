import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Store } from '../../redux';
import theme from '../../style/Theme';
import Card from '../common/Card';
import BasketListItem from './components/BasketListItem/BasketListItem';
import BasketTotal from './components/BasketTotal/BasketTotal';


interface BasketCardProps {
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${theme.spacing(4)};
`;


const TotalContainer = styled.div`
    width: 92px;
    height: 51px;
`
 

/**
 * Resuable component for displaying a basket which is connected to the redux store
 */
const BasketCard: React.FunctionComponent<BasketCardProps> = () => {
    
    const { items } = useSelector((state: Store) => state.basket);
    if(items.length === 0) {
        return <></>;
    }
    return ( 
        <Card style={{border: `solid 6px ${theme.palette.primary.main}`}}>
            <Container>
                {items.map((item, index) => <BasketListItem key={index} item={item} />)}

                <TotalContainer>
                    <BasketTotal showBasketIcon={false} theme='light'/>
               </TotalContainer>
            </Container>
        </Card>
     );
}
 
export default BasketCard;



 

 





 
