import data from './products.json';
import { COFFEE_IMAGES, TEA_IMAGES, DESSERTS_IMAGES } from '../share/constants';

const images = [...COFFEE_IMAGES, ...TEA_IMAGES, ...DESSERTS_IMAGES];
const products = data.map((el, i) => ({ ...el, id: i + 1, img: images[i] }));

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

export function getTabData(categoryName, count, itemsLength) {
  const items = getItemsData(categoryName).map((el) => {
    const { id, name, description, price, category, img } = { ...el };
    return { id, name, description, price, category, img };
  });
  return { items: items.slice(itemsLength, itemsLength + count), length: items.length };
}

export function getItemById(id, category) {
  const item = getItemsData(category).filter((el) => el.id === +id);
  return item[0];
}
