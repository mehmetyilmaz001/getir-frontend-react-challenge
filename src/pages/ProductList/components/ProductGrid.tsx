import React, { FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { addOrIncreaseItem } from "../../../redux/reducers/BasketReducer";
import { Item } from "../../../types/Item";
import { Grid } from "./StyledComponents";

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

  export default ProductGrid;