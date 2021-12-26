import { isProd } from './../helpers/common';
export const API_BASE_URL = isProd ? 'https://mock-product-service.herokuapp.com' : 'http://localhost:4000';
export const API_ITEMS_URL = `${API_BASE_URL}/items`;
export const API_TAGS_URL = `${API_BASE_URL}/tags`;
export const API_BRANDS_URL = `${API_BASE_URL}/brands`;
export const API_ITEM_TYPES_URL = `${API_BASE_URL}/itemTypes`;
