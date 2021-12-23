import { FunctionComponent } from "react";
import styled from "styled-components";
import SingleChoice from "../../components/SingleChoiceFilter";
import { SortEnum, SortEnumMap } from "../../enums/Sort";
import theme from "../../style/Theme";
import { Option } from "../../types/Option";

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


const sortOptions: Option[] = Object.keys(SortEnumMap).map((i: string) => {
    const value = (i as unknown) as SortEnum;
    return  { value, label: SortEnumMap[value]}
});


const ProductList: FunctionComponent<ProductListProps> = () => {
  return (
      <Container>
          <FilterColumn>
            <SingleChoice 
              title="Sort" 
              options={sortOptions}
              onChange={(sort: SortEnum) => console.log(sort)}
            />
          </FilterColumn>

          <ListingColumn>
            Products
          </ListingColumn>

          <BasketColumn>Basket</BasketColumn>

      </Container>
  )
};

export default ProductList;
