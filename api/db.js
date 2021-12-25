const items = require("./data/items");

module.exports = () => {
  // const newItems = items.map((i) => ({
  //   ...i,
  //   tags: i.tags.join(","),
  // }));

  var tags = items.map((i) => i.tags);
  tags = [].concat.apply([], tags);
  tags = [...new Set(tags)];

  // var tags = newItems.map((i) => i.tags.split(","));
  // tags = [...new Set(tags)];

  var brands = items.map((i) => i.manufacturer);
  brands = [...new Set(brands)];

  var itemTypes = items.map((i) => i.itemType);
  itemTypes = [...new Set(itemTypes)];

  return {
    // items: newItems,
    items,
    tags,
    brands,
    itemTypes,
  };
};
