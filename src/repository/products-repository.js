import data from './products.json';

const products = data.map((el, i) => ({ ...el, id: i + 1 }));

function getItemsData(categoryName) {
  return [...products].filter((el) => el.category === categoryName);
}

function getItemData(categoryName) {
  let items;

  switch (categoryName) {
    case 'tea':
      items = getItemsData('tea');
      break;
    case 'dessert':
      items = getItemsData('dessert');
      break;
    default:
      items = getItemsData('coffee');
  }

  return items.length ? items[0] : null;
}

export function getAdditives(categoryName) {
  const category = getItemData(categoryName);
  return category ? category.additivies : [];
}
export function getSizes(categoryName) {
  const category = getItemData(categoryName);
  return category ? category.sizes : [];
}

export function getTabData(categoryName) {
  return getItemsData(categoryName).map((el) => {
    const { name, description, price } = { ...el };
    return { name, description, price };
  });
}
