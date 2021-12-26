import { Basket, BasketItem } from './../../types/Basket';
export const mockBasketItem: BasketItem = {
    added: 213213123,
    description: "",
    itemType: "",
    manufacturer: "",
    slug: "",
    tags: [],
    name: "test",
    price: 111,
    quantity: 1,
  };

export const mockBaskeCardStore: Basket = {
    items: [mockBasketItem],
    total: 2222
}