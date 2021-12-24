const items = require("./data/items");

module.exports = () => {
    var tags = items.map((i) => i.tags);
    tags = [].concat.apply([], tags);
    tags = [...new Set(tags)];

    var brands = items.map((i) => i.manufacturer);
    brands = [...new Set(brands)];
    
    return {
      items,
      tags,
      brands,
    };
  
};
