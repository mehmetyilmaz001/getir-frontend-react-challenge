import * as React from 'react';
import styled from 'styled-components';
import theme from '../../style/Theme';
import { Basket} from '../../types/Basket';
import Card from '../common/Card';
import FormattedLabel from '../common/FormattedLabel/FormattedLabel';
import BasketListItem from './components/BasketListItem';


interface BasketCardProps {
    data: Basket;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${theme.spacing(4)};
`;


const Total = styled.div`
    display: flex;
    width: 92px;
    height: 51px;
    justify-content: center;
    align-items: center;
    border: 2px solid ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
    font-size: 14px;
    font-weight: 600;
`;
 
const BasketCard: React.FunctionComponent<BasketCardProps> = ({data}) => {
    return ( 
        <Card style={{border: `solid 6px ${theme.palette.primary.main}`}}>
            <Container>
                {data.items.map((item, index) => <BasketListItem key={index} item={item} />)}
               <Total> <FormattedLabel price={data.total} /></Total>
            </Container>
        </Card>
     );
}
 
export default BasketCard;





 
