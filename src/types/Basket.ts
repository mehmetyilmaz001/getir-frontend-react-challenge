import { Item } from "./Item";

export interface BasketItem extends Item {
    quantity: number;
}

export interface Basket{
    items: BasketItem[];
    total: number;
}