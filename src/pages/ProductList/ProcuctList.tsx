import { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import CheckboxGroup from "../../components/common/CheckboxGroup";
import RadioGroup from "../../components/common/RadioGroup";
import { SortEnum, SortEnumMap } from "../../enums/Sort";
import theme from "../../style/Theme";
import { Option } from "../../components/common/types/Option";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/ProductReducer";
import { Store } from "../../redux";
import { getBrands, getItemTypes, getTags } from "../../redux/reducers/LookupReducer";

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
  gap: ${theme.spacing(5)};
  padding: ${theme.spacing(5)};
  background: #FFFFFF;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;


const Title = styled.h4`
  color: ${theme.palette.text.tertiary};
  font-size: 20px;
  margin-top: 0;
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

  const dispatch = useDispatch();
  const {list, loading} = useSelector((state: Store) => state.product);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getTags());
    dispatch(getBrands());
    dispatch(getItemTypes());
  }, [dispatch])


  if(loading){
    return <>Loading</>
  }

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
            <Title>Products</Title>
            <ProductListGrid>
              {list.map(i => <ProductCard
                key={i.name}
                title={i.name} 
                price={i.price} 
                imgSrc="https://picsum.photos/200/300?random=2" 
                id={i.name}
                onSelect={() => console.log(i)}
                />) }
              </ProductListGrid>
          </ListingColumn>

          <BasketColumn>Basket</BasketColumn>

      </Container>
  )
};

export default ProductList;
