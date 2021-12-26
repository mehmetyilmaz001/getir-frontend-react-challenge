import { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import RadioGroup from "../../components/common/RadioGroup";
import theme from "../../style/Theme";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  setPagination,
  setSelectedItemType,
} from "../../redux/reducers/ProductReducer";
import { Store } from "../../redux";
import {
  getBrands,
  getItemTypes,
  getTags,
} from "../../redux/reducers/LookupReducer";
import FiltersWithLookup from "./components/Filters";
import { Item } from "../../types/Item";
import Skeleton from "react-loading-skeleton";
import Pagination from "../../components/common/Pagination/Pagination";
import BasketCard from "../../components/BasketCard/BasketCard";
import { addOrIncreaseItem } from "../../redux/reducers/BasketReducer";
import React from "react";
import { mq } from "../../style/Mixins";
import Sort from "./components/Sort";

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

  ${mq("mobile")} {
    padding: 10px;
  }
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

  ${mq("mobile")} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${mq("tablet")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Title = styled.h4`
  color: ${theme.palette.text.tertiary};
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0;
`;

const PaginationContainer = styled.div`
  padding: 33px;

  ${mq("mobile")} {
    padding: 5px;
  }
`;

interface ProductListProps {}

/**
 * A component that displays a list of products
 */
const ProductList: FunctionComponent<ProductListProps> = () => {
  const dispatch = useDispatch();
  const {
    data,
    loading,
    selectedItemType,
    pagination,
    selectedBrands,
    selectedSort,
    selectedTags,
  } = useSelector((state: Store) => state.product);

  const {
    itemTypes,
  } = useSelector((state: Store) => state.lookup);

  const { isDesktopOrLaptop, isTabletOrMobile } = useSelector((s: Store) => s.root);

  useEffect(() => {
    dispatch(getProducts());
  }, [
    dispatch,
    pagination.page,
    selectedBrands,
    selectedSort,
    selectedTags,
    selectedItemType,
  ]);

  useEffect(() => {
    dispatch(getTags());
    dispatch(getBrands());
    dispatch(getItemTypes());
  }, [dispatch]);

  return (
    <Container>
      {isDesktopOrLaptop && (
        <FilterColumn>
          <Sort />
          <FiltersWithLookup/>
        </FilterColumn>
      )}

      <ListingColumn className="listing-column">

        {isTabletOrMobile && 
           <Sort />
        }

        <Title>Products</Title>

        <RadioGroup
          type="button"
          value={selectedItemType}
          options={itemTypes.map((i) => ({ label: i, value: i }))}
          onChange={(itemType) => dispatch(setSelectedItemType(itemType))}
        />

        <ProductGrid products={data.items} loading={loading} />

        {data.count > 16 && (
          <PaginationContainer>
            <Pagination
              totalPages={Math.ceil(pagination.count / pagination.pageSize)}
              activePage={pagination.page}
              onChange={(page: number) =>
                dispatch(setPagination({ ...pagination, page }))
              }
            />
          </PaginationContainer>
        )}
      </ListingColumn>

      {isDesktopOrLaptop && (
        <BasketColumn>
          <BasketCard />
        </BasketColumn>
      )}
    </Container>
  );
};

interface IProductGrid {
  products: Item[];
  loading: boolean;
}

const ProductGrid: FunctionComponent<IProductGrid> = React.memo(
  ({ products, loading }) => {
    const dispatch = useDispatch();

    const ProductSkeleton = () => {
      return (
        <>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <Skeleton height="192px" style={{ borderRadius: 12 }} />
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
          <>
            {products.length > 0 ? (
              products.map((i) => (
                <ProductCard
                  key={i.name}
                  title={i.name}
                  price={i.price}
                  imgSrc={`https://picsum.photos/200/300?random=${Math.random()}`}
                  id={i.name}
                  onSelect={() => dispatch(addOrIncreaseItem(i))}
                />
              ))
            ) : (
              <>No products found!</>
            )}
          </>
        )}
      </Grid>
    );
  }
);

export default React.memo(ProductList);
