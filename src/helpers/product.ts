import { Item } from "../types/Item";

// export const sortProducts = (items: Item[], sort: SortEnum): Item[] => {
//   switch (sort) {
//     case SortEnum.PRIRCE_LOW_TO_HIGH:
//       return items.sort((a, b) => a.price - b.price);
//     case SortEnum.PRIRCE_HIGH_TO_LOW:
//       return items.sort((a, b) => b.price - a.price);
//     case SortEnum.NEW_TO_OLD:
//       return items.sort((a, b) => a.added - b.added);
//     case SortEnum.OLD_TO_NEW:
//       return items.sort((a, b) => b.added - a.added);
//     default:
//       return items;
//   }
// };

export const filterProductsByTags = (items: Item[], tags: string[]): Item[] => {
  return items.filter((item) => {
    return tags.every((tag) => item.tags.includes(tag));
  });
};

export const filterProductsByBrand = (
  items: Item[],
  brands: string[]
): Item[] => {
  return items.filter((item) => {
    return brands.every((brand) => item.manufacturer === brand);
  });
};
