import BasketListItem from "./BasketListItem";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { mockBasketItem } from "../../MockStore";

const mockStore = configureStore([]);

test("Basket list item renders correctly", async () => {
  let store;
  let component;

  store = mockStore({
    total: 111,
  });


  component = renderer.create(
    <Provider store={store}>
      <BasketListItem item={mockBasketItem} />
    </Provider>
  );
  expect(component!.toJSON()).toMatchSnapshot();
});
