import { API_ITEMS_URL } from './../../constants/api';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import { Item } from "../../types/Item";

export type ProductReducerType = {
    loading: boolean;
    list: Item[];
  };
  
  const initialState: ProductReducerType = {
    loading: false,
    list: [],
  };


  const product = createSlice({
    name: "product",
    initialState,
    reducers: {
      setList: (state: ProductReducerType, action: PayloadAction<Item[]>) => void (state.list = action.payload),
      setLoading: (state: ProductReducerType, action: PayloadAction<boolean>) => void (state.loading = action.payload),
    }
  });

  export const getProducts = (): AppThunk => async (dispatch: AppDispatch) => {
    
    try{
        dispatch(setLoading(true));
        const serviceRes = await fetch(API_ITEMS_URL);
        const itemsJson = await serviceRes.json();
        if(serviceRes.ok && serviceRes.status === 200){
            dispatch(setList(itemsJson));
        }
        
    }catch(e){
        console.error(e);
    }finally{
        dispatch(setLoading(false));
    }
    
  };
  

  
  export const {
    setLoading,
    setList,
  } = product.actions;


  export default product.reducer;
