import React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../style/Theme";
import Button from "../common/Button/Button";
import FormattedLabel from "../common/FormattedLabel/FormattedLabel";

interface Product {
  id: any;
  title: string;
  imgSrc: string;
  price: number;
}

interface ProductCardProps extends Product {
  onSelect: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing(2)};
  cursor: pointer;
`;


const Picture = styled.img`
    height: 192px;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid ${theme.palette.border.main};
    transition: all 0.2s ease-in-out;

    :hover {
      transform: scale(1.05);

    }
`;


const Price = styled(FormattedLabel)`
    color: ${theme.palette.primary.main};
    font-size: 14px;
    line-height: 20px;
`;

const Title = styled.h4`
    font-size: 14px;
    color: ${theme.palette.text.primary};
    font-weight: 600;
    margin:0;
`;    

const ProductCard: FunctionComponent<ProductCardProps> = ({imgSrc, title, price, onSelect}) => {
  return <Container>
        <Picture src={imgSrc} loading="lazy" alt={title} />
        <Price price={price} />
        <Title>{title}</Title>
        <Button customType="primary" onClick={() => onSelect()}>Add</Button>
  </Container>;
};

export default React.memo(ProductCard);
