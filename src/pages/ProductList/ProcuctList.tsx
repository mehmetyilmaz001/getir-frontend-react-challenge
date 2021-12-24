import { FunctionComponent } from "react";
import styled from "styled-components";
import CheckboxGroup from "../../components/common/CheckboxGroup";
import RadioGroup from "../../components/common/RadioGroup";
import { SortEnum, SortEnumMap } from "../../enums/Sort";
import theme from "../../style/Theme";
import { Option } from "../../components/common/types/Option";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(4)};
  
`;

const FilterColumn = styled.div`
  flex:1;
  div {
    margin-bottom: ${theme.spacing(6)};
  }
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

const brandOptions: Option[] = [
  {value: "apple", label: "Apple"},
  {value: "samsung", label: "Samsung"},
  {value: "huawei", label: "Huawei"},
  {value: "xiaomi", label: "Xiaomi"},
]


const ProductList: FunctionComponent<ProductListProps> = () => {
  return (
      <Container>
          <FilterColumn>
            <RadioGroup 
              title="Sort" 
              options={sortOptions}
              onChange={(sort: SortEnum) => console.log(sort)}
            />

            <CheckboxGroup
              title="Brands" 
              options={brandOptions}
              hasSearch={true}
              searchPlaceholder="Search brand"
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
