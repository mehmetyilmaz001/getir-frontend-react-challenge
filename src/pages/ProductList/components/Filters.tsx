import * as React from "react";
import Skeleton from "react-loading-skeleton";
import CheckboxGroup from "../../../components/common/CheckboxGroup";
import RadioGroup from "../../../components/common/RadioGroup";
import { SortEnum, SortEnumMap } from "../../../enums/Sort";
import { Option } from "../../../components/common/types/Option";
import Card from "../../../components/common/Card";
import { useDispatch } from "react-redux";
import { clearFilters, setSelectedBrands, setSelectedSort, setSelectedTags } from "../../../redux/reducers/ProductReducer";
import Button from "../../../components/common/Button/Button";


const sortOptions: Option[] = Object.keys(SortEnumMap).map((i: string) => {
  const value = i as unknown as SortEnum;
  return { value, label: SortEnumMap[value] };
});

interface IFiltersWithLookup {
  brands: string[];
  tags: string[];
  selectedBrands: Option[] | null;
  selectedSort:Option | null; 
  selectedTags:Option[] | null;
  loading: boolean;
}

const FiltersWithLookup: React.FunctionComponent<IFiltersWithLookup> = ({
  tags,
  brands,
  loading,
  selectedBrands,
  selectedSort,
  selectedTags
}) => {

  const dispatch = useDispatch();


  // console.log("FiltersWithLookup render", tags,
  // brands,
  // loading,
  // selectedBrands,
  // selectedSort,
  // selectedTags,);
  

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
    <>
      <RadioGroup
        title="Sort"
        options={sortOptions}
        value={selectedSort}
        onChange={(sort: Option) => dispatch(setSelectedSort(sort))}
        
      />
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
    </>
  );
};

export default React.memo(FiltersWithLookup);
