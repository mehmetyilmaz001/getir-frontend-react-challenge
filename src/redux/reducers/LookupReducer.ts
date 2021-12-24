import { API_BRANDS_URL, API_TAGS_URL } from './../../constants/api';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import {Option} from '../../components/common/types/Option';
import { getDataAndDispatch } from '../../helpers/action';

export type LookupReducerType = {
    loading: boolean;
    tags: Option[];
    brands: Option[];
  };
  
  const initialState: LookupReducerType = {
    loading: false,
    brands: [],
    tags: [],
  };


  const lookup = createSlice({
    name: "lookup",
    initialState,
    reducers: {
      setTags: (state: LookupReducerType, action: PayloadAction<Option[]>) => void (state.tags = action.payload),
      setBrands: (state: LookupReducerType, action: PayloadAction<Option[]>) => void (state.brands = action.payload),
      setLoading: (state: LookupReducerType, action: PayloadAction<boolean>) => void (state.loading = action.payload),
    }
  });


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
    
    // try{
    //     dispatch(setLoading(true));
    //     const serviceRes = await fetch(API_ITEMS_URL);
    //     const itemsJson = await serviceRes.json();
    //     if(serviceRes.ok && serviceRes.status === 200){
    //         dispatch(setTags(itemsJson));
    //     }
        
    // }catch(e){
    //     console.error(e);
    // }finally{
    //     dispatch(setLoading(false));
    // }
  };
  

  
  export const {
    setLoading,
    setTags,
    setBrands
  } = lookup.actions;


  export default lookup.reducer;
