
import CommonLayout from './layouts/CommonLayout';
import ProductList from './pages/ProductList/ProcuctList';
import GlobalStyle from './style/GlobalStyle';


function App() {
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
