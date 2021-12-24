import { FunctionComponent } from "react";
import styled from "styled-components";
import CheckboxGroup from "../../components/common/CheckboxGroup";
import RadioGroup from "../../components/common/RadioGroup";
import { SortEnum, SortEnumMap } from "../../enums/Sort";
import theme from "../../style/Theme";
import { Option } from "../../components/common/types/Option";
import ProductCard from "../../components/ProductCard/ProductCard";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(4)};
  
`;

const FilterColumn = styled.div`
  flex:1;
  > div {
    margin-bottom: ${theme.spacing(6)};
  }
`

const ListingColumn = styled.div`
  flex:3;
`

const BasketColumn = styled.div`
  flex:1;
`

const ProductListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

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

const tagOptions: Option[] = [
  {value: "All", label: "All"},
  {value: "Beach", label: "Beach"},
  {value: "Bike", label: "Bike"},
  {value: "People", label: "People"},
  {value: "People", label: "People"},
  {value: "People", label: "People"},
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

            <CheckboxGroup
              title="Tags" 
              options={tagOptions}
              hasSearch={true}
              searchPlaceholder="Search tag"
              onChange={(sort: SortEnum) => console.log(sort)}
            />
          </FilterColumn>

          <ListingColumn>

            <ProductListGrid>
              {Array(30).fill(1).map(i => <ProductCard 
                title="Deneme" 
                price={213123} 
                imgSrc="https://picsum.photos/200/300?random=1" id={1}
                onSelect={() => console.log("Selected")}
                />) }
              </ProductListGrid>
          </ListingColumn>

          <BasketColumn>Basket</BasketColumn>

      </Container>
  )
};

export default ProductList;
