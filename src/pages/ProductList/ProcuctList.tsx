import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import RadioGroup from "../../components/common/RadioGroup";
import { SortEnum, SortEnumMap } from "../../enums/Sort";
import theme from "../../style/Theme";
import { Option } from "../../components/common/types/Option";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/ProductReducer";
import { Store } from "../../redux";
import {
  getBrands,
  getItemTypes,
  getTags,
} from "../../redux/reducers/LookupReducer";
import { Pagination } from "../../types/Pagination";
import FiltersWithLookup from "./components/Filters";
import { Item } from "../../types/Item";
import Skeleton from "react-loading-skeleton";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(4)};
`;

const FilterColumn = styled.div`
  flex: 1;
  > div {
    margin-bottom: ${theme.spacing(6)};
  }
`;

const ListingColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
`;

const BasketColumn = styled.div`
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing(5)};
  padding: ${theme.spacing(5)};
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;

const Title = styled.h4`
  color: ${theme.palette.text.tertiary};
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0;
`;

interface ProductListProps {}

const ProductList: FunctionComponent<ProductListProps> = () => {
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    pageSize: 16,
    count: 0,
  });

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: Store) => state.product);
  const {
    brands,
    tags,
    itemTypes,
    loading: lookupLoading,
  } = useSelector((state: Store) => state.lookup);

  useEffect(() => {
    dispatch(getProducts(pagination));
  }, [dispatch, pagination]);

  useEffect(() => {
    dispatch(getTags());
    dispatch(getBrands());
    dispatch(getItemTypes());
  }, [dispatch]);

  return (
    <Container>
      <FilterColumn>
        <FiltersWithLookup
          brands={brands}
          tags={tags}
          loading={lookupLoading}
        />
      </FilterColumn>

      <ListingColumn>
        <Title>Products</Title>

        <RadioGroup
          type="button"
          value={"mug"}
          options={itemTypes.map((i) => ({ label: i, value: i }))}
          onChange={(itemType) => console.log("item type: ", itemType)}
        />

        <ProductGrid products={data.items} loading={loading} />
      </ListingColumn>

      <BasketColumn>Basket</BasketColumn>
    </Container>
  );
};

interface IProductGrid {
  products: Item[];
  loading: boolean;
}

const ProductGrid: FunctionComponent<IProductGrid> = ({
  products,
  loading,
}) => {
  const ProductSkeleton = () => {
    return (
      <>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} style={{display:"flex", flexDirection: "column", gap: 8}}>
              <Skeleton height="192px" style={{borderRadius: 12}} />
              <Skeleton height="20px" />
              <Skeleton height="16px" />
              <Skeleton height="32px" />
            </div>
          ))}
      </>
    );
  };

  return (
    <Grid>
      {loading ? (
        <ProductSkeleton />
      ) : (
        products.map((i) => (
          <ProductCard
            key={i.name}
            title={i.name}
            price={i.price}
            imgSrc="https://picsum.photos/200/300?random=2"
            id={i.name}
            onSelect={() => console.log(i)}
          />
        ))
      )}
    </Grid>
  );
};

export default ProductList;
