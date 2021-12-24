import { API_BRANDS_URL, API_ITEM_TYPES_URL, API_TAGS_URL } from './../../constants/api';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import {Option} from '../../components/common/types/Option';
import { getDataAndDispatch } from '../../helpers/action';

export type LookupReducerType = {
    loading: boolean;
    tags: Option[];
    brands: Option[];
    itemTypes: Option[];
  };
  
  const initialState: LookupReducerType = {
    loading: false,
    brands: [],
    tags: [],
    itemTypes: [],
  };


  const lookup = createSlice({
    name: "lookup",
    initialState,
    reducers: {
      setTags: (state: LookupReducerType, action: PayloadAction<Option[]>) => void (state.tags = action.payload),
      setBrands: (state: LookupReducerType, action: PayloadAction<Option[]>) => void (state.brands = action.payload),
      setItemTypes: (state: LookupReducerType, action: PayloadAction<Option[]>) => void (state.itemTypes = action.payload),
      setLoading: (state: LookupReducerType, action: PayloadAction<boolean>) => void (state.loading = action.payload),
    }
  });

  export const {
    setLoading,
    setTags,
    setBrands,
    setItemTypes
  } = lookup.actions;


  export const getTags = (): AppThunk => async (dispatch: AppDispatch) => {

    dispatch(getDataAndDispatch<Option[]>({
      loadingDispatch: setLoading, 
      successDispatch:  setTags, 
      url: API_TAGS_URL
    }));
  }

  export const getBrands = (): AppThunk => async (dispatch: AppDispatch) => {
    dispatch(getDataAndDispatch<Option[]>({
      loadingDispatch: setLoading, 
      successDispatch:  setBrands, 
      url: API_BRANDS_URL
    }));
  };
  
  export const getItemTypes = (): AppThunk => async (dispatch: AppDispatch) => {
    dispatch(getDataAndDispatch<Option[]>({
      loadingDispatch: setLoading, 
      successDispatch:  setItemTypes, 
      url: API_ITEM_TYPES_URL
    }));
  };
  

  
  


  export default lookup.reducer;
