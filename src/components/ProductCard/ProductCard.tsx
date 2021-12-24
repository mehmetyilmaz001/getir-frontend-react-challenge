import { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../style/Theme";
import Button from "../common/Button/Button";
import FormattedLabel from "../common/FormattedLabel/FormattedLabel";

interface Product {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
}

interface ProductCardProps extends Product {
  onSelect: (product: Product) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing(2)};
`;


const Picture = styled.img`
    height: 192px;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid ${theme.palette.border.main};
`;


const Price = styled(FormattedLabel)`
    color: ${theme.palette.primary.main};
    font-size: 14px;
    line-height: 20px;
`;

const Title = styled.h4`
    font-size: 14px;
    color: ${theme.palette.text.primary};
    margin:0;
`;    

const ProductCard: FunctionComponent<ProductCardProps> = ({imgSrc, title, price}) => {
  return <Container>
        <Picture src={imgSrc} loading="lazy" alt={title} />
        <Price price={price} />
        <Title>{title}</Title>
        <Button>Add</Button>
  </Container>;
};

export default ProductCard;
