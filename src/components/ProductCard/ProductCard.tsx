import React from "react";
import { FunctionComponent } from "react";
import Button from "../common/Button/Button";
import {
  Container,
  Picture,
  Price,
  Title,
} from "./components/StyledComponents";

interface Product {
  id: any;

  /**
   * The title of the product
   */
  title: string;

  /**
   * The image source url of the product
   */
  imgSrc: string;

  /**
   * The price of the product
   */
  price: number;
}

interface ProductCardProps extends Product {
  /**
   * The function to be called when the product is selected for adding to the basket
   */
  onSelect: () => void;
}

/**
 * Resuable component for displaying a single product
 */
const ProductCard: FunctionComponent<ProductCardProps> = ({
  imgSrc,
  title,
  price,
  onSelect,
}) => {
  return (
    <Container>
      <Picture src={imgSrc} loading="lazy" alt={title} />
      <Price price={price} />
      <Title>{title}</Title>
      <Button customType="primary" onClick={() => onSelect()}>
        Add
      </Button>
    </Container>
  );
};

export default React.memo(ProductCard);
