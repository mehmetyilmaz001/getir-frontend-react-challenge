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
    [SortEnum.PRIRCE_LOW_TO_HIGH]: "&_sort=price&_order=asc",
    [SortEnum.PRIRCE_HIGH_TO_LOW]: "&_sort=price&_order=desc",
    [SortEnum.NEW_TO_OLD]: "&_sort=added&_order=asc",
    [SortEnum.OLD_TO_NEW]: "&_sort=added&_order=desc"
}