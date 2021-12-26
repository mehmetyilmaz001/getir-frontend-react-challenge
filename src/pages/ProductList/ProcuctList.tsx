import { FunctionComponent, useEffect } from "react";
import RadioGroup from "../../components/common/RadioGroup";
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
import Pagination from "../../components/common/Pagination/Pagination";
import BasketCard from "../../components/BasketCard/BasketCard";
import React from "react";
import Sort from "./components/Sort";
import { BasketColumn, Container, FilterColumn, ListingColumn, PaginationContainer, Title } from "./components/StyledComponents";
import ProductGrid from "./components/ProductGrid";


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



export default React.memo(ProductList);
