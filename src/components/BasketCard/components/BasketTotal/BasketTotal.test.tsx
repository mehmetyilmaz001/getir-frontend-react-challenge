import BasketTotal from "./BasketTotal";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import { mockBaskeCardStore } from "../../MockStore";


const mockStore = configureStore([]);

test("Basket total renders from redux store correctly", async () => {
  let store;
  let component: any;

    store = mockStore({
       basket: {
        ...mockBaskeCardStore
       }  
    });

    component = renderer.create(
        <Provider store={store}>
          <BasketTotal showBasketIcon={false} theme="light" />
        </Provider>
      );
 

  expect(component!.toJSON()).toMatchSnapshot();
});
