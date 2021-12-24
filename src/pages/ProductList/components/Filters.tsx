import * as React from "react";
import Skeleton from "react-loading-skeleton";
import CheckboxGroup from "../../../components/common/CheckboxGroup";
import RadioGroup from "../../../components/common/RadioGroup";
import { SortEnum, SortEnumMap } from "../../../enums/Sort";
import { Option } from "../../../components/common/types/Option";
import Card from "../../../components/common/Card";

const sortOptions: Option[] = Object.keys(SortEnumMap).map((i: string) => {
  const value = i as unknown as SortEnum;
  return { value, label: SortEnumMap[value] };
});

interface IFiltersWithLookup {
  brands: string[];
  tags: string[];
  loading: boolean;
}

const FiltersWithLookup: React.FunctionComponent<IFiltersWithLookup> = ({
  tags,
  brands,
  loading,
}) => {

    console.log("brands", brands);


  const SkeletonList = () => {
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
  };

  if (loading) {
    return <SkeletonList />;
  }

  return (
    <>
      <RadioGroup
        title="Sort"
        options={sortOptions}
        onChange={(sort: SortEnum) => console.log(sort)}
      />
      <CheckboxGroup
        title="Brands"
        options={brands.map((i: string) => ({ value: i, label: i }))}
        hasSearch={true}
        searchPlaceholder="Search brand"
        onChange={(sort: SortEnum) => console.log(sort)}
      />

      <CheckboxGroup
        title="Tags"
        options={tags.map((i: string) => ({ value: i, label: i }))}
        hasSearch={true}
        searchPlaceholder="Search tag"
        onChange={(sort: SortEnum) => console.log(sort)}
      />
    </>
  );
};

export default React.memo(FiltersWithLookup);
