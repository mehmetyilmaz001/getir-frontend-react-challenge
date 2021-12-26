import { SortEnum, SortMapFunction } from "./../../enums/Sort";
import { PaginationType } from "../../components/common/types/PaginationType";
import { API_ITEMS_URL } from "./../../constants/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import { Item } from "../../types/Item";
import { Option } from "../../components/common/types/Option";

interface IPaginationData<T> {
  count: number;
  items: T;
}

export type ProductReducerType = {
  loading: boolean;
  data: IPaginationData<Item[]>;
  selectedItemType: Option | null;
  selectedSort: Option | null;
  selectedTags: Option[] | null;
  selectedBrands: Option[] | null;
  pagination: PaginationType;
  hasError: boolean;
};

const initialState: ProductReducerType = {
  loading: false,
  data: { count: 0, items: [] },
  selectedItemType: null,
  selectedBrands: null,
  selectedSort: null,
  selectedTags: null,
  pagination: { page: 0, pageSize: 16, count: 0 },
  hasError: false,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    setData: (
      state: ProductReducerType,
      action: PayloadAction<IPaginationData<Item[]>>
    ) => void (state.data = action.payload),
    setLoading: (state: ProductReducerType, action: PayloadAction<boolean>) =>
      void (state.loading = action.payload),
    setSelectedItemType: (
      state: ProductReducerType,
      action: PayloadAction<Option | null>
    ) => void (state.selectedItemType = action.payload),
    setSelectedSort: (
      state: ProductReducerType,
      action: PayloadAction<Option | null>
    ) => void (state.selectedSort = action.payload),
    setSelectedTags: (
      state: ProductReducerType,
      action: PayloadAction<Option[] | null>
    ) => void (state.selectedTags = action.payload),
    setSelectedBrands: (
      state: ProductReducerType,
      action: PayloadAction<Option[] | null>
    ) => void (state.selectedBrands = action.payload),
    setPagination: (
      state: ProductReducerType,
      action: PayloadAction<PaginationType>
    ) => void (state.pagination = action.payload),
    setHasError: (
      state: ProductReducerType,
      action: PayloadAction<boolean>
    ) => void (state.hasError = action.payload),
  },
});

export const {
  setLoading,
  setData,
  setSelectedItemType,
  setSelectedSort,
  setSelectedBrands,
  setSelectedTags,
  setPagination,
  setHasError
} = product.actions;

export const getProducts =
  (): AppThunk => async (dispatch: AppDispatch, getState) => {
    const {
      selectedSort,
      selectedTags,
      selectedBrands,
      selectedItemType,
      pagination,
    } = getState().product;

    let queryParams = "";

    if (selectedSort) {
      const enumKey = selectedSort.value as SortEnum;
      queryParams += SortMapFunction[enumKey];
    }

    if (selectedTags && selectedTags.length > 0) {
      queryParams += "&tags_like=" + selectedTags.map(i => i.value).join(",");
    }

    if (selectedBrands && selectedBrands.length > 0) {
      queryParams += "&manufacturer=" + selectedBrands.map(i => i.value).join("&manufacturer=");
    }

    if (selectedItemType) {
      queryParams += "&itemType=" + selectedItemType.value;
    }
    

    try {
      dispatch(setLoading(true));
      const serviceRes = await fetch(
        `${API_ITEMS_URL}?_page=${pagination.page}&_limit=${pagination.pageSize}${queryParams}`
      );
      const itemsJson = await serviceRes.json();
      if (serviceRes.ok && serviceRes.status === 200) {

        const totalCount = serviceRes.headers.get("X-Total-Count")!;
        const data: IPaginationData<Item[]> = {
          count: totalCount ? parseInt(totalCount!) : 0,
          items: itemsJson,
        };
        dispatch(setData(data));
        dispatch(setPagination({...pagination, count: data.count}))
        dispatch(setHasError(false));
      }
    } catch (e) {
      console.error(e);
      dispatch(setHasError(true));
    } finally {
      dispatch(setLoading(false));
    }
  };


export const clearFilters = () => (dispatch: AppDispatch) => {
  dispatch(setSelectedItemType(null));
  dispatch(setSelectedSort(null));
  dispatch(setSelectedTags(null));
  dispatch(setSelectedBrands(null));

}
export default product.reducer;
