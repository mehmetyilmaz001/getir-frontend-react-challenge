import { Item } from "../types/Item"

export enum SortEnum  {
    PRIRCE_LOW_TO_HIGH,
    PRIRCE_HIGH_TO_LOW,
    NEW_TO_OLD,
    OLD_TO_NEW,
}

export const SortEnumMap = {
    [SortEnum.PRIRCE_LOW_TO_HIGH]: 'Price Low to High',
    [SortEnum.PRIRCE_HIGH_TO_LOW]: 'Price High to Low',
    [SortEnum.NEW_TO_OLD]: 'New to Old',
    [SortEnum.OLD_TO_NEW]: 'Old to New'
}

export const SortMapFunction = {
    [SortEnum.PRIRCE_LOW_TO_HIGH]: (a: Item, b:Item) => a.price - b.price,
    [SortEnum.PRIRCE_HIGH_TO_LOW]: (a:Item, b:Item) => b.price - a.price,
    [SortEnum.NEW_TO_OLD]: (a:Item, b:Item) => a.added - b.added,
    [SortEnum.OLD_TO_NEW]: (a:Item, b:Item) => b.added - a.added
}