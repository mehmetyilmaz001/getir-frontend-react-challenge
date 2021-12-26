import { Basket, BasketItem } from './../../types/Basket';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from '..';
import { Item } from '../../types/Item';
  
const initialState: Basket = {
    items: [],
    total: 0
  };


  const basket = createSlice({
    name: "basket",
    initialState,
    reducers: {
      setItems: (state: Basket, action: PayloadAction<BasketItem[]>) => void (state.items = action.payload),
      setTotal: (state: Basket, action: PayloadAction<number>) => void (state.total = action.payload),
    }
  });

  export const {
    setItems,
    setTotal
  } = basket.actions;



 export const addOrRemoveItem = (item: BasketItem , action: 'add' | 'remove'):  AppThunk => async (dispatch: AppDispatch, getState) => {
    const { items } = getState().basket;
    const existingItem = items.find(i => i.name === item.name);
    
    let newItems = [];
    if (existingItem) {
        if (action === 'add') {
          newItems = items.map(i => i.name === item.name ? { ...existingItem, quantity: existingItem.quantity + 1 } : i);
        }else{

          if(item.quantity === 1){
            newItems = items.filter(i => i.name !== item.name);
          }else{
            newItems = items.map(i => i.name === item.name ? { ...existingItem, quantity: existingItem.quantity - 1 } : i);
          }
        }
      
    }else{
      newItems = [...items, { ...item, quantity: 1 }];
    }
    
    dispatch(setItems(newItems));
    dispatch(setTotal(calculateTotal(newItems)));
}

 const calculateTotal = (items: BasketItem[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
 


  export default basket.reducer;
