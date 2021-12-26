import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addOrRemoveItem } from '../../../../redux/reducers/BasketReducer';
import theme, { colors } from '../../../../style/Theme';
import { BasketItem} from '../../../../types/Basket';
import Button from '../../../common/Button/Button';
import FormattedLabel from '../../../common/FormattedLabel/FormattedLabel';
import { ReactComponent as MinusIcon } from '../../../common/assets/minus.svg';
import { ReactComponent as PlusIcon } from '../../../common/assets/plus.svg';

const BasketItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    width: 100%;

    :after {
        content: "";
        position: absolute;
        bottom: -18.39px;
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

    h5 {margin: 0; font-size: 14px}
`;


const Price = styled(FormattedLabel)`
    font-size:14px;
    font-weight: 600;
    color: ${theme.palette.primary.main};
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;

const Quaintity = styled.div`
    display: flex;
    background-color: ${theme.palette.primary.main};
    color: ${colors.white};
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    font-weight: 700;
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
                <Price price={item.price} />
            </TitleAndPrice>

            <Buttons>
                <Button customType='transparent' onClick={() => dispatch(addOrRemoveItem(item, 'remove'))}><MinusIcon /></Button>
                <Quaintity>{item.quantity}</Quaintity>
                <Button customType='transparent' onClick={() => dispatch(addOrRemoveItem(item, 'add'))}><PlusIcon /></Button>
            </Buttons>
        </BasketItemContainer>
      );
}

export default BasketListItem;

