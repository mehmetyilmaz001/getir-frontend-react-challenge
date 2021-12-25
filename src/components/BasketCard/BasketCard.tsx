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
    gap: ${theme.spacing(4)};
`;
 
const BasketCard: React.FunctionComponent<BasketCardProps> = ({data}) => {
    return ( 
        <Card style={{border: `solid 6px ${theme.palette.primary.main}`}}>
            <Container>
                {data.items.map((item, index) => <BasketListItem key={index} item={item} />)}
                <FormattedLabel price={data.total} />
            </Container>
        </Card>
     );
}
 
export default BasketCard;





 
