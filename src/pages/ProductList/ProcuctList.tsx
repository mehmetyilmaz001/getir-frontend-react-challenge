import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import SingleChoice from "../../components/SingleChoiceFilter";
import theme from "../../style/Theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(4)};
`;

const FilterColumn = styled.div`
  flex:1;
`

const ListingColumn = styled.div`
  flex:3;
`

const BasketColumn = styled.div`
  flex:1;
`

interface ProductListProps {}

const ProductList: FunctionComponent<ProductListProps> = () => {
  return (
      <Container>
          <FilterColumn>
            <SingleChoice title="Sort" />
          </FilterColumn>

          <ListingColumn>
            Products
          </ListingColumn>

          <BasketColumn>Basket</BasketColumn>

      </Container>
  )
};

export default ProductList;
