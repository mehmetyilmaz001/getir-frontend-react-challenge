import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "../redux";


interface GetDataAndDispatchParams<T>{
    loadingDispatch: ActionCreatorWithPayload<boolean, string>,
    successDispatch: ActionCreatorWithPayload<T, string>,
    url: string
}

export const getDataAndDispatch  = <T> ({
    loadingDispatch, 
    successDispatch, 
    url}: GetDataAndDispatchParams<T>): AppThunk => async (dispatch: AppDispatch) => {
    
    try{
        dispatch(loadingDispatch(true));
        const serviceRes = await fetch(url);
        const itemsJson = await serviceRes.json();
        if(serviceRes.ok && serviceRes.status === 200){
            dispatch(successDispatch(itemsJson));
        }
        
    }catch(e){
        console.error(e);
    }finally{
        dispatch(loadingDispatch(false));
    }
  };