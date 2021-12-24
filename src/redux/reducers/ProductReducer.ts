import { Pagination } from './../../types/Pagination';
import { API_ITEMS_URL } from './../../constants/api';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import { Item } from "../../types/Item";

interface PaginationData <T>{
  count: number,
  items:T
}

export type ProductReducerType = {
    loading: boolean;
    data: PaginationData<Item[]>;
  };
  
  const initialState: ProductReducerType = {
    loading: false,
    data: {count: 0, items:[]},
  };


  const product = createSlice({
    name: "product",
    initialState,
    reducers: {
      setList: (state: ProductReducerType, action: PayloadAction<PaginationData<Item[]>>) => void (state.data = action.payload),
      setLoading: (state: ProductReducerType, action: PayloadAction<boolean>) => void (state.loading = action.payload),
    }
  });

  export const getProducts = (pagination: Pagination): AppThunk => async (dispatch: AppDispatch) => {
    
    try{
        dispatch(setLoading(true));
        const serviceRes = await fetch(`${API_ITEMS_URL}?_page=${pagination.page}&_limit=${pagination.pageSize}`);
        const itemsJson = await serviceRes.json();
        if(serviceRes.ok && serviceRes.status === 200){
            
            const data: PaginationData<Item[]> = {
              count: serviceRes.headers.get('X-Total-Count') ? parseInt(serviceRes.headers.get('X-Total-Count')!) : 0,
              items: itemsJson
            }
            
            dispatch(setList(data));
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
