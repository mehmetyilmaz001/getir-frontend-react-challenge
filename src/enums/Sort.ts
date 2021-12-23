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