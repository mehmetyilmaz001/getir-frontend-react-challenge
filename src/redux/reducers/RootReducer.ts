import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MediaQuery } from "../../types/MediaQuery";

interface RootReducerType extends MediaQuery{

}

const initialState: RootReducerType = {
    isBigScreen: false,
    isDesktopOrLaptop: false,
    isPortrait: false,
    isRetina: false,
    isTabletOrMobile: false
  };


  const root = createSlice({
    name: "root",
    initialState,
    reducers: {
      setIsBigScreen: (state: RootReducerType, action: PayloadAction<boolean>) => void (state.isBigScreen = action.payload),
      setIsDesktopOrLaptop: (state: RootReducerType, action: PayloadAction<boolean>) => void (state.isDesktopOrLaptop = action.payload),
      setIsPortrait: (state: RootReducerType, action: PayloadAction<boolean>) => void (state.isPortrait = action.payload),
      setIsRetina: (state: RootReducerType, action: PayloadAction<boolean>) => void (state.isRetina = action.payload),
      setIsTabletOrMobile: (state: RootReducerType, action: PayloadAction<boolean>) => void (state.isTabletOrMobile = action.payload),
    }
  });

  export const {
    setIsBigScreen,
    setIsDesktopOrLaptop,
    setIsPortrait,
    setIsRetina,
    setIsTabletOrMobile
  } = root.actions;

  export default root.reducer;
