import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import App from './App';  
import { mockBaskeCardStore, mockBasketItem } from "./components/BasketCard/MockStore";
const mockStore = configureStore([]);

test('App render test', () => {
  let store;
  let component: any;

    store = mockStore({
       root: {
          isTabletOrMobile: false,
       },
        basket: {
          ...mockBaskeCardStore
        },
        product: {
           data: {count: 0, items: [mockBasketItem]},
           pagination: {
             page:1
           }
        },
        lookup: {
          itemTypes: [],
        }
    });

    component = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>
      );
 

  expect(component!.toJSON()).toMatchSnapshot();
});
