import BasketCard from "./BasketCard";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { mockBaskeCardStore } from "./MockStore";

const mockStore = configureStore([]);

test("Basket card renders correctly", async () => {
  let store;
  let component;

  store = mockStore({
    basket: {
        ...mockBaskeCardStore
    } 
  });

  component = renderer.create(
    <Provider store={store}>
      <BasketCard/>
    </Provider>
  );
  expect(component!.toJSON()).toMatchSnapshot();
});
