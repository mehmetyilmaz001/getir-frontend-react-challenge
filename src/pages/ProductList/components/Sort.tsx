import * as React from "react";
import RadioGroup from "../../../components/common/RadioGroup";
import { setSelectedSort } from "../../../redux/reducers/ProductReducer";
import { Option } from "../../../components/common/types/Option";
import { SortEnum, SortEnumMap } from "../../../enums/Sort";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../redux";

const sortOptions: Option[] = Object.keys(SortEnumMap).map((i: string) => {
  const value = i as unknown as SortEnum;
  return { value, label: SortEnumMap[value] };
});

interface SortProps {}

const Sort: React.FunctionComponent<SortProps> = () => {
  const dispatch = useDispatch();
  const { selectedSort } = useSelector((state: Store) => state.product);
  const { isTabletOrMobile } = useSelector((state: Store) => state.root);

  return (
    <RadioGroup
      showAsCombobox={isTabletOrMobile}
      title="Sort"
      options={sortOptions}
      value={selectedSort}
      onChange={(sort: Option) => dispatch(setSelectedSort(sort))}
    />
  );
};

export default Sort;
