import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addOrIncreaseItem, removeOrDecreaseItem } from '../../../redux/reducers/BasketReducer';
import theme from '../../../style/Theme';
import { BasketItem} from '../../../types/Basket';
import Button from '../../common/Button/Button';
import FormattedLabel from '../../common/FormattedLabel/FormattedLabel';

const BasketItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;

    :after {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 1px;
        background-color: ${theme.palette.border.main};
    }
`;

const TitleAndPrice = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    gap: ${theme.spacing(1)};

    h5 {margin: 0;}
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    
`;

interface BasketItemProps {
    item: BasketItem
}
 
const BasketListItem: FunctionComponent<BasketItemProps> = ({item}) => {
    const dispatch = useDispatch();
    return (
        <BasketItemContainer>
            <TitleAndPrice>
                <h5>{item.name}</h5>
                <FormattedLabel price={item.price} />
            </TitleAndPrice>

            <Buttons>
                <Button customType='transparent' onClick={() => dispatch(removeOrDecreaseItem(item))}>-</Button>
                <div>{item.quantity}</div>
                <Button customType='transparent' onClick={() => dispatch(addOrIncreaseItem(item))}>+</Button>
            </Buttons>
        </BasketItemContainer>
      );
}

export default BasketListItem;

