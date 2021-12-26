import * as React from "react";
import Skeleton from "react-loading-skeleton";
import CheckboxGroup from "../../../components/common/CheckboxGroup";
import { Option } from "../../../components/common/types/Option";
import Card from "../../../components/common/Card";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, setSelectedBrands, setSelectedTags } from "../../../redux/reducers/ProductReducer";
import Button from "../../../components/common/Button/Button";
import { Store } from "../../../redux";

interface IFiltersWithLookup {
}

const FiltersWithLookup: React.FunctionComponent<IFiltersWithLookup> = () => {

  const dispatch = useDispatch();

  const {
    selectedBrands,
    selectedTags,
  } = useSelector((state: Store) => state.product);

  const {
    brands,
    tags,
    loading,
  } = useSelector((state: Store) => state.lookup);

  const SkeletonList = React.memo(() => {
    return (
      <>
        {["Sort", "Brands", "Tags"].map((i) => (
          <Card key={i} title="Sort">
            <div style={{ gap: 8, display: "flex", flexDirection: "column" }}>
              {Array(4)
                .fill(1)
                .map((_, index ) => (
                  <Skeleton key={index} height={20} />
                ))}
            </div>
          </Card>
        ))}
      </>
    );
  });

  if (loading) {
    return <SkeletonList/>;
  }

  return (
    <div>
      <CheckboxGroup
        title="Brands"
        options={brands.map((i: string) => ({ value: i, label: i }))}
        hasSearch={true}
        value={selectedBrands}
        searchPlaceholder="Search brand"
        onChange={(brands: Option[]) => dispatch(setSelectedBrands(brands))}
      />

      <CheckboxGroup
        title="Tags"
        options={tags.map((i: string) => ({ value: i, label: i }))}
        hasSearch={true}
        value={selectedTags}
        searchPlaceholder="Search tag"
        onChange={(tags: Option[]) => dispatch(setSelectedTags(tags))}
      />

      <Button customType="primary" onClick={() => dispatch(clearFilters())}>Clear Filters</Button>
    </div>
  )
};

export default React.memo(FiltersWithLookup);
