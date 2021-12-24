import { SortEnum, SortMapFunction } from './../../enums/Sort';
import { Pagination } from './../../types/Pagination';
import { API_ITEMS_URL } from './../../constants/api';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "..";
import { Item } from "../../types/Item";

interface IPaginationData <T>{
  count: number;
  items:T;
}

interface IFilter{
  tags: string[];
  brands: string[];
  itemType: string | null;
  sort: SortEnum | null;
}

export type ProductReducerType = {
    loading: boolean;
    data: IPaginationData<Item[]>;
    filter: IFilter;
  };
  
  const initialState: ProductReducerType = {
    loading: false,
    data: {count: 0, items:[]},
    filter: {
      tags: [],
      brands: [],
      itemType: null,
      sort: null
    }
  };


  const product = createSlice({
    name: "product",
    initialState,
    reducers: {
      setData: (state: ProductReducerType, action: PayloadAction<IPaginationData<Item[]>>) => void (state.data = action.payload),
      setLoading: (state: ProductReducerType, action: PayloadAction<boolean>) => void (state.loading = action.payload),
      setFilter: (state: ProductReducerType, action: PayloadAction<IFilter> ) => void (state.filter = action.payload),
    }
  });


  export const {
    setLoading,
    setData,
    setFilter
  } = product.actions;

  export const getProducts = (pagination: Pagination): AppThunk => async (dispatch: AppDispatch) => {
    
    try{
        dispatch(setLoading(true));
        const serviceRes = await fetch(`${API_ITEMS_URL}?_page=${pagination.page}&_limit=${pagination.pageSize}`);
        const itemsJson = await serviceRes.json();
        if(serviceRes.ok && serviceRes.status === 200){
            
            const data: IPaginationData<Item[]> = {
              count: serviceRes.headers.get('X-Total-Count') ? parseInt(serviceRes.headers.get('X-Total-Count')!) : 0,
              items: itemsJson
            }
            
            dispatch(setData(data));
        }
        
    }catch(e){
        console.error(e);
    }finally{
        dispatch(setLoading(false));
    }
  };


  export const sortProducts = (sortParam: SortEnum): AppThunk => async (dispatch: AppDispatch, getState) => {
    
    const data = getState().product.data;
    let items = [...data.items];

    items.sort(SortMapFunction[sortParam]);
    
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setData({...data, items}));
      dispatch(setLoading(false));
    }, 500)
    
    
  };

  export default product.reducer;
