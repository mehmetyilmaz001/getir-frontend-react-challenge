import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import CommonLayout from "./layouts/CommonLayout";
import ProductList from "./pages/ProductList/ProcuctList";
import { setIsBigScreen, setIsDesktopOrLaptop, setIsPortrait, setIsRetina, setIsTabletOrMobile } from "./redux/reducers/RootReducer";
import GlobalStyle from "./style/GlobalStyle";



function App() {

  const dispatch = useDispatch();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  useEffect(() => {
    dispatch(setIsDesktopOrLaptop(isDesktopOrLaptop));
    dispatch(setIsBigScreen(isBigScreen));
    dispatch(setIsTabletOrMobile(isTabletOrMobile));
    dispatch(setIsPortrait(isPortrait));
    dispatch(setIsRetina(isRetina));
  }, [
    isDesktopOrLaptop,
    isTabletOrMobile,
    isPortrait,
    isRetina,
    isBigScreen,
    dispatch
  ])

  return (
    <>
      <GlobalStyle />
      <CommonLayout>
        <ProductList />
      </CommonLayout>
    </>
  );
}

export default App;


